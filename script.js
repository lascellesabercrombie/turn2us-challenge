const form = document.querySelector("form");
const button = document.querySelector("button");
console.log(form);
console.log(button);
// function to verify that age is 18 or older

// function ageChecker() {
//     const todayDate = new Date();
//     const formattedTodayDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
//     console.log(todayDate);
//     console.log(formattedTodayDate);
//     // const birthDate = document.querySelector("input").value;
//     let birthDate = "2022-03-08"
//     console.log(birthDate);
//     const difference = Math.abs(todayDate - birthDate);
//     console.log(difference);
//     return difference;
// }

function ageChecker() {
    // const age = document.querySelector("#age").value; 
    // console.log(age);
    // if (age > 17) {
        console.log('x');
        document.querySelector("h1").style.color = "blue";
        window.location.href = "./success.html";

}

//function to redirect user

button.addEventListener("click", (e) => {
    e.preventDefault();
    ageChecker();
}
);
