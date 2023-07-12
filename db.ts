import Person from "./src/domain/interfaces/person";
let people: Person[] = [];

const flushPeopleDB = () => {
    people = []
}

export {
    people,
    flushPeopleDB
}