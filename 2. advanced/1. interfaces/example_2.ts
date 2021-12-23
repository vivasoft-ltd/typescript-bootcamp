/*
 * Example: Extend Interface
 */
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}


/*
 * Example: Multiple Interface Inheritance
 */
interface IParent1 {
    v1: number
}

interface IParent2 {
    v2: number
}

interface Child extends IParent1, IParent2 {
}

const Iobj: Child = {v1: 12, v2: 23}
console.log("value 1: " + this.v1 + " value 2: " + this.v2)


/*
 *   Example: Interface Implementation
 *
 * Similar to languages like Java and C#, interfaces in TypeScript can be implemented with a Class.
 * The Class implementing the interface needs to strictly conform to the structure of the interface.
 */
interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number {
        return 20000;
    }
}

let emp = new Employee(1, "Steve");