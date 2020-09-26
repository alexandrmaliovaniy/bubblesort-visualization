function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
Object.prototype.swap = function(i, target) {
    let pos1 = this[i].left;
    let pos2 = this[target].left;
    let tmp = this[i];
    this[i] = this[target];
    this[i].left = pos1;
    this[target] = tmp;
    this[target].left = pos2;
}
Object.prototype.mix = function() {
    for (let i = 0; i < this.length; i++) {
        let rand = getRandomInt(this.length);
        this.swap(i, rand);
    }
    this.update();
}
Object.prototype.update = function() {
    document.body.innerHTML = '';
    for (let i = 0; i < this.length; i++) {
        let brick = document.createElement('div');
        brick.style.width = '20px';
        brick.style.height = this[i].height + 'px';
        brick.style.position = 'absolute';
        brick.style.left = this[i].left + 'px';
        brick.style.top = this[i].top + 'px';
        brick.style.background = this[i].color;
        document.body.appendChild(brick);
    }
}
Object.prototype.bubleSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        if (this[i].height > this[i+1].height) {
            this.swap(i, i+1);
            this.update();
            let that = this;
            setTimeout(function(){
                that.bubleSort();
            }, 10 * 0.75);
            break;
        }
    }
}

function marge(left, right) {
    let arr = []
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {

        }
    }
}

Object.prototype.margeSort = function() {
    if (this.length < 2) {
        return this;
    } else {
        let left = this.slice(0, this.length / 2).margeSort();
        let right = this.slice(this.length / 2, this.length).margeSort();
        return merge(left, right);
    }
}



let bricks = [];


const offset = {
    x: 200,
    y: 200
}

for (let i = 0; i < 100; i++) {
    bricks[i] = {};
    bricks[i].height = i * 5;
    bricks[i].left = offset.x + (10 * i);
    bricks[i].top = offset.y + 500 - (i * 5);
    bricks[i].color = '#000';
}
bricks.mix();
bricks.update();
bricks.bubleSort();
