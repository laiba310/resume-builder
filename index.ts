// Select form elements
const form = document.querySelector('form') as HTMLFormElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const address1 = document.getElementById('address1') as HTMLInputElement;
const city = document.getElementById('city') as HTMLInputElement;
const state = document.getElementById('state') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const motivation = document.getElementsByName('motivation') as NodeListOf<HTMLInputElement>;

const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents form from refreshing the page
        displayResume();
    });
});

// Function to display the resume
function displayResume(): void {
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const address1 = (document.getElementById("address1") as HTMLInputElement).value;
    const address2 = (document.getElementById("address2") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const state = (document.getElementById("state") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const gender = (document.getElementById("gender") as HTMLSelectElement).value;
    const age = (document.getElementById("age") as HTMLSelectElement).value;
    const nationality = (document.getElementById("nationality") as HTMLInputElement).value;
    const birthPlace = (document.getElementById("birthPlace") as HTMLInputElement).value;
    const degree = (document.getElementById("DEGREE") as HTMLSelectElement).value;
    const institute = (document.getElementById("insitute") as HTMLInputElement).value;
    const gpa = (document.getElementById("per") as HTMLInputElement).value;
    const futureRole = (document.getElementById("future-role") as HTMLTextAreaElement).value;
    const ismyy = (document.getElementById("ismyy") as HTMLInputElement).value; // Fetching the value of ismyy

    const resumeDisplay = document.getElementById("resumeDisplay");

    if (resumeDisplay) {
        resumeDisplay.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Address:</strong> ${address1}, ${address2}, ${city}, ${state}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <p><strong>Birth Place:</strong> ${birthPlace}</p>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institute:</strong> ${institute}</p>
            <p><strong>Percentage/GPA:</strong> ${gpa}</p>
            <p><strong>Future Role:</strong> ${futureRole}</p>
            <p><strong>Ismyy:</strong> ${ismyy}</p> <!-- Displaying the value of ismyy -->
        `;
    }
}
