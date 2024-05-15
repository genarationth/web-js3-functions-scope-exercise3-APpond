// ### Exercise #3.1
function mariapayment(interestRate = 0.001, transactions) {
    const transactionFee = 3;
    const interestFee = transactionFee * (1 + interestRate);
    return interestFee * transactions;
}
// Calculate total cost and log the result
const totalCost = mariapayment(0.001, 20); // Assuming Maria has 20 transactions
console.log(`Maria has to pay $${totalCost.toFixed(5)}.`);

// ### Exercise #3.2
// Part 1: Greeting Friends
function greetFriends(name1, name2, name3) {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}
greetFriends("Kan", "Mc", "Pa");
// Part 2: Calculate Age
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
const birthYear = 1999;
const age = calculateAge(birthYear);
console.log(`Age: ${age}`);
// Part 3: Greeting Friends with Age
function greetFriendsWithAge(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);
}
const birthYear1 = 1996;
const birthYear2 = 1997;
const birthYear3 = 1998;
greetFriendsWithAge("Kan", birthYear1, "Mc", birthYear2, "Pa", birthYear3);


//Challenge Yourself
function grad(score) {
    if (score === 11) {
        return "Perfect";
    } else if (score > 8 && score < 11){
        return "Excellent";
    } else if (score >= 5 && score <= 8){
        return true;
    } else if (score >= 0 && score < 5){
        return false;
    } else if (score < 0 || score > 11) {
        return "range should be 0-11";
    }
}

console.log(`Your grade was ${grad(8)}`);

