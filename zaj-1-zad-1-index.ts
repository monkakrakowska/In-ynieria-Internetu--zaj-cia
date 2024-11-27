import {Employee} from "./types";

const employees: Employee[] = [
    {
        firstName: "Monika",
        lastName: "Krakowska",
        age: 20,
        position: "Developer",
        programmingLanguages: ["Java", "TypeScript"]
    },
    {
        firstName: "Jan",
        lastName: "Kowalski",
        age: 28,
        position: "Manager",
        programmingLanguages: ["JavaScript", "React", "TypeScript"]
    },
    {
        firstName: "Anna",
        lastName: "Nowak",
        age: 32,
        position: "Designer",
        programmingLanguages: ["Python", "Django", "TypeScript"]
    },
    {
        firstName: "Piotr",
        lastName: "Zieliński",
        age: 25,
        position: "Designer",
        programmingLanguages: ["JavaScript", "Node.js", "TypeScript", "SQL"]
    },
    {
        firstName: "Katarzyna",
        lastName: "Wiśniewska",
        age: 30,
        position: "Developer",
        programmingLanguages: ["Bash", "Go", "TypeScript"]
    },
    {
        firstName: "Tomasz",
        lastName: "Czajka",
        age: 35,
        position: "Developer",
        programmingLanguages: ["Java", "Kotlin", "TypeScript"]
    },
    {
        firstName: "Maria",
        lastName: "Borkowska",
        age: 24,
        position: "Manager",
        programmingLanguages: ["Swift", "Kotlin", "TypeScript"]
    }
]

const getDevelopers = (employees: Employee[]) => {
    return employees.filter((e: Employee) => e.position === "Developer")
}

const findEmployee = (employees: Employee[], name: string) => {
    return employees.find((e: Employee) => e.firstName.includes(name) || e.lastName.includes(name));
}

function addExperience(employee: Employee, lang: string) {
    employee.programmingLanguages.push(lang);
}

function addExperiences(employees: Employee[], lang: string) {

    return employees.map((e : Employee) => e.programmingLanguages.push(lang));
}

console.log("employees", employees);
const developers = getDevelopers(employees);
console.log("developers", developers);
const monika: Employee | undefined = findEmployee(employees, "Monika");
if (monika) {
    addExperience(monika, "C#");
}
addExperiences(developers, "C++");
