// Part 1: Notifications
function showNotification(message) {
    alert(message); // Function to display a notification message
}

// Part 2: Event Handler for Form Submission
document.getElementById("submit-btn").addEventListener("click", function() {
    // Retrieving form field values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("message").value;

    // Form validation
    if (name === "" || email === "" || age === "" || gender === "" || message === "") {
        document.getElementById("submit-btn").classList.add("error");
        return;
    }

    if (isNaN(age) || age < 18) {
        document.getElementById("submit-btn").classList.add("error");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("submit-btn").classList.add("error");
        return;
    }

    if (message.length < 10) {
        document.getElementById("submit-btn").classList.add("error");
        return;
    }

    // If form is valid, display success message and remove error class
    document.getElementById("submit-btn").classList.remove("error");
    document.getElementById("submit-btn").classList.add("success");
    showNotification("Form submitted successfully!");
});

// Part 3: Conditional Statement
let age = 25;
if (age >= 18) {
    console.log("You are eligible to vote."); // Logging eligibility to vote
} else {
    console.log("You are not eligible to vote."); // Logging ineligibility to vote
}

// Part 4: Colour Changer
// Event listeners to change background and text color based on button clicks

document.getElementById("btn1").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0f0f0"; // Light gray background
    document.body.style.color = "#333"; // Dark gray text color
});

document.getElementById("btn2").addEventListener("click", function() {
    document.body.style.backgroundColor = "#333"; // Dark gray background
    document.body.style.color = "#fff"; // White text color
});

document.getElementById("btn3").addEventListener("click", function() {
    document.body.style.backgroundColor = "#55090b"; // Dark red background
    document.body.style.color = "#fff"; // White text color
});


// Part 5: Form Validation
// Event listener for form submission to validate form fields
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Preventing default form submission behavior

    // Retrieving form field values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("message").value;

    // Form validation
    if (name === "" || email === "" || age === "" || gender === "" || message === "") {
        alert("Please fill out all fields."); // Alert for missing fields
        return;
    }

    if (isNaN(age) || age < 18) {
        alert("Please enter a valid age (must be 18 or older)."); // Alert for invalid age
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address."); // Alert for invalid email
        return;
    }

    if (message.length < 10) {
        alert("Message should be at least 10 characters long."); // Alert for short message
        return;
    }

    alert("Form submitted successfully!"); // Alert for successful form submission
});

