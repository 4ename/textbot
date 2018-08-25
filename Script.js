/*

    setTimeout(function() {
        if (OWOP) {
            OWOP.tool.addToolObject(new OWOP.tool.class('Brush', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool){
                let inprog = false;
                const set = (x, y, color) => {
                    OWOP.net.protocol.lastSentX = x*16;
                    OWOP.net.protocol.lastSentY = y*16;
                    OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
                    OWOP.world.setPixel(x, y, color);
                };
                const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
                function clearChunk(chunkX, chunkY){

                }
                tool.setEvent('mousemove mousedown', function(mouse, event){
                    if(mouse.buttons != 0){
                        if(mouse.buttons == 1) var brushercolor = OWOP.player.selectedColor; else if(mouse.buttons == 2) var brushercolor = [255,255,255];
                        if(mouse.buttons == 1 || mouse.buttons == 2) {
color=OWOP.player.selectedColor;
cola=[0,0,0xb3]
colb=[0x3c,0xb0,255]
colc=[0,0,255]
cold=[255,255,0]

chunkx=Math.floor(OWOP.mouse.tileX/16)*16
chunky=Math.floor(OWOP.mouse.tileY/16)*16
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;chunky++;chunkx=chunkx-16;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;chunky++;chunkx=chunkx-16;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;chunky++;chunkx=chunkx-16;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;////A
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;

OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;///////////////////
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cold);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;///////////////////


OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,cola);chunkx++;chunky++;chunkx=chunkx-16;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colc);chunkx++;chunky++;chunkx=chunkx-16;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;chunky++;chunkx=chunkx-16;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;
OwopTwo.OWOP.world.setPixel(chunkx,chunky,colb);chunkx++;chunky++;chunkx=chunkx-16;
                        }

                    }
                    inprog = true;
                });
            }));
        }
    }, 1000);

    setTimeout(function() {
        if (OWOP) {
            OWOP.tool.addToolObject(new OWOP.tool.class('Brush6', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool){
                let inprog = false;
                const set = (x, y, color) => {
                    OWOP.net.protocol.lastSentX = x*16;
                    OWOP.net.protocol.lastSentY = y*16;
                    OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
                    OWOP.world.setPixel(x, y, color);
                };
                const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
                function clearChunk(chunkX, chunkY){

                }
                tool.setEvent('mousemove mousedown', function(mouse, event){
                    if(mouse.buttons != 0){
                        if(mouse.buttons == 1) var color = OWOP.player.selectedColor; else if(mouse.buttons == 2) var color = [255,255,255];
                        if(mouse.buttons == 1 || mouse.buttons == 2) {

chunkx=Math.floor(OWOP.mouse.tileX/16)*16
chunky=Math.floor(OWOP.mouse.tileY/16)*16
OWOP.world.setPixel(chunkx,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+1,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky,color)
OWOP.world.setPixel(chunkx,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+1,color)
OWOP.world.setPixel(chunkx,chunky+2,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+2,color)
OWOP.world.setPixel(chunkx+2,chunky+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+2,color)
OWOP.world.setPixel(chunkx,chunky+3,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+2,chunky+3,color)
OWOP.world.setPixel(chunkx+3,chunky+3,color)

                        }

                    }
                    inprog = true;
                });
            }));
        }
    }, 1000);

    setTimeout(function() {
        if (OWOP) {
            OWOP.tool.addToolObject(new OWOP.tool.class('Brush5', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(16), false, function(tool){
                let inprog = false;
                const set = (x, y, color) => {
                    OWOP.net.protocol.lastSentX = x*16;
                    OWOP.net.protocol.lastSentY = y*16;
                    OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
                    OWOP.world.setPixel(x, y, color);
                };
                const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
                function clearChunk(chunkX, chunkY){

                }
                tool.setEvent('mousemove mousedown', function(mouse, event){
                    if(mouse.buttons != 0){
                        if(mouse.buttons == 1) var color = OWOP.player.selectedColor; else if(mouse.buttons == 2) var color = [255,255,255];
                        if(mouse.buttons == 1 || mouse.buttons == 2) {

chunkx=Math.floor(OWOP.mouse.tileX/16)*16
chunky=Math.floor(OWOP.mouse.tileY/16)*16
OWOP.world.setPixel(chunkx,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+1,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky,color)
OWOP.world.setPixel(chunkx,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+1,color)
OWOP.world.setPixel(chunkx,chunky+2,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+2,color)
OWOP.world.setPixel(chunkx+2,chunky+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+2,color)
OWOP.world.setPixel(chunkx,chunky+3,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+2,chunky+3,color)
OWOP.world.setPixel(chunkx+3,chunky+3,color)
OWOP.world.setPixel(chunkx+4,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+2,chunky+3,color)
OWOP.world.setPixel(chunkx+4+3,chunky+3,color)
OWOP.world.setPixel(chunkx+8,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+1,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky,color)
OWOP.world.setPixel(chunkx+8,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+1,color)
OWOP.world.setPixel(chunkx+8,chunky+2,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+2,color)
OWOP.world.setPixel(chunkx+8+2,chunky+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+2,color)
OWOP.world.setPixel(chunkx+8,chunky+3,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+2,chunky+3,color)
OWOP.world.setPixel(chunkx+8+3,chunky+3,color)
OWOP.world.setPixel(chunkx+4+8,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky,color)
OWOP.world.setPixel(chunkx+4+8,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+1,color)

OWOP.world.setPixel(chunkx,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+4+1,color)
OWOP.world.setPixel(chunkx,chunky+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+4+2,color)
OWOP.world.setPixel(chunkx+2,chunky+4+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+4+2,color)
OWOP.world.setPixel(chunkx,chunky+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+2,chunky+4+3,color)
OWOP.world.setPixel(chunkx+3,chunky+4+3,color)
OWOP.world.setPixel(chunkx+4,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+1,chunky+4,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+4,color)
OWOP.world.setPixel(chunkx+4,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+4+1,color)
OWOP.world.setPixel(chunkx+4,chunky+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+4+2,color)
OWOP.world.setPixel(chunkx+4+2,chunky+4+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+4+2,color)
OWOP.world.setPixel(chunkx+4,chunky+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+2,chunky+4+3,color)
OWOP.world.setPixel(chunkx+4+3,chunky+4+3,color)
OWOP.world.setPixel(chunkx+8,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+1,chunky+4,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+4,color)
OWOP.world.setPixel(chunkx+8,chunky+4+1,color)
OWOP.world.setPixel(chunkx+8,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+8+4+2,color)
OWOP.world.setPixel(chunkx+8+2,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+8+3,chunky+8+4+2,color)
OWOP.world.setPixel(chunkx+8,chunky+8+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+8+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+2,chunky+8+4+3,color)
OWOP.world.setPixel(chunkx+8+3,chunky+8+4+3,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+3,chunky+8+4,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+8+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+8+1,color)
OWOP.world.setPixel(chunkx+8,chunky+8+2,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+8+2,color)
OWOP.world.setPixel(chunkx+8+2,chunky+8+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+8+2,color)
OWOP.world.setPixel(chunkx+8,chunky+8+3,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+8+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+2,chunky+8+3,color)
OWOP.world.setPixel(chunkx+8+3,chunky+8+3,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+1,chunky+8,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+8,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+8+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+8+1,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+2,color)
OWOP.world.setPixel(chunkx+4+8+2,chunky+8+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+8+2,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+2,chunky+8+3,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+4+1,color)
OWOP.world.setPixel(chunkx+8,chunky+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+4+2,color)
OWOP.world.setPixel(chunkx+8+2,chunky+4+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+4+2,color)
OWOP.world.setPixel(chunkx+8,chunky+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+2,chunky+4+3,color)
OWOP.world.setPixel(chunkx+8+3,chunky+4+3,color)
OWOP.world.setPixel(chunkx+4+8,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+1,chunky+4,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+4,color)
OWOP.world.setPixel(chunkx+4+8,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+4+1,color)
OWOP.world.setPixel(chunkx+4+8,chunky+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+4+2,color)
OWOP.world.setPixel(chunkx+4+8+2,chunky+4+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+4+2,color)
OWOP.world.setPixel(chunkx+4+8,chunky+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+2,chunky+4+3,color)
OWOP.world.setPixel(chunkx+4+8+3,chunky+4+3,color)
OWOP.world.setPixel(chunkx,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+1,chunky+8,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+8,color)
OWOP.world.setPixel(chunkx,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+8+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+8+1,color)
OWOP.world.setPixel(chunkx,chunky+8+2,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+8+2,color)
OWOP.world.setPixel(chunkx+2,chunky+8+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+8+2,color)
OWOP.world.setPixel(chunkx,chunky+8+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+1,chunky,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky,color)
OWOP.world.setPixel(chunkx+4,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+1,color)
OWOP.world.setPixel(chunkx+4,chunky+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+2,color)
OWOP.world.setPixel(chunkx+4+2,chunky+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+2,color)
OWOP.world.setPixel(chunkx+4,chunky+3,color)

OWOP.world.setPixel(chunkx+4+8,chunky+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+2,color)
OWOP.world.setPixel(chunkx+4+8+2,chunky+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+2,color)
OWOP.world.setPixel(chunkx+4+8,chunky+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+3,color)
OWOP.world.setPixel(chunkx+4+8+3,chunky+3,color)
OWOP.world.setPixel(chunkx,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+1,chunky+4,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+4,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+8+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+2,chunky+8+3,color)
OWOP.world.setPixel(chunkx+3,chunky+8+3,color)
OWOP.world.setPixel(chunkx+4,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+1,chunky+8,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+8,color)
OWOP.world.setPixel(chunkx+4,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky+8+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+8+1,color)
OWOP.world.setPixel(chunkx+4,chunky+8+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+8+2,color)
OWOP.world.setPixel(chunkx+4+2,chunky+8+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+8+2,color)
OWOP.world.setPixel(chunkx+4,chunky+8+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+8+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+2,chunky+8+3,color)
OWOP.world.setPixel(chunkx+4+3,chunky+8+3,color)
OWOP.world.setPixel(chunkx+8,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+1,chunky+8,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+8,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+8,color)
OWOP.world.setPixel(chunkx+8,chunky+8+1,color)
Owop3.OWOP.world.setPixel(chunkx+8+1,chunky+8+1,color)

OWOP.world.setPixel(chunkx+4+8+3,chunky+8+3,color)
OWOP.world.setPixel(chunkx,chunky+8+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+1,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+2,chunky+8+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+8+4,color)
OWOP.world.setPixel(chunkx,chunky+8+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+8+4+1,color)
OWOP.world.setPixel(chunkx+2,chunky+8+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+8+4+1,color)
OWOP.world.setPixel(chunkx,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+8+4+2,color)
OWOP.world.setPixel(chunkx+2,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+3,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx,chunky+8+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+1,chunky+8+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+2,chunky+8+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+3,chunky+8+4+3,color)
OWOP.world.setPixel(chunkx+4,chunky+8+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+1,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+4+2,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+4+3,chunky+8+4,color)
OWOP.world.setPixel(chunkx+4,chunky+8+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+8+4+1,color)
OWOP.world.setPixel(chunkx+4+2,chunky+8+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+3,chunky+8+4+1,color)
OWOP.world.setPixel(chunkx+4,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+1,chunky+8+4+2,color)
OWOP.world.setPixel(chunkx+4+2,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+3,chunky+8+4+2,color)
OWOP.world.setPixel(chunkx+4,chunky+8+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+1,chunky+8+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+2,chunky+8+4+3,color)
OWOP.world.setPixel(chunkx+4+3,chunky+8+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+8,chunky+8+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+1,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+8+4,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+8+4,color)
Owop3.OWOP.world.setPixel(chunkx+8,chunky+8+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+1,chunky+8+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+8+2,chunky+8+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+8+3,chunky+8+4+1,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+2,chunky+8+4+1,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+8+4+1,color)
OWOP.world.setPixel(chunkx+4+8,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+4+2,color)
OWOP.world.setPixel(chunkx+4+8+2,chunky+8+4+2,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+3,chunky+8+4+2,color)
Owop3.OWOP.world.setPixel(chunkx+4+8,chunky+8+4+3,color)
Owop3.OWOP.world.setPixel(chunkx+4+8+1,chunky+8+4+3,color)
OwopTwo.OWOP.world.setPixel(chunkx+4+8+2,chunky+8+4+3,color)
OWOP.world.setPixel(chunkx+4+8+3,chunky+8+4+3,color)
                        }

                    }
                    inprog = true;
                });
            }));
        }
    }, 1000);


    setTimeout(function() {
        if (OWOP) {
            OWOP.tool.addToolObject(new OWOP.tool.class('Brush4', OWOP.cursors.brush, OWOP.fx.player.RECT_SELECT_ALIGNED(1), false, function(tool){
                let inprog = false;
                const set = (x, y, color) => {
                    OWOP.net.protocol.lastSentX = x*16;
                    OWOP.net.protocol.lastSentY = y*16;
                    OWOP.net.connection.send(new Int32Array([OWOP.net.protocol.lastSentX, OWOP.net.protocol.lastSentY, 0]).buffer);
                    OWOP.world.setPixel(x, y, color);
                };
                const eq = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
                function clearChunk(chunkX, chunkY){

                }
                tool.setEvent('mousemove mousedown', function(mouse, event){
                    if(mouse.buttons != 0){
                        if(mouse.buttons == 1) var color = OWOP.player.selectedColor; else if(mouse.buttons == 2) var color = [255,255,255];
                        if(mouse.buttons == 1 || mouse.buttons == 2) {

chunkx=Math.floor(OWOP.mouse.tileX)
chunky=Math.floor(OWOP.mouse.tileY)
OWOP.world.setPixel(chunkx,chunky,color)
OwopTwo.OWOP.world.setPixel(chunkx,chunky,color)
Owop3.OWOP.world.setPixel(chunkx,chunky,color)
                        }

                    }
                    inprog = true;
                });
            }));
        }
    }, 1000);*/
/*function send(a,b,c){
OWOP.chat.send(a)
OwopTwo.OWOP.chat.send(b)
Owop3.OWOP.chat.send(c)
}*/
//end of brusher
xah=0;
//Data format:
//[[b1,b2 etc in an array],
//[b1,b2 etc]
//[b1 b2 etc] etc]
//Letter width*height is 7x5.
letters=[] //empty letters array (if existant), otherwise it will be created
function sp(x,y,u,h){
	if (h==1){

		OWOP.world.setPixel(x,y,OWOP.player.selectedColor,u);} else if (h==0){
		OWOP.world.setPixel(x,y,[255,255,255],u);} else if (h==-1){
		OWOP.world.setPixel(x,y,[255,0,0],u);} else if (h==-2){
		OWOP.world.setPixel(x,y,[0,0,0],u);
	}
}
var wasp=function(x,y,h){sp(OWOP.mouse.tileX+x,OWOP.mouse.tileY+y,false,h)}
var tp=function(x,y){OWOP.emit(6666694,x,y)}; //short teleport
function addLetter(n,d){
	eval("letters["+n.charCodeAt(0)+"]=d") //eval function will set the decimal character number in "letters" to the data of the letter
}
function placeLetter(n){
	for (i=0;i<=letters[n].length-1;i++){ 
		for (j=0;j<=letters[n][i].length;j++){ //same as above, but i is j
			wasp(j,i,letters[n][i][j])
			xah++;
			
		}
	}	tp(Math.floor(OWOP.camera.x+((screen.availWidth/2)/OWOP.camera.zoom)+letters[n][0].length+1),Math.floor(OWOP.camera.y+((screen.availHeight/2)/OWOP.camera.zoom))-4)
}
                        
                         
                         
//The actual letters
addLetter(" ",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])// //
addLetter("þ",[[-2,-2,-2,-2,-2,-2,-2,-2,-2],[-2,-1,-1,-1,-1,-1,-1,-1,-2],[-2,-1,0,0,0,0,-1,-1,-2],[-2,-1,0,-1,-1,-1,0,-1,-2],[-2,-1,0,0,0,0,-1,-1,-2],[-2,-1,0,-1,-1,-1,0,-1,-2],[-2,-1,0,0,0,0,-1,-1,-2],[-2,-1,-1,-1,-1,-1,-1,-1,-2],[-2,-2,-2,-2,-2,-2,-2,-2,-2]]) //b button
addLetter("!",[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0]])//!
addLetter("$",[[0,0,1,0,0],[0,1,1,1,0],[1,0,1,0,0],[0,1,1,1,0],[0,0,1,0,1],[0,1,1,1,0][0,0,1,0,0]])//$
addLetter("%",[[1,1,0,0,1],[1,1,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,1,1],[1,0,0,1,1]])//%
addLetter("\'",[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])//'
addLetter(",",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,0,0,0],[1,1,0,0,0],[0,1,0,0,0],[1,0,0,0,0]])//,
addLetter("-",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])//-
addLetter("?",[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0]])//?
addLetter(".",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0]])//.
addLetter("#",[[0,1,0,1,0],[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0]])//#
addLetter("0",[[0,1,1,1,0],[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1],[0,1,1,1,0]])//0
addLetter("1",[[0,0,1,0,0],[0,1,1,0,0],[1,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]])//1
addLetter("2",[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]])//2
addLetter("3",[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,1,1,0],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//3
addLetter("4",[[0,0,0,1,1],[0,0,1,0,1],[0,1,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1]])//4
addLetter("5",[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,0,0],[0,0,0,1,0],[0,0,0,0,1],[0,0,0,1,0],[1,1,1,0,0]])//5
addLetter("6",[[0,0,1,1,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//6
addLetter("7",[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0]])//7
addLetter("8",[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//8
addLetter("9",[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,1,1,0,0]])//9
addLetter("@",[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,0]])//@
addLetter("A",[[0,0,1,0,0],[0,0,1,0,0],[0,1,0,1,0],[0,1,0,1,0],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1]])//A
addLetter("B",[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]])//B
addLetter("C",[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,1]])//C
addLetter("D",[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]])//D
addLetter("E",[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]])//E
addLetter("F",[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]])//F
addLetter("G",[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//G
addLetter("H",[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]])//H
addLetter("I",[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]])//I
addLetter("J",[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,0,0,0]])//J
addLetter("K",[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,1,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,0,1],[1,0,0,0,1]])//K
addLetter("L",[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]])//L
addLetter("M",[[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]])//M
addLetter("N",[[1,0,0,0,1],[1,1,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,1,1],[1,0,0,0,1]])//N
addLetter("O",[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//O
addLetter("P",[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]])//P
addLetter("Q",[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,1,0],[0,1,1,0,1]])//Q
addLetter("R",[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]])//R
addLetter("S",[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0]])//S
addLetter("T",[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]])//T
addLetter("U",[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//U
addLetter("V",[[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0]])//V
addLetter("W",[[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]])//W
addLetter("X",[[1,0,0,0,1],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]])//X
addLetter("Y",[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]])//Y
addLetter("Z",[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,1]])//Z
addLetter("a",[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[0,1,1,1,1],[1,0,0,0,1],[0,1,1,1,1]])//a
addLetter("b",[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,1,1,0,0]])//b
addLetter("c",[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,0]])//c
addLetter("d",[[0,0,0,0,1],[0,0,0,0,1],[0,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1]])//d
addLetter("e",[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,0],[0,1,1,1,1]])//e
addLetter("f",[[0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]])//f
addLetter("g",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,1,1,1,0]])//g
addLetter("h",[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]])//h
addLetter("i",[[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]])//i
addLetter("j",[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,0,0,0]])//j
addLetter("k",[[0,1,0,0,0],[0,1,0,0,0],[0,1,0,0,1],[0,1,0,1,0],[0,1,1,0,0],[0,1,0,1,0],[0,1,0,0,1]])//k
addLetter("l",[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]])//l
addLetter("m",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,0,1,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1]])//m
addLetter("n",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0]])//n
addLetter("o",[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]])//o
addLetter("p",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]])//p
addLetter("q",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1]])//q
addLetter("r",[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]])//r
addLetter("s",[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]])//s
addLetter("t",[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]])//t
addLetter("u",[[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1]])//u
addLetter("v",[[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0]])//v
addLetter("w",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]])//w
addLetter("x",[[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]])//x
addLetter("y",[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]])//y
addLetter("z",[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]])//z
addLetter("<",[[0,0,0,0,0],[0,0,0,1,1],[0,1,1,0,0],[1,0,0,0,0],[0,1,1,0,0],[0,0,0,1,1],[0,0,0,0,0]])//<
addLetter("=",[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]])//=
addLetter(">",[[0,0,0,0,0],[0,0,0,1,1],[0,1,1,0,0],[1,0,0,0,0],[0,1,1,0,0],[1,1,0,0,0],[0,0,0,0,0]])//>
addLetter("(",[[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,1,0]])//(
addLetter(")",[[0,1,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0]])//)
addLetter("{",[[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,1,0]])//{
addLetter("}",[[0,1,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0]])//}
addLetter("[",[[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,1,0]])//[
addLetter("]",[[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0]])//]
addLetter("\\",[[0,1,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,1,0]])//\
addLetter("/",[[0,0,0,1,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0],[0,1,0,0,0]])///
addLetter(":",[[0,0,1,1,0],[0,0,1,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,1,1,0]])//:
addLetter(";",[[0,0,1,1,0],[0,0,1,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,1,0,0]])//;
function encryptString(s,z){//does NOT encrypt strings with a password.
	str=s;
	l=0
		var cat=setInterval(function(){if (l<=str.length){placeLetter(str.charCodeAt(l));var dog=str.length-l-1;console.log("Chars remaining: "+dog.toString());l++}},z)
setTimeout(function(){clearInterval(cat);},str.length*(z+30))
    
}console.log("%".charCodeAt(0))
//encryptString("That token is huge...",1000)
addLetter("\"",[[0,1,0,1,0],[0,1,0,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])//"
