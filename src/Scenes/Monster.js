class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.rlegX = this.bodyX+50;
        this.rlegY = this.bodyY+100;
        this.llegX = this.bodyX - 50;
        this.llegY = this.bodyY + 100;
        this.rarmX = this.bodyX + 95;
        this.rarmY = this.bodyY + 50; 
        this.larmX = this.bodyX -95;
        this.larmY = this.bodyY +50;
        this.noseY = this.bodyY -50;
        this.mouthY = this.bodyY + 50;
        this.eyeY = this.bodyY - 50;
        this.antennaY = this.bodyY - 110;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rleg = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_greenA.png");
        my.sprite.lleg = this.add.sprite(this.llegX, this.llegY, "monsterParts", "leg_greenA.png");
        my.sprite.lleg.flipX = true;
        my.sprite.rarm = this.add.sprite(this.rarmX, this.rarmY, "monsterParts", "arm_greenA.png");
        my.sprite.larm = this.add.sprite(this.larmX, this.larmY, "monsterParts", "arm_greenA.png");
        my.sprite.larm.flipX = true;
        my.sprite.eye = this.add.sprite(this.bodyX, this.eyeY, "monsterParts", "eye_angry_blue.png");
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "nose_green.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.antenna = this.add.sprite(this.bodyX, this.antennaY, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.fang = this.add.sprite(this.bodyX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        var F = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        var S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        var A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        var D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        if (Phaser.Input.Keyboard.JustDown(F)) {
            my.sprite.fang.visible = true;
            my.sprite.mouth.visible = false;
        }
        if (Phaser.Input.Keyboard.JustDown(S)) {
            my.sprite.fang.visible = false;
            my.sprite.mouth.visible = true;
        }
        if (A.isDown) {
            this.bodyX -= 1;
            this.rlegX -= 1;
            this.llegX -= 1;
            this.rarmX -= 1;
            this.larmX -= 1;
            my.sprite.body.x = this.bodyX;
            my.sprite.rleg.x = this.rlegX;
            my.sprite.lleg.x = this.llegX;
            my.sprite.rarm.x = this.rarmX;
            my.sprite.larm.x = this.larmX;
            my.sprite.eye.x = this.bodyX;
            my.sprite.nose.x = this.bodyX;
            my.sprite.mouth.x = this.bodyX;
            my.sprite.fang.x = this.bodyX;
            my.sprite.antenna.x = this.bodyX;
        }
    
        if (D.isDown) {
            this.bodyX += 1;
            this.rlegX += 1;
            this.llegX += 1;
            this.rarmX += 1;
            this.larmX += 1;
    
            my.sprite.body.x = this.bodyX;
            my.sprite.rleg.x = this.rlegX;
            my.sprite.lleg.x = this.llegX;
            my.sprite.rarm.x = this.rarmX;
            my.sprite.larm.x = this.larmX;
            my.sprite.eye.x = this.bodyX;
            my.sprite.nose.x = this.bodyX;
            my.sprite.mouth.x = this.bodyX;
            my.sprite.fang.x = this.bodyX;
            my.sprite.antenna.x = this.bodyX;
        }
        //console.log(this.bodyX);


       
    }

}