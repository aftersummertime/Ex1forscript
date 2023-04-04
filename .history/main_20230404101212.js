// let arr = prompt("Nhập các mảng số nguyên, cách nhau bằng dấu cách: ").split(" ").map(Number);

// let sum = 0;
// for(i = 0; i<arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

// Nhập mảng từ người dùng
let arr = ("Nhập mảng các số nguyên, cách nhau bằng dấu cách: ").split(" ").map(Number);

// Tính tổng các phần tử trong mảng
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// Hiển thị kết quả tổng ra màn hình
console.log("Tổng của các phần tử trong mảng là:", sum);

