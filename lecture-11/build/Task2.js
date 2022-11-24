"use strict";
// Home task 2
Object.defineProperty(exports, "__esModule", { value: true });
// Для першого завдання додати сутність “Task”. Потрібно давати завдання і змінювати їх
// статус: TO DO/ In progress/ QA / Done.
// Таски створює може створювати кожен, статус міняє тільки той на кого створено
// завдання. 
const Task1_1 = require("./Task1");
class Task {
    constructor(title, text, creator, performer) {
        this.title = title;
        this.text = text;
        this.creator = creator;
        this.performer = performer;
        this.status = "TO DO";
    }
    setStatus(user, newStatus) {
        if (user == this.performer) {
            this.status = newStatus;
        }
        else {
            throw new Error('This user cannot change the task status');
        }
    }
}
const Ivan = new Task1_1.FrontEndDeveloper("Ivan", "Ivanov", "TypeScript");
const Vasyl = new Task1_1.ProjectManager("Vasyl", "Ivanov");
console.log(Ivan);
console.log(Vasyl);
const task1 = new Task("Task 1", "First task", Ivan, Vasyl);
console.log(task1);
task1.setStatus(Vasyl, "In progress");
console.log(task1);
task1.setStatus(Ivan, "TO DO");
console.log(task1);
