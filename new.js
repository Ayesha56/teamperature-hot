class teacher {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const teacherIntro = new teacher('jhanker', 'mahmud', 1000000);
console.log(teacherIntro);
const teacherBest = new teacher('Programming', 'hero', 23000000);
console.log(teacherBest);