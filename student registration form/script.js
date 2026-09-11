let form = document.getElementById("studentForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let branch = document.getElementById("branch").value;
    let roll = document.getElementById("roll").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        dob === "" ||
        !gender ||
        course === "" ||
        branch === "" ||
        roll === "" ||
        address === "" ||
        city === ""
    ) {
        message.textContent = "Please fill all the fields.";
        message.style.color = "red";
        return;
    }
    if (phone.length !== 10) {
    message.textContent = "Phone number must be exactly 10 digits.";
    message.style.color = "red";
    return;
}

        message.textContent = "Registration Successful!";
        message.style.color = "green";

    form.reset();
});