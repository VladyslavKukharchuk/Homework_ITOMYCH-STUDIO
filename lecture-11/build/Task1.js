"use strict";
// Home task 2
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessAnalyst = exports.QualityAssurance = exports.ProjectManager = exports.DevOps = exports.BackEndDeveloper = exports.FrontEndDeveloper = exports.Developer = exports.TeamMember = void 0;
// Побудувати структуру “успішної команди” над проектом.
// ● Девелопери (фронт, бек, девопс)
// ● Пм
// ● QA
// ● Бізнес аналітик
//  Аналіз даних від клієнта => Розподіл задач => Виконання => Тестування => Реліз.
class TeamMember {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
exports.TeamMember = TeamMember;
class Developer extends TeamMember {
    constructor(name, surname, techStack) {
        super(name, surname);
        this.techStack = techStack;
    }
    pushChangesToRepository() {
    }
    commitChanges() {
    }
}
exports.Developer = Developer;
class FrontEndDeveloper extends Developer {
    constructor(name, surname, techStack) {
        super(name, surname, techStack);
        this.jobTitle = "Front End Developer";
        this.techStack = techStack;
    }
    developLayout() {
    }
    developClientLogic() {
    }
}
exports.FrontEndDeveloper = FrontEndDeveloper;
class BackEndDeveloper extends Developer {
    constructor(name, surname, techStack) {
        super(name, surname, techStack);
        this.jobTitle = "Back End Developer";
        this.techStack = techStack;
    }
    developServerLogic() {
    }
    developDatabase() {
    }
    developAPI() {
    }
}
exports.BackEndDeveloper = BackEndDeveloper;
class DevOps extends Developer {
    constructor(name, surname, techStack) {
        super(name, surname, techStack);
        this.jobTitle = "Dev Ops";
        this.techStack = techStack;
    }
    releaseProduct() {
    }
    deployProduct() {
    }
}
exports.DevOps = DevOps;
class ProjectManager extends TeamMember {
    constructor(name, surname) {
        super(name, surname);
        this.jobTitle = "Project Manager";
    }
    analyzeTechnicalTask() {
    }
    distributeTasks() {
    }
    checkTheStatusOfTasks() {
    }
}
exports.ProjectManager = ProjectManager;
class QualityAssurance extends TeamMember {
    constructor(name, surname) {
        super(name, surname);
        this.jobTitle = "Quality Assurance";
    }
    runTests() {
    }
    writeTestCases() {
    }
    analyzeResultsOfTests() {
    }
    writeBugReport() {
    }
}
exports.QualityAssurance = QualityAssurance;
class BusinessAnalyst extends TeamMember {
    constructor(name, surname) {
        super(name, surname);
        this.jobTitle = "Business Analyst";
    }
    analyzeCustomerRequirements() {
    }
    collectCustomerRequirements() {
    }
    createTechnicalTask() {
    }
}
exports.BusinessAnalyst = BusinessAnalyst;
