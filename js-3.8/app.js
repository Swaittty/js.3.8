// // 1
// const extractNumbers = (text) => {
//     const result = text.match(/\d/g);
//     return result ? result.map(Number) : [];
// }
// console.log(extractNumbers("a1fg5hj6"));
// console.log(extractNumbers("abc"));
// console.log(extractNumbers("12ab34"));


// 2
// const printFibonacci = (current = 0, next = 1) => {
//     console.log(current);
//     if (current === 144) {
//         return;
//     }
//     setTimeout(() => {
//         printFibonacci(next, current + next);
//     }, 1000);
// };
//
// printFibonacci();


//3

// async function getTitles() {
//     try {
//         const response = await fetch('https://fakestoreapi.com');
//
//         const products = await response.json();
//
//         for (let product of products) {
//             console.log(product.title);
//         }
//
//     } catch (error) {
//         console.log(" У вас ошибка!", error);
//     }
// }
//
// getTitles();


// 4
// const container = document.getElementById('button-container');
//
// container.addEventListener('click', (event) => {
//
//     if (event.target.tagName === 'BUTTON') {
//
//         const color = event.target.textContent;
//
//         document.body.style.backgroundColor = color;
//     }
// });


//5
// const box = document.getElementById('box');
// const toggleBtn = document.getElementById('toggleBtn');
//
// toggleBtn.addEventListener('click', () => {
//
//     box.classList.toggle('hidden');
//
//     toggleBtn.textContent = box.classList.contains('hidden')
//         ? 'Показать'
//         : 'Скрыть';
// });

//6
// const counterElement = document.getElementById('counter');
// let count = 0;
// const intervalId = setInterval(() => {
//
//     count++;
//     counterElement.textContent = count;
//
//     if (count === 100) {
//         clearInterval(intervalId);
//     }
// }, 1);


//7
// const button = document.getElementById('load-btn');
// async function fetchLocalJson() {
//     try {
//         const response = await fetch('data.json');
//
//         const data = await response.json();
//         console.log("Данные успешно получены:", data);
//     } catch (error) {
//         console.log("Произошла ошибка при запросе:", error);
//     }
// }
//
// button.addEventListener('click', fetchLocalJson);