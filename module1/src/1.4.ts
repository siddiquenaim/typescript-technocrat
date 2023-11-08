// Basic Data Type

//string

let firstName = "Naim"; //typescript compiler implicit data type

//string
let lastName: string = "Siddique"; //explicit data type

//boolean
let roll: number = 188;

//undefined
let x: undefined = undefined;

//null
let y: null = null;

let d; //type: any (shouldn't use)

d = 123;
d = true;
d = "anything";

//Array

let friends: string[] = ["leo", "andres", "messi"];
let eligibleRollList: number[] = [1, 2, 3];

friends.push("naim");

//tuple --> array --> order --> types of values

let coordinates: [number, string] = [1, "warner"];
