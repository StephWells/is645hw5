let myArray = [1,2,3,4,5,6,7,8,9,10];
let myArrayA = myArray.filter(num => num % 2 != 0);  
let myArrayB = myArray.filter(num => (num % 5 == 0) || (num % 2 == 0));  
let myArrayC = myArray.filter(num => num % 3 == 0).map(num => num * num);   // filter out numbers divisible by 3 and then square them ???
let myArrayD = myArray.filter(num => num % 5 == 0).map(num => num * num).reduce((a, b) => a+b);    

console.log('Starting Array: ', myArray);
console.log('Odd numbers: ', myArrayA);
console.log('Numbers divisible by 2 or 5: ', myArrayB);
console.log('Numbers divisible by 3, then squared:', myArrayC);
console.log('Numbers divisible by 5, sqaured and then summed: ', myArrayD);

