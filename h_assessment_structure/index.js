const prompt = require("prompt-sync")({ sigint: true });

// Done: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';


// Done: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants

// 3. Game input
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";


// Done: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit. Try again.";
const MSG_INVALID = "That's not right";
const MSG_WELCOME = "\n***************************\nWelcome to Find My Hat Game\n***************************\n";


// Done: WIN / LOSE / OUT / QUIT messages constants

const WIN = "Congratulations,Winner Winner Chicken Dinner!";            /* WIN message */
const LOSE = "You fell into the hole.You lost your way. You LOSE!";     /* Lose message.Fall into hole indicated as O */
const OUT = "You went astray! Out of bounds!";                          /* Out of bound msg. Out of scope */



// Done: MAP ROWS, COLUMNS AND PERCENTAGE

const ROWS = 5;                                                         /* number of rows in the field */
const COLS = 10;                                                        /* number of columns in the field */
const PERCENT = 0.2;                                                    /* variable that set  % of randomisation of holes in game field to 20% */

class Field {
  // Constructor for the Field class.
  // This method runs automatically when a new Field object is created.
  // A 2D array representing the game field.

  /**
  * 
  * 
  * @param {Array} field; 
  */

  constructor(field = null) {
    this.field = field;                       /* this stores the 2d array game map */
    this.gamePlay = false;                    /*  game is by default = false.( not started unless deliberately initialised) */
    this.playerPosition = { x: 0, y: 0 }      /* player position is by default. */

  }

  // Done: generateField is a static method, returning a 2D array of the fields 
  /**
  * 
  * 
  * @param {Number} rows 
  * @param { Number } cols 
  * @param { Number } PERCENT 
  * @param { Array } msg 
  */

  static generateField(rows, cols, PERCENT) {
    const map = new Array();                  /* this holds the 2d grid.container. const unchanged */

    for (let row = 0; row < rows; row++) {
      map[row] = new Array();


      for (let col = 0; col < cols; col++) {
        // Check probability to place GRASS or HOLE
        map[row][col] = Math.random() > PERCENT ? GRASS : HOLE;
      }
    }
    return map;
  }

  // Done: welcomeMessage is a static method, displays a string
  /**
  * 
  * @param {string} msg 
  * 
  */
  static welcomeMessage(msg) {
    console.log(msg);
  }
  // Done: setHat positions the hat along a random x and y position within the field array
  setHat() {
    const xHat = Math.floor(Math.random() * COLS);  /* add random column */
    const yHat = Math.floor(Math.random() * ROWS);  /* add random row */

    // this is to avoid hat replicating on the player's starting point
    if (xHat === 0 && yHat === 0) return this.setHat(); /* respawn */

    this.field[yHat][xHat] = HAT; /* place hat on the map */
  }


  // Done: printField displays the updated status of the field position
  printField() {
    this.field.forEach((row) => {
      console.log(row.join("")); /* join symbols in rows */
    })
  }



  // Done: updateMove displays the move (key) entered by the user
  /**
   * @param {String} m
   * @returns
   */
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP)
    if (m === DOWN) return console.log(MSG_DOWN)
    if (m === LEFT) return console.log(MSG_LEFT)
    if (m === RIGHT) return console.log(MSG_RIGHT)
    if (m === QUIT) return console.log(MSG_QUIT)
    return console.log(MSG_INVALID);                    /* msg for invalid key. ie numbers etc other than w,a,s,d,q */
  }

  // !! to: updateGame Assessment Challenge
  // accept value of player's move (up,down.left.right)
  /**
   * 
   * @param {*} m 
   */


  // 
  // 

  //   capture the player's current X and current Y position first
  updateGame(m = "") {
    // Get current coordinates
    let { x, y } = this.playerPosition; /* current posiktion */

    // Apply movement
    if (m === UP) y -= 1;
    if (m === DOWN) y += 1;
    if (m === LEFT) x -= 1;
    if (m === RIGHT) x += 1;

    // Check OUT OF BOUNDS
    if (y < 0 || y >= ROWS || x < 0 || x >= COLS) {
      console.log(OUT);                             /* msg for out of bounds.process.exit to auto exit game until game resrtart manually  */
      process.exit();
    }

    // Check the tile we moved to
    const tile = this.field[y][x];                    /* symbol at new postion*/

    if (tile === HOLE) {                              /* checking hole. ie LOSE */
      console.log(LOSE);
      process.exit();
    }

    if (tile === HAT) {                               /* checking Hat.ie WIN */
      console.log(WIN);
      process.exit();
    }

    // Clear previous player position (IMPORTANT)
    this.field[this.playerPosition.y][this.playerPosition.x] = GRASS; /* clear old location */

    // Update new player position
    this.playerPosition = { x, y };                                   /* update coordinate on map */
    this.field[y][x] = PLAYER;                                        /* draw player on the map */
  }

  // if player x and y position is a HOLE
  // OUT 
  // process.exit();
  // if player x and y postion is out of the map
  // LOSE 
  // process.exit();
  // if the player x and y position === x and y the Hat (^)
  // WIN 
  // process.exit();
  // otherwise, move the player to the new x and y position based on move


  //  Done: start() a public method of the class to start the game
  start() {
    this.gamePlay = true;             /*  starts the game */
    this.field[0][0] = PLAYER;        /*  position player on field based on player default start position */
    this.setHat();                    /* the hat position */


    // while gameplay is === true, track player movement and updates
    while (this.gamePlay) {
      this.printField();                                                           /* prints the formatted field. user inputs */
      const input = prompt("(w),(a),(s),(d),(q) exit: ").trim().toLowerCase();

      // THIS IS MY SWITCH BLOCK!!
      switch (input) {
        case UP:
          this.updateMove(UP);
          this.updateGame(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          this.updateGame(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          this.updateGame(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          this.updateGame(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);
          this.gamePlay = false;      /* stops game on q. quits game */
          continue;
        default:
          this.updateMove();          /* invalid input */
      }


    }
  }

  // 

}


// Done: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);


// DONE: generate a welcome message
Field.welcomeMessage(MSG_WELCOME);

// Done: Create a new instance of the game
const game = new Field(gameField);

// Done: Invoke method start(...) from the instance of game object
game.start();
