// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// função que converte cor hexadecimal em rgb

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// pega o elemento de cor que foi selecionado na tela

let col =  document.getElementById("color");

ctx.fillStyle = "blue"
ctx.fillRect(25,25,40,40)

function Square(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

Square.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fill();
};

Square.prototype.update = function () {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }
  
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
  
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }
  
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }
  
    this.x += this.velX;
    this.y += this.velY;
  };

  Square.prototype.collisionDetect = function () {
    for (let j = 0; j < squares.length; j++) {
      if (!(this === squares[j])) {
        const dx = this.x - squares[j].x;
        const dy = this.y - squares[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + squares[j].size) {
          squares[j].color = this.color =
            "rgb(" +
            hexToRgb(col.value)[0] +
            "," +
            hexToRgb(col.value)[1] +
            "," +
            hexToRgb(col.value)[2] +
            "," +
            Math.random() +
            ")";
        }
      }
    }
  };
  

  let squares = [];

  while (squares.length < 25) {
    let size = random(30, 40);
    let square = new Square(
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      "rgb(" +
      hexToRgb(col.value)[0] +
      "," +
      hexToRgb(col.value)[1]+
      "," +
      hexToRgb(col.value)[2]+
      "," +
      Math.random() +
      ")",
      size,
    );
  
    squares.push(square);
  }

  function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].draw();
      squares[i].update();
      squares[i].collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }

  loop();
