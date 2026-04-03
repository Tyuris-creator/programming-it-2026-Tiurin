let regularCallCount = 0;
function sumOfDigits(n) {
  regularCallCount++;
  if (n === 0) {
    return 0;
  }

  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

let memoizedCallCount = 0;

function createMemoizedSumOfDigits() {
  const cache = {};

  function memoizedFunc(n) {
    memoizedCallCount++;

    if (n in cache) {
      console.log(`Результат для числа ${n} взят из памяти!`);
      return cache[n];
    }

    if (n === 0) {
      return 0;
    }

    const result = (n % 10) + memoizedFunc(Math.floor(n / 10));

    cache[n] = result;
    return result;
  }

  return memoizedFunc;
}

const memoizedSumOfDigits = createMemoizedSumOfDigits();

console.log("1: Обычная рекурсия");
console.log(`Сумма цифр 12345: ${sumOfDigits(12345)}`);
console.log(`Сумма цифр 12346: ${sumOfDigits(12346)}`);
console.log(`Вызовов обычной функции: ${regularCallCount}\n`);

console.log("2: Мемоизированная рекурсия");
console.log(`Сумма цифр 12345: ${memoizedSumOfDigits(12345)}`);
console.log(`Сумма цифр 12346: ${memoizedSumOfDigits(12346)}`);
console.log(`Вызовов мемоизированной функции: ${memoizedCallCount}`);
