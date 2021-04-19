// একটি অ্যারে এর ভেতর অনেক গুলো ফ্রেন্ডের নাম থাকবে। 
// সেগুলো থেকে সবছেয়ে ছোট ওয়ার্ডের যে নামটি আছে, সেটি বের করে আনতে হবে। 

function tinyFriend(friends) {
    if (friends.length == 0) {
        console.log('Empty array is not allowed');
    }

    let tiny = friends[0];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length < tiny.length) {
            tiny = friends[i];
        }
    }

    return tiny;
}

const allFirend = tinyFriend(['Rahim', 'Safhin', 'Nizam', 'Nilu']);
console.log(allFirend); // Nilu