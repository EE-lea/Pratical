// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);

// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);

// // console.log(typeof javascriptIsFun);


// // javascriptIsFun = 'YES!';
// // console.log(typeof javascriptIsFun);

// // let year;
// // console.log(year);
// // comsole.log(typeof year);

// // year = 1990;
// // console.log(typeof year);

// const now = 2037;
// const ageJones = now - 1991;
// const ageSarah = now - 1998;
// console.log(ageJones, ageSarah);

// // console.log(ageJones * 2, ageJones / 10, 2 ** 3);

// // const firstName = 'egie';
// // const lastName = 'emoks';
// // console.log(firstName + ' ' + lastName);

// const fullage = 2037;
// console.log(ageJones > ageSarah);
// console.log(ageSarah >= 18);
// console.log(now - 1991 > now - 2018);

// BMI=mass  / height **2 = mass /(height * height) m=kg, h=meter

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// // const heightJohn = 1.95;

// // coding chsllenege
// const massMark = 95;

// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark >= BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// // writing a string 
// const firstName = 'egie';
// const job = 'software developer';
// const birthYear = 1995;
// const year = 2037;

// const egie = "I'm" + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(egie);

// const egieNew = `'I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(egieNew);


// const age = 16;
// if (age >= 18) {
//   console.log('sarah can start driving license 🚘');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sarah is too young. Wait another 
//   ${yearsLeft} year :)`);
// }



//const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }
// console.log(century);


//Assignment 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightMark * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark})is higher than John's(${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`)
}
//ttype conversion
const inputYear = 1991;
console.log(Number(inputYear) + 19)
// type coercion
console.log('I am' + 23 + 'years old');

let n = '1' + 1;
n = n - 1;
console.log(n)
//OR
let k = '3' + '5' - 5 - 6 + '9';
console.log(k)

//truthy /falsey
const money = 0;
if (money) {
  console.log("Don't need any money");
} else {
  console.log("You neeed a job");
}

const cash = 1000;
if (cash) {
  console.log("Don't spend it all");
} else {
  console.log("You neeed a job");
}

const hasDriversLicense = true;// A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);//false
console.log(hasDriversLicense || hasGoodVision);// true
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive ...');
// }

const isTired = false;//C
console.log(hasDriversLicense || hasGoodVision || isTired);// true
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Somoeone else should drive...');
}





