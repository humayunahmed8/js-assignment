// কাঠের হিসেব করতে হবে।
// একটি চেয়ারের জন্য কাঠ লাগে ১ কিউবিক।
// একটি টেবিলের জন্য কাঠ লাগে ৩ কিউবিক।
// একটি খাটের জন্য কাঠ লাগে ৫ কিউবিক।
// যতগুলো চেয়ার, টেবিল এবং খাট হবে সেগুলোর কাঠের পরিমান প্রথমে গুন হবে। তারপর সেগুলোর মোট অর্থাৎ যোগফল দেখাতে হবে। 

function woodCalculator(chair, table, bed){
    if( chair < 0 && table < 0 || bed < 0){
        return "Please Enter Valid Input";
    }

    const totalWood = (chair * 1) + (table * 3) + (bed * 5);

    return totalWood;
}

const requiredWood = woodCalculator(1, 1, 1);
console.log(requiredWood);