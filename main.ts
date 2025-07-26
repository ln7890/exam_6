// let checkAnagram = (m: string, d: string): boolean => {
//   if (m.length !== d.length) {
//     return false;
//   }

//   const countElem = (str: string) => {
//     const elemOccur: { [key: string]: number } = {};
//     for (let elem of str) {
//       elemOccur[elem] = (elemOccur[elem] || 0) + 1;
//     }
//     return elemOccur;
//   };

//   const elemM = countElem(m);
//   const elemD = countElem(d);

//   for (let key in elemM) {
//     if (elemM[key] !== elemD[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// let res: boolean = checkAnagram("aab", "aac");
// console.log(res); // true or false

// let arr: number[] = [1, 3, 2, 1, 4, 4, 4, 4, 4, 4, 4, 1];

// let mostFruq = (numArr: number[]) => {
//   let nums: object = {};
//   let maxCount: number = 0;
//   let res: any = null;

//   for (let elem of arr) {
//     nums[elem] = (nums[elem] || 0) + 1;
//     if (nums[elem] > maxCount) {
//       maxCount = nums[elem];
//       res = elem;
//     }
//   }

//   return res;
// };

// let res = mostFruq(arr);
// console.log(res);

// 3 masala

// const num: any = 91;
// let isReverseOK = (a: number) => {
//   let res: any = num.toString().split("").reverse("").join("") * 1;
//   return num == res;
// };

// let res = isReverseOK(num);
// console.log(res);

// 4 masala

// let arr: number[] = [0, 1];
// let isFibonacci = (num: number) => {
//   let arrLen: number = arr.length;
//   while (arrLen < num) {
//     arr.push(arr[arrLen - 1] + arr[arrLen - 2]);
//     arrLen++;
//   }
//   return arr;
// };
// let res = isFibonacci(10);
// console.log(res);

// 9 masala

// let MaxMIn = (arr: number[]) => {
//   return Math.max(...arr) - Math.min(...arr);
// };
// let res = MaxMIn([10, 3, 5, 25, 1]);
// console.log(res);

// 8 masala

// const message: string = "okay"; // Try edit me
// let sortAlpha = (a: string) => {
//   return message.split("").sort().join("");
// };

// let res = sortAlpha(message);
// console.log(res);

// 5 masala

let arr: number[] = [11, 1, 1, 2, 2, 3, 4, 43];

let singleFrequent = (arrNum: number[]) => {
  let occurcance = {};
  let sum: any = 0;
  for (let elem of arrNum) {
    occurcance[elem] = (occurcance[elem] || 0) + 1;
  }
  for (let key in occurcance) {
    if (occurcance[key] === 1) {
      sum += +key;
    }
  }
  return sum;
};
let result = singleFrequent(arr);
console.log(result);
