import Person from "../../src/domain/interfaces/person";
let people: Person[] = [
    {
      id: "6d924efb-7496-41c6-a64d-7b1b4641b414",
      cpf: "11111111111",
      name: "Luis Felipe Ribeiro",
      relationship: ["22222222222", "12312312311"],
    },
    {
      id: "460f550d-19ea-4cf5-933c-4128ef58c95b",
      cpf: "22222222222",
      name: "Mariana Abdias Gonçalves",
      relationship: ["11111111111", "33333333333"],
    },
    {
      id: "fc891e58-284b-4d46-8d7e-66d45952cb62",
      cpf: "33333333333",
      name: "Marcos Antonio Gonçalves",
      relationship: ["22222222222", "44444444444"],
    },
    {
      id: "1cacb16c-f4f8-4e63-aee2-e777652e5ad7",
      cpf: "44444444444",
      name: "Ana Maria Gonçalves",
      relationship: ["33333333333"],
    },
    {
      id: "2b77f213-cdfd-4f92-87b4-5345ab642fa3",
      cpf: "12312312311",
      name: "Tiquinho Abdias Ribeiro",
      relationship: ["11111111111"],
    },
  ]

const flushPeopleDB = () => {
    people = []
}

export {
    people,
    flushPeopleDB
}