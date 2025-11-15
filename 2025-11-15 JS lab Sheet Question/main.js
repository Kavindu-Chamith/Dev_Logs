// Working with Arrays and Objects in JavaScript

// Task 1.1: Creating and Accessing Arrays
console.log("Task 1.1: Creating and Accessing Arrays");
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Original array:", fruits);

// Print first and last item
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Add new fruit at the end
fruits.push("Pineapple");
console.log("After adding Pineapple:", fruits);

// Remove the second fruit (index 1)
fruits.splice(1, 1);
console.log("After removing second fruit:", fruits);

// Find the length
console.log("Array length:", fruits.length);

console.log("\n");

// Task 1.2: Looping Through an Array
console.log("Task 1.2: Looping Through an Array");
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\nUsing forEach:");
fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("\n** Difference: for loop gives index control, forEach is simpler for iteration **\n");

console.log("=== 2. Array Methods ===\n");

// Task 2.1: Transforming Arrays
console.log("Task 2.1: Transforming Arrays");
const numbers = [2, 5, 8, 10, 12];
console.log("Original numbers:", numbers);

// Using map() to double each number
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Using filter() to keep numbers > 6
const filtered = numbers.filter(num => num > 6);
console.log("Numbers greater than 6:", filtered);

// Using reduce() to find sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of all numbers:", sum);

console.log("\n");

// Task 2.2: Searching and Sorting
console.log("Task 2.2: Searching and Sorting");
console.log("Does array include 8?", numbers.includes(8));
console.log("Index of 10:", numbers.indexOf(10));

const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted array:", sorted);

console.log("\n");

console.log("=== 3. Objects - Basics ===\n");

// Task 3.1: Creating and Accessing Objects
console.log("Task 3.1: Creating and Accessing Objects");
const student = {
  name: "Kavindu",
  age: 21,
  faculty: "Computing",
  subjects: ["Web Development", "Database Systems", "Programming"]
};

// Print name and faculty
console.log("Student name:", student.name);
console.log("Faculty:", student.faculty);

// Add new property
student.year = 2025;
console.log("After adding year:", student);

// Change age
student.age = 22;
console.log("Updated age:", student.age);

// Print all subjects in a loop
console.log("Subjects:");
student.subjects.forEach(subject => {
  console.log("- " + subject);
});

console.log("\n");

console.log("=== 4. Nested Objects and Arrays ===\n");

// Task 4.1: Array of Objects
console.log("Task 4.1: Array of Objects");
const students = [
  {name: "Kavindu", age: 21, faculty: "Computing"},
  {name: "Nimesha", age: 22, faculty: "Engineering"},
  {name: "Dinuka", age: 23, faculty: "Business"}
];

// Print all student names
console.log("All student names:");
students.forEach(s => console.log(s.name));

// Filter students older than 21
const olderStudents = students.filter(s => s.age > 21);
console.log("\nStudents older than 21:");
console.log(olderStudents);

// Map to get all faculty names
const faculties = students.map(s => s.faculty);
console.log("\nAll faculties:", faculties);

console.log("\n");

// Task 4.2: Object Containing an Array of Objects
console.log("Task 4.2: Object Containing an Array of Objects");
const classroom = {
  className: "IT2025",
  teacher: "Mr. Perera",
  students: [
    {name: "Kavindu", age: 21},
    {name: "Nimesha", age: 22},
    {name: "Dinuka", age: 23}
  ]
};

// Print teacher's name
console.log("Teacher:", classroom.teacher);

// Add new student
classroom.students.push({name: "Sanduni", age: 20});
console.log("\nAfter adding new student:");

// Print all student names
console.log("Students in classroom:");
classroom.students.forEach(s => console.log("- " + s.name));

console.log("\n");

console.log("=== 5. Challenge Activity ===\n");

const products = [
  {name: "Keyboard", price: 2500, qty: 2},
  {name: "Mouse", price: 1500, qty: 3},
  {name: "Monitor", price: 22000, qty: 1}
];

console.log("Products:");
products.forEach(p => {
  console.log(`${p.name}: LKR ${p.price} x ${p.qty}`);
});

// Calculate total value using reduce
const totalValue = products.reduce((total, product) => {
  return total + (product.price * product.qty);
}, 0);

console.log(`\nTotal value of all products: LKR ${totalValue}`);