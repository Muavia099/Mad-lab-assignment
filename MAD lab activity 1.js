/// Activity : 1

// **Task1: 
//  * Create a function named Student with properties name and class 
//  * and gpa.
//  *Create another function that creates and return the array of 3 
//  students.
//  Display the name of each student on screen.
// */
/**Task 2
 * Use filter function to separate students with gpa above 3.
 */
/**Student Template */
function Student(name, std_class, gpa) {
    this.name = name;
    this.std_class = std_class;
    this.gpa = gpa;

}
/**Object Creator */
function student_creator() {

    let std1 = new Student("Ali Nawaz", 25, 3.5);
    let std2 = new Student("Amna Butt", 20, 4);
    let std3 = new Student("Javed Khan", 34, 2.4);
    return [std1, std2, std3];
}
/**Call to objects creator */
let students = student_creator();
let filtered_students = students.filter((value) => { return value.gpa > 3 });

console.log(students);
console.log(filtered_students);
/**
 * Activity 2
 * Task 1:
 * Create an arrow function that accepts your name and display on
 * console
 *
 * Task2:
 * Create an arrow function that accepts any number of args.
 * Separate even and odd numbers from those.
 * and return an object with properties {odd:[],even[]}
 * before returning multiply odd numbers by 2, and divide even by 2.
 *
 */

let Name = (yourName) => { return yourName; };
console.log(Name("Ameer Muavia"));



let data = (...args) => {
    // Arrays
    let Numbers = [1, 2, 3, 4, 5, 7, 8, 9, 20, 33, 21, 200, 214];
    let Even = [];
    let Odd = [];

    // Functions for Seprations 

    // Function for Seprating Even Numbers
    let evenNum = (num) => {
        if (num % 2 == 0) {
            return num;
        }
    };

    //Function for Seprating Odd Numbers
    let oddNum = (num) => {
        if (num % 2 != 0) {
            return num;
        }
    };

    // Function for deviding the  Even Number by 2
    let evens = (number) => { return number / 2; };
    // Function for multiplying Odd Number with 2
    let odds = (number) => { return number * 2; };

    // Filtering and Mapping

    Even = Numbers.filter(evenNum);
    Odd = Numbers.filter(oddNum);

    Odd = Odd.map(odds);
    Even = Even.map(evens);

    // Return the obj
    return { ODD: [Odd], EVEN: [Even] };
}

// Calling method
console.log(data());

