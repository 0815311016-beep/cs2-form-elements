console.log("script started")

function processForm(event) {
    event.preventDefault();
    console.log("click");

    let fnameInput = document.getElementbyId("firstname");
    let firstname = fnameInput.value;
    console.log(firstname);

    let dateInput = document.getElementbyId("birthdate");
    let birthdate = dateInput.value;
    console.log(birthdate);

}