class Square {
    constructor(side){
        this.side = side
        this.p = this.side * 4
        this.a = this.side ** 2
        this.d = Math.sqrt(2 * this.a).toFixed(3)
    }

    describe(){
        return `Square with side ${this.side} has perimeter of ${this.p}, area of ${this.a}, and diagonal of ${this.d}`
    }
}

squareOne = new Square(2)
squareTwo = new Square(3)
squareThree = new Square(4)

console.log (squareOne.describe())
console.log (squareTwo.describe())
console.log(squareThree.describe())