// Завдання 2
// Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з двома
// винятками.Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz', а для чисел,
// що діляться на 5(але не на 3) - 'Buzz'.які діляться і 3 і 5

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 ) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
}