// Home task 2

// Побудувати структуру “успішної команди” над проектом.
// ● Девелопери (фронт, бек, девопс)
// ● Пм
// ● QA
// ● Бізнес аналітик
//  Аналіз даних від клієнта => Розподіл задач => Виконання => Тестування => Реліз.

class TeamMember {
    name: string;
    surname: string;
    jobTitle?: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}


class Developer extends TeamMember {

    techStack: string;

    constructor(name: string, surname: string, techStack: string) {
        super(name, surname);
        this.techStack = techStack;
    }

    pushChangesToRepository() {

    }

    commitChanges() {

    }
}

class FrontEndDeveloper extends Developer {

    constructor(name: string, surname: string, techStack: string) {
        super(name, surname, techStack);
        this.jobTitle = "Front End Developer";
        this.techStack = techStack;
    }

    developLayout() {

    }

    developClientLogic() {

    }
}

class BackEndDeveloper extends Developer {

    constructor(name: string, surname: string, techStack: string) {
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

class DevOps extends Developer {

    constructor(name: string, surname: string, techStack: string) {
        super(name, surname, techStack);
        this.jobTitle = "Dev Ops";
        this.techStack = techStack;
    }

    releaseProduct() {

    }

    deployProduct() {

    }
}


class ProjectManager extends TeamMember {

    constructor(name: string, surname: string) {
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


class QualityAssurance extends TeamMember {

    constructor(name: string, surname: string) {
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


class BusinessAnalyst extends TeamMember {

    constructor(name: string, surname: string) {
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

export {TeamMember, Developer, FrontEndDeveloper, BackEndDeveloper, DevOps, ProjectManager, QualityAssurance, BusinessAnalyst}; 