// Function to display messages on the page
function printToPage(message, elementId) {
    const consoleDiv = document.getElementById(elementId);
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    consoleDiv.appendChild(messageParagraph);
}

// Create the student object
const student = {
    name: "Harry Joseph",
    age: 51,
    enrolled: true,
    courses: ["Programming", "Math", "Science", "Languages", "History"],
    
   
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`;
    },
    
    addCourse: function(course) {
        this.courses.push(course);
        printToPage(`Courses after adding a new one: ${this.courses.join(", ")}`, 'objectMethodsOutput');
    },
    
    totalCourses: function() {
        const total = this.courses.length;
        printToPage(`Total number of courses: ${total}`, 'objectMethodsOutput');
        return total;
    }
};


// Output the name and age properties
printToPage(`Name: ${student.name}`, 'objectOutput');
printToPage(`Age: ${student.age}`, 'objectOutput');


printToPage(student.displayInfo(), 'objectOutput');

// Convert the student object into a JSON string
const studentJSON = JSON.stringify(student);
printToPage("JSON String: " + studentJSON, 'jsonStringOutput');
console.log("JSON String: " + studentJSON);

// Convert the JSON string back into a JavaScript object
const newStudent = JSON.parse(studentJSON);
printToPage("New Student Object: " + JSON.stringify(newStudent), 'jsonObjectOutput');
console.log("New Student Object: " + JSON.stringify(newStudent));

// Compare the newly created object to the original
const isEqual = JSON.stringify(student) === JSON.stringify(newStudent);
printToPage("Are the objects equal? " + isEqual, 'comparisonOutput');
console.log("Are the objects equal? " + isEqual);

const { name, courses } = student;
printToPage(`Name (destructured): ${name}`, 'destructuringOutput');
printToPage(`Courses (destructured): ${courses.join(", ")}`, 'destructuringOutput');

// Create an array of scores
const scores = [85, 92, 78, 90];


const [score1, score2] = scores;
printToPage(`First score: ${score1}`, 'destructuringOutput');
printToPage(`Second score: ${score2}`, 'destructuringOutput');
console.log(`First score: ${score1}`);
console.log(`Second score: ${score2}`);

// Clone the student object using the spread operator
const clonedStudent = { ...student, graduationYear: 2023 };
printToPage(`Cloned Student: ${JSON.stringify(clonedStudent)}`, 'cloningMergingOutput');
console.log(`Cloned Student: ${JSON.stringify(clonedStudent)}`);


const newCourses = ["Art", "Music"];
const allCourses = [...student.courses, ...newCourses];
printToPage(`All Courses: ${allCourses.join(", ")}`, 'cloningMergingOutput');
console.log(`All Courses: ${allCourses.join(", ")}`);

student.addCourse("Philosophy");
console.log("Added course: Philosophy");
student.totalCourses();
console.log(`Total number of courses: ${student.courses.length}`);
