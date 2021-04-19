// ফিট থেকে মাইল কনভার্ট করা হল। 
// ১ ফিট = 0.000189394 মাইল। 

function feetToMile(miles){
    if(miles < 0){
        console.log('Invalid Input Number');
    }
    const feet = parseFloat(miles);
    const totalMiles = feet / 5280;
    const fixedMiles = totalMiles.toFixed(9)
    return fixedMiles;
}
const milesResult = feetToMile(1);

console.log(milesResult); // 0.000189394






