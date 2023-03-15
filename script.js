"use strict";
let docs = document.getElementById("RES");

//Алгоритм быстрой сортировки
let A = [5, 2, 4, 6, 1, 3, 2, 6];
let p = 0;
let r = 0;
//прицницп разделяй и влавствуй
function Swap(A, item1, item2) {
  let temp = A[item1];
  A[item1] = A[item2];
  A[item2] = temp;
}
//Рекурсия
function Sort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    Sort(A, p, q);
    Sort(A, q + 1, r);
    Merge(A, p, q, r);
  }
  console.log(A);
}
// перербор и слияние
function Merge(A, p, q, r) {
  while (A[p] < A[q]) {
    p++;
  }
  Swap(A, p, q);
  while (A[r] > A[q]) {
    r--;
  }
  Swap(A, r, q);

  for (let i = 0; i < r; i++) {
    if (A[r] < A[i]) {
      Swap(A, r, i);
    }
  }
}
// Тест и вывод
Sort(A, 0, A.length - 1);
console.log(A);
docs.innerHTML = A;
