let person = {
    firstName: "Ilja",
    lastName: "Pidonenko",
    age: 21,
    parents: {
        mother: {
            firstName: "XXX",
            lastName: "Pidonenko",
            age: 48
        },
        father: {
            firstName: "Volodymyr",
            lastName: "Pidonenko",
            age: 52
        }
    }
}
let ilja = person;
console.log(ilja.firstName);
console.log(ilja.lastName);
console.log(ilja.age);