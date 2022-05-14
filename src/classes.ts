class Robot {

    _color: string;

    static availableColors = ['green,', 'yellow'];
    static isColorAvailable(color: string) {
        return Robot.availableColors.includes(color)
    }


    // protected name: string;
    constructor(protected _name: string) {
        // this.name = name
    }

    askName() {
        console.log(`My name is ${this.name}`)
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`)
    }

    set color(color: string) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available`)
        }
        this._color = color
    }

    set name(value: string) {
        this._name = 'PREFIX_' + value
    }

    get name() {
        return this._name + '_SUFFIX'
    }
}

class FlyingRobot extends Robot {
    private readonly jetPackSize: number
    constructor(name: string, jetPackSize: number) {
        super(name)
        this.jetPackSize = jetPackSize
    }

    move(distance: number) {
        console.log(`${this.name} is flying`)
        super.move(distance)
    }
}

const robot = new Robot('Saleem');
robot.askName()

const flyingRobot = new FlyingRobot('Saleem', 123);
flyingRobot.move(10)
// console.log(`Flying robot's jetPack size is ${flyingRobot.jetPackSize}`)
flyingRobot.name = 'Ahmed'
console.log(`My name is ${flyingRobot.name}`)