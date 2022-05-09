function Person(name) {
    this.name = name;
}
Person.prototype.Intro = function() {
    console.log("My Name is " + this.name);
};


function Teacher(name, branch) {
    Person.call(this, name);
    this.branch = branch;

}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function() {
    console.log("I teach " + this.branch);
}

function Student(name, number) {
    Person.call(this, name);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.Study = function() {
    console.log("My student Number is " + this.number);
}

function Headmaster(name, branch) {
    Teacher.call(this, name, branch);
}
Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.ShareTask = function() {
    console.log("I shared the task...")
}

let p1 = new Person("enes");
p1.Intro();
console.log("----------------------------------");

let t1 = new Teacher("ahmet", "mat");
t1.Intro();
t1.teach();
console.log("----------------------------------");

let s1 = new Student("emre", 12055);
s1.Intro();
s1.Study();
console.log("----------------------------------");

let h1 = new Headmaster("Musa", "Eng.");
h1.teach();
h1.Intro();
h1.ShareTask()