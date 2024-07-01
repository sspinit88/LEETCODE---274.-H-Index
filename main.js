/*
274. H-Index

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 
Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:

Input: citations = [1,3,1]
Output: 1


Constraints:

    n == citations.length
    1 <= n <= 5000
    0 <= citations[i] <= 1000

*/

/**
 * This function calculates the h-index of a researcher.
 * Эта функция вычисляет индекс h исследователя.
 *
 * @param {number[]} citations - The array of citations. Массив цитат.
 * @return {number} The h-index. Индекс h.
 */
 function hIndex(citations) {
  // Sort the citations array in descending order.
  // Сортируем массив цитат в порядке убывания.
  citations.sort((a, b) => b - a);

  // Initialize the h-index as 0.
  // Инициализируем индекс h как 0.
  let hIndex = 0;

  for (let i = 0; i < citations.length; i++) {
      // If the number of citations is greater than or equal to the position (i + 1), increment the h-index.
      // Если количество цитат больше или равно позиции (i + 1), увеличиваем индекс h.
      if (citations[i] >= i + 1) {
          hIndex = i + 1;
      } else {
          // If the number of citations is less than the position (i + 1), break the loop.
          // Если количество цитат меньше позиции (i + 1), прерываем цикл.
          break;
      }
  }

  return hIndex;
}

/*

This solution has a time complexity of O(n log n) due to the sort operation 
and a space complexity of O(1), where n is the length of the array.

*/