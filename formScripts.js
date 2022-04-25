const formElement = document.querySelector("form");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const userName = nameInput.value;

    const emailInput = document.getElementById("email");
    const userEmail = emailInput.value;

    const messageInput = document.getElementById("message");
    const userMessage = messageInput.value;

    alert(`Thank you, ${userName} for your submisson!`);

    if (userName) {
        nameInput.value = "";
    } if (userEmail) {
        emailInput.value = "";
    } if (userMessage) {
        messageInput.value = "";
    }
});