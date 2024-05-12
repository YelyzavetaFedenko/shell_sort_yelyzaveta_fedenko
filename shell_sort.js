/* Creating the programme for Shell Sorting in Java Script */

function shellSort(arr) {
  const len = arr.length; // Получаем длину массива
  let gap = Math.floor(len / 2); // Вычисляем начальный интервал
  while (gap > 0) {
    // Продолжаем сортировку, пока интервал больше 0
    for (let i = gap; i < len; i++) {
      // Используем сортировку вставками с текущим интервалом
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        // Сортировка вставками
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2); // Уменьшаем интервал
  }
  return arr; // Возвращаем отсортированный массив
}
// Пример использования:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Before sorting:", array);
console.log("After sorting:", shellSort(array));
