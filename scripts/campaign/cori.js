const zuila = require('campaign/zuila');

const cori_gen = extend(PlanetGenerator, {
    rawHeight(position){
        position = Tmp.v33.set(position).scl(this.scl);
        return (Mathf.pow(this.noise.octaveNoise3D(7, 0.5, 1 / 3, position.x, position.y, position.z), 2.3) + this.waterOffset) / (1 + this.waterOffset);
    },

    getHeight(position){
        var height = this.rawHeight(position);
        return Math.max(height, this.water);
    },

    getColor(position){
        var block = this.getBlock(position);
        if(block == null) return Blocks.darksand.mapColor;
        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        
        return Tmp.c1;
    },

    genTile(position, tile){
        tile.floor = this.getBlock(position);
        tile.block = tile.floor.asFloor().wall;

        if(this.rid.getValue(position.x, position.y, position.z, 22) > 0.32){
            tile.block = Blocks.air;
        };
    },

    getBlock(position){
        var arr = this.arr;
        var scl = this.scl;
        
        var height = this.rawHeight(position);
        Tmp.v31.set(position);
        
        position = Tmp.v33.set(position).scl(scl);
        var rad = this.scl;
        var temp = Mathf.clamp(Math.abs(position.y * 2) / rad);
        var tnoise = this.noise.octaveNoise3D(7, 0.56, 1 / 3, position.x, position.y + 999, position.z);
        
        temp = Mathf.lerp(temp, tnoise, 0.5);
        height *= 1.2;
        height = Mathf.clamp(height);

        var res = arr[Mathf.clamp(Math.floor(temp * arr.length), 0, arr[0].length - 1)][Mathf.clamp(Math.floor(height * arr[0].length), 0, arr[0].length - 1)];
        return res;
    },
    
    noiseOct(x, y, octaves, falloff, scl){
        var v = this.sector.rect.project(x, y).scl(5);
        return this.noise.octaveNoise3D(octaves, falloff, 1 / scl, v.x, v.y, v.z);
    },

    generateSector(sec){
      var poles = Math.abs(sec.tile.v.y);
      if (((poles <= 0.4) && (Math.random < 0.2)) || (poles > 0.4 && Math.random() < 0.35) || (poles > 0.93)){
        sec.generateEnemyBase = true;
        }
    },

    generate(tiles, sec){
        this.tiles = tiles;
        this.sector = sec;
        
        const rand = this.rand;
        rand.setSeed(sec.id);
        
        //tile, sector
        var gen = new TileGen();
        this.tiles.each((x, y) => {
            gen.reset();
            var position = this.sector.rect.project(x / tiles.width, y / tiles.height);

            this.genTile(position, gen);
            tiles.set(x, y, new Tile(x, y, gen.floor, gen.overlay, gen.block));
        });
        
        const Room = {
            x: 0, y: 0, radius: 0,
            connected: new ObjectSet(),

            connect(to){
                if(this.connected.contains(to)) return;

                this.connected.add(to);
                
                var nscl = rand.random(20, 60);
                var stroke = rand.random(4, 12);
                
                cori_gen.brush(cori_gen.pathfind(this.x, this.y, to.x, to.y, tile => (tile.solid() ? 5 : 0) + cori_gen.noiseOct(tile.x, tile.y, 1, 1, 1 / nscl) * 60, Astar.manhattan), stroke);
            }
        };
        
        const setRoom = (x, y, radius) => {
            var room = Object.create(Room);
            
            room.x = x;
            room.y = y;
            room.radius = radius;
            
            return room;
        };

        this.cells(4);
        this.distort(10, 12);

        this.width = this.tiles.width;
        this.height = this.tiles.height;

        var constraint = 1.3;
        var radius = this.width / 2 / Mathf.sqrt3;
        var rooms = rand.random(2, 5);
        var roomseq = new Seq();

        for(var i = 0; i < rooms; i++){
            Tmp.v1.trns(rand.random(360), rand.random(radius / constraint));
            var rx = Math.floor(this.width / 2 + Tmp.v1.x);
            var ry = Math.floor(this.height / 2 + Tmp.v1.y);
            var maxrad = radius - Tmp.v1.len();
            var rrad = Math.floor(Math.min(rand.random(9, maxrad / 2), 30));
            
            roomseq.add(setRoom(rx, ry, rrad));
        };

        var spawn = null;
        var enemies = new Seq();
        var enemySpawns = rand.random(1, Math.max(Mathf.floor(this.sector.threat * 4), 1));
        
        var offset = rand.nextInt(360);
        var length = this.width / 2.55 - rand.random(13, 23);
        var angleStep = 5;
        var waterCheckRad = 5;
        
        for(var i = 0; i < 360; i += angleStep){
            var angle = offset + i;
            var cx = Math.floor(this.width / 2 + Angles.trnsx(angle, length));
            var cy = Math.floor(this.height / 2 + Angles.trnsy(angle, length));

            var waterTiles = 0;

            for(var rx = -waterCheckRad; rx <= waterCheckRad; rx++){
                for(var ry = -waterCheckRad; ry <= waterCheckRad; ry++){
                    var tile = this.tiles.get(cx + rx, cy + ry);
                    
                    if(tile == null || tile.floor().liquidDrop != null){
                        waterTiles++;
                    };
                };
            };

            if(waterTiles <= 4 || (i + angleStep >= 360)){
                spawn = setRoom(cx, cy, rand.random(10, 18));
                roomseq.add(spawn);

                for(var j = 0; j < enemySpawns; j++){
                    var enemyOffset = rand.range(60);
                    
                    Tmp.v1.set(cx - this.width / 2, cy - this.height / 2).rotate(180 + enemyOffset).add(this.width / 2, this.height / 2);
                    var espawn = setRoom(Math.floor(Tmp.v1.x), Math.floor(Tmp.v1.y), rand.random(10, 16));
                    roomseq.add(espawn);
                    enemies.add(espawn);
                };

                break;
            };
        };

        roomseq.each(room => this.erase(room.x, room.y, room.radius));

        var connections = rand.random(Math.max(rooms - 1, 1), rooms + 3);
        for(var i = 0; i < connections; i++){
            roomseq.random(rand).connect(roomseq.random(rand));
        };

        roomseq.each(room => spawn.connect(room));

        this.cells(1);
        this.distort(10, 6);

        this.inverseFloodFill(this.tiles.getn(spawn.x, spawn.y));

        var ores = Seq.with(Blocks.oreCopper, Blocks.oreLead, Blocks.oreCoal, Vars.content.getByName(ContentType.block, "goldmod-ore-goldOre"));
        var poles = Math.abs(this.sector.tile.v.y);
        var nmag = 0.5;
        var scl = 1;
        var addscl = 1.3;
        

        if(rand.chance(0.25)){
          ores.add(Blocks.oreScrap);
        };
        if(poles >= 0.2){
          ores.add(Blocks.oreTitanium);
        }
        if(poles >= 0.3){
          ores.add(Blocks.oreThorium);
        }
        if((poles >= 0.6) && (rand.chance(0.3))){
          ores.add(Vars.content.getByName(ContentType.block, "goldmod-ore-palladium"));
        }
        
        var frequencies = new FloatSeq();
        for(var i = 0; i < ores.size; i++){
            frequencies.add(rand.random(-0.1, 0.01) - i * 0.01 + poles * 0.04);
        };

        this.pass((x, y) => {
            if(!this.floor.asFloor().hasSurface()) return;

            var offsetX = x - 4, offsetY = y + 23;
            for(var i = ores.size - 1; i >= 0; i--){
                var entry = ores.get(i);
                var freq = frequencies.get(i);
                
                if(Math.abs(0.5 - this.noiseOct(offsetX, offsetY + i * 999, 2, 0.7, (40 + i * 2))) > 0.22 + i * 0.01 &&
                    Math.abs(0.5 - this.noiseOct(offsetX, offsetY - i * 999, 1, 1, (30 + i * 4))) > 0.37 + freq){
                    this.ore = entry;
                    break;
                };    
            };

            if(this.ore == Blocks.oreScrap && rand.chance(0.33)){
                this.floor = Blocks.metalFloorDamaged;
            };
        });

        this.trimDark();
        this.median(2);
        this.tech();
        this.pass((x, y) => {});

        var difficulty = this.sector.threat;
        const ints = this.ints;
        
        ints.clear();
        ints.ensureCapacity(this.width * this.height / 4);

        Schematics.placeLaunchLoadout(spawn.x, spawn.y);

        enemies.each(espawn => this.tiles.getn(espawn.x, espawn.y).setOverlay(Blocks.spawn));

        var state = Vars.state;

        if(this.sector.hasEnemyBase()){
            this.basegen.generate(tiles, enemies.map(r => this.tiles.getn(r.x, r.y)), this.tiles.get(spawn.x, spawn.y), state.rules.waveTeam, this.sector, difficulty);

            state.rules.attackMode = this.sector.info.attack = true;
        }else{
            state.rules.winWave = this.sector.info.winWave = 10 + 5 * Math.max(difficulty * 10, 1);
        };

        var waveTimeDec = 0.4;

        state.rules.waveSpacing = Mathf.lerp(60 * 65 * 2, 60 * 60 * 1, Math.floor(Math.max(difficulty - waveTimeDec, 0) / 0.8));
        state.rules.waves = this.sector.info.waves = true;
        state.rules.enemyCoreBuildRadius = 480;

        state.rules.spawns = Waves.generate(difficulty, new Rand(), state.rules.attackMode);
        
        //this.generate(tiles);
    },

    postGenerate(tiles){
        if(this.sector.hasEnemyBase()){
            this.basegen.postGenerate();
        };
    } 
});
cori_gen.arr = [   
    [Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    
    [Blocks.sand, Blocks.darksand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
    [Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],

    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand],
    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand],
    [Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand],
    [Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.darksand, Blocks.darksand]
];
cori_gen.rid = new Packages.arc.util.noise.RidgedPerlin(1, 2);
cori_gen.basegen = new BaseGenerator();
cori_gen.scl = 5;
cori_gen.waterOffset = 0.07;
cori_gen.water = 2 / cori_gen.arr[0].length;

const cori = new JavaAdapter(Planet, {}, "cori", zuila.zuila, 3, 0.8);
cori.generator = cori_gen;
cori.startSector = 7;
cori.hasAtmosphere = true;
cori.atmosphereColor = Color.valueOf("1c7fa690");
cori.meshLoader = function(){
  return new HexMesh(cori, 7);
};

const pallaCrags = new SectorPreset("pallaCrags", cori, 194);
pallaCrags.difficulty = 6;
pallaCrags.captureWave = 40;

const scrapWasteland = new SectorPreset("scrap-wasteland", cori, 26);
scrapWasteland.difficulty = 6;
scrapWasteland.captureWave = 40;

module.exports = {
  cori: cori,
  pallaCrags: pallaCrags,
  scrapWasteland: scrapWasteland
}