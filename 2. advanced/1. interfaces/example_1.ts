/*
 * Example: Interface as Type
 */
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = {key: 1, value: "Steve"}; // OK
let kv2: KeyPair = {key: 1, val: "Steve"}; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
let kv3: KeyPair = {key: 1, value: 100}; // Compiler Error:


// Interface as Function Type
interface KeyValueProcessor {
    (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value: string): void {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve

/*
 * Interface for Array Type
 */
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";


/*
 * Read only Properties
 */
interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }

personObj.name = 'Steve Smith'; // OK
personObj.SSN = '333666888'; // Compiler Error

