document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("number").value.trim();

    if (name === "" || email === "" || age === "") {
      alert("Please fill in all required fields.");
      event.preventDefault(); // stops the form from submitting
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    } else if (isNaN(age) || age < 16) {
      alert("Applicants must be at least 16 years old.");
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  });
});
