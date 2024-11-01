// Select form elements
var form = document.querySelector('form');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var address1 = document.getElementById('address1');
var city = document.getElementById('city');
var state = document.getElementById('state');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var motivation = document.getElementsByName('motivation');
var resumeDisplay = document.getElementById('resumeDisplay');
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing the page
        displayResume();
    });
});
// Function to display the resume
function displayResume() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var nationality = document.getElementById("nationality").value;
    var birthPlace = document.getElementById("birthPlace").value;
    var degree = document.getElementById("DEGREE").value;
    var institute = document.getElementById("insitute").value;
    var gpa = document.getElementById("per").value;
    var futureRole = document.getElementById("future-role").value;
    var resumeDisplay = document.getElementById("resumeDisplay");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Full Name:</strong> ".concat(firstName, " ").concat(lastName, "</p>\n            <p><strong>Address:</strong> ").concat(address1, ", ").concat(address2, ", ").concat(city, ", ").concat(state, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Gender:</strong> ").concat(gender, "</p>\n            <p><strong>Age:</strong> ").concat(age, "</p>\n            <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n            <p><strong>Birth Place:</strong> ").concat(birthPlace, "</p>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institute:</strong> ").concat(institute, "</p>\n            <p><strong>Percentage/GPA:</strong> ").concat(gpa, "</p>\n            <p><strong>Future Role:</strong> ").concat(futureRole, "</p>\n        ");
    }
}
