class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
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
        let sprt = my.sprite; // creats an alias formy.sprite for simplicity
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        //

        // make a container for the monster
        sprt.Monstercontainer = this.add.container(this.bodyX, this.bodyY);

        //body
        sprt.body = this.add.sprite(0, 0, "monsterParts", "body_redA.png");

        //arms
        sprt.arm = this.add.sprite(120, 50, "monsterParts", "arm_darkA.png");
        sprt.arm1 = this.add.sprite(-120, 50, "monsterParts", "arm_darkA.png");
        sprt.arm1.flipX = true;// flips the arm across the X axis.

        //legs
        sprt.leg = this.add.sprite(50, 140, "monsterParts", "leg_darkC.png");
        sprt.leg1 = this.add.sprite(-50, 140, "monsterParts", "leg_darkC.png");
        sprt.leg1.flipX = true;

        //horns
        sprt.hrn = this.add.sprite(75, -75, "monsterParts", "detail_white_horn_large.png");
        sprt.hrn1 = this.add.sprite(-75, -75, "monsterParts", "detail_white_horn_large.png");
        sprt.hrn1.flipX = true;  

        //eyes
        sprt.eye = this.add.sprite(0, 0, "monsterParts", "eye_yellow.png");
        
        //mouth
        sprt.mouth = this.add.sprite(0, 50, "monsterParts", "mouthC.png");

        sprt.Monstercontainer.add([sprt.body,sprt.arm,sprt.arm1,
            sprt.leg,sprt.leg1,
            sprt.hrn,sprt.hrn1,
            sprt.eye,sprt.mouth
        ])
        

        this.input.keyboard.enabled = true;
        this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.f = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //let smileActive = false;
        if(this.a.isDown){
            my.sprite.Monstercontainer.x -= 5;
        }
        if(this.d.isDown){
            my.sprite.Monstercontainer.x += 5;
        }
        if(this.s.isDown){
            my.sprite.mouth = this.add.sprite(0,50, "monsterParts", "mouthA.png");
            my.sprite.Monstercontainer.add(my.sprite.mouth);

        }
        if(this.f.isDown){
            my.sprite.mouth = this.add.sprite(0,50, "monsterParts", "mouthB.png");
            my.sprite.Monstercontainer.add(my.sprite.mouth);

        }
    }

}