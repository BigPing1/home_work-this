// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   name: "name",
//   specialty: "specialty",
//   gpa: "gpa",
//   missedClasses: 0,
//   studentOutput: function () {
//     console.group(`Student info ${this.name}`);
//     console.log(`Student name is ${this.name}`);
//     console.log(`Student specialty is ${this.specialty}`);
//     console.log(`Student GPA is ${this.gpa}`);
//     console.log(`Student missed classes is ${this.missedClasses}`);
//     console.groupEnd();
//   },
// };

// const peter = {
//   name: "Peter",
//   specialty: "Computer since",
//   gpa: "6,9",
//   missedClasses: 19,
// };

// const lisa = {
//   name: "Lisa",
//   specialty: "Computer since",
//   gpa: "10,4",
//   missedClasses: 4,
// };

// const ibrahim = {
//   name: "Ibrahim",
//   specialty: "Web-design",
//   gpa: "9",
//   missedClasses: 1,
// };

// studentInfo.studentOutput.bind(peter)();
// studentInfo.studentOutput.call(lisa);
// studentInfo.studentOutput.apply(ibrahim);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const html = () => {
//   console.log("HyperText Markup Language");
//   alert("HyperText Markup Language");
// };

// const css = () => {
//   console.log("Cascading Style Sheets");
//   alert("Cascading Style Sheets");
// };

// document.querySelector("#html").addEventListener("click", html);
// document.querySelector("#css").addEventListener("click", css);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const commodity = fruitInfo => {
//   name = prompt("Enter fruit name");
//   price = prompt("Enter fruit price");
//   number = prompt("Enter fruit number");

//   fruitInfo = {
//     fruit: name,
//     fruitPrice: price,
//     fruitNumber: number,
//     allFruitInfo: function () {
//       console.group(`Name fruit is ${this.fruit}`);
//       console.log(`Fruit is ${this.fruit}`);
//       console.log(`Fruit price is ${this.fruitPrice}`);
//       console.log(`Fruit number is ${this.fruitNumber}`);
//     },
//   };
//   console.log(fruitInfo.allFruitInfo());
// };

// commodity();
