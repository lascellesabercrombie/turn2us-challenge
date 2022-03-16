const form = document.querySelector("form");
// const button = document.querySelector("button");

// function to redirect user based on age;

function ageChecker() {
    const age = document.querySelector("#age").value; 
    console.log(age);
    if (age > 17) {
        window.location.href = "./eligible.html";
    }
    else {
        window.location.href = "./ineligible.html";
    }
}

//function to redirect user

button.addEventListener("click", (e) => {
    e.preventDefault();
    ageChecker();
}
);
