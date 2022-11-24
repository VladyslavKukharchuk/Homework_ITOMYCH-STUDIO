// Home task 2

// Для першого завдання додати сутність “Task”. Потрібно давати завдання і змінювати їх
// статус: TO DO/ In progress/ QA / Done.
// Таски створює може створювати кожен, статус міняє тільки той на кого створено
// завдання. 

import {TeamMember, Developer, FrontEndDeveloper, BackEndDeveloper, DevOps, ProjectManager, QualityAssurance, BusinessAnalyst} from './Task1';

class Task {
    title: string;
    text: string;
    creator: object;
    performer: object;
    private status: string;

    constructor(title: string, text: string, creator: object, performer: object) {
        this.title = title;
        this.text = text;
        this.creator = creator;
        this.performer = performer;
        this.status = "TO DO";
    }

    setStatus(user: object, newStatus: string) {
        if (user == this.performer) {
            this.status = newStatus;
        } else {
            throw new Error('This user cannot change the task status');
        }
    }
}

const Ivan = new FrontEndDeveloper("Ivan", "Ivanov", "TypeScript");
const Vasyl = new ProjectManager("Vasyl", "Ivanov");

console.log(Ivan);
console.log(Vasyl);

const task1 = new Task("Task 1", "First task", Ivan, Vasyl);

console.log(task1);

task1.setStatus(Vasyl, "In progress");

console.log(task1);

task1.setStatus(Ivan, "TO DO");

console.log(task1);