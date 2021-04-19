// বিল্ডিং এর উচ্চতা অনুযায়ী ইটের হিসাব করতে হবে।
// ১-১০ তলা বিল্ডিং এর উচ্চতা ১৫ ফিট। প্রত্যেক ফিটের জন্য সবসময় ১০০০ করে ইট লাগে। 
// ১১-২০ তলা বিল্ডিং এর উচ্চতা ১২ ফিট। প্রত্যেক ফিটের জন্য সবসময় ১০০০ করে ইট লাগে। 
// ২১ তলা থেকে উপরে যত উচ্চতা হক তার উচ্চতা ১০ ফিট করে। সেখানেও প্রতি ফিটে ১০০০ করে ইট লাগে।

// এখন, এখানে হিসেব করতে হবে যে। প্রতি ফিটে যদি ১০০০ ইট লাগে, তাহলে ১-১০ তলা বিল্ডিং এর জন্য কত গুলো ইট লাগবে, অথবা, যদি ১১-২০ তলা বিল্ডিং হয় তাহলে কত গুলো ইট লাগবে। অথবা, ২১ তলার উপরের বিল্ডিং হলে কত গুলো ইট লাগবে। 


function brickCalculator(floor){
    let totalbrick; 

    if(floor <= 0){
        console.log('Sorry');
        return;
    }
    else if(floor <= 10){
        totalbrick = floor * 15 * 1000; 
    }
    else if(floor <= 20){
        totalbrick = (floor * 15 * 1000) + ((floor - 10) * 12 * 1000);
    }
    else{
        totalbrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000 );
    }
    return totalbrick;
}

const totalBrickItem = brickCalculator(12);
console.log(totalBrickItem);