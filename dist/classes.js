"use strict";
class Robot {
    // protected name: string;
    constructor(_name) {
        this._name = _name;
        // this.name = name
    }
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available`);
        }
        this._color = color;
    }
    set name(value) {
        this._name = 'PREFIX_' + value;
    }
    get name() {
        return this._name + '_SUFFIX';
    }
}
Robot.availableColors = ['green,', 'yellow'];
class FlyingRobot extends Robot {
    constructor(name, jetPackSize) {
        super(name);
        this.jetPackSize = jetPackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot('Saleem');
robot.askName();
const flyingRobot = new FlyingRobot('Saleem', 123);
flyingRobot.move(10);
// console.log(`Flying robot's jetPack size is ${flyingRobot.jetPackSize}`)
flyingRobot.name = 'Ahmed';
console.log(`My name is ${flyingRobot.name}`);
