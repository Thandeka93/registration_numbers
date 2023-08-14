const inputText = document.querySelector(".inputText");
const SelectTown = document.querySelector(".SelectTown");
const output = document.querySelector(".output");

function addRegistrationNumber() {
  const inputValue = inputText.value;
  if (inputValue !== "") {
    const selectedTown = SelectTown.value;

    if (selectedTown !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = inputValue;
      listItem.setAttribute("data-town", selectedTown);
      output.appendChild(listItem);

      const registrationList = JSON.parse(localStorage.getItem("registrationList")) || [];
      registrationList.push({ number: inputValue, town: selectedTown });
      localStorage.setItem("registrationList", JSON.stringify(registrationList));

      // Clear town selection and text input
      inputText.value = "";
      SelectTown.value = "";
    } else {
      alert("Please select a town before adding a registration number.");
    }
  } else {
    alert("Please enter a registration number.");
  }
}

window.addEventListener("load", function() {
const registrationList = JSON.parse(localStorage.getItem("registrationList")) || [];

 for (let i = 0; i < registrationList.length; i++) {
 const registration = registrationList[i];
const listItem = document.createElement("li");
listItem.innerHTML = registration.number;
 listItem.setAttribute("data-town", registration.town);
output.appendChild(listItem);
 }
 });

function filterRegistrationNumbers() {
  const selectedTown = SelectTown.value;
  const registrationItems = output.getElementsByTagName("li");

  for (let i = 0; i < registrationItems.length; i++) {
    const item = registrationItems[i];
    const town = item.getAttribute("data-town");

    if (selectedTown === "" || town === selectedTown) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

function resetRegistrationNumber() {
  inputText.value = "";
  SelectTown.value = "";
  output.innerHTML = "";

  localStorage.removeItem("registrationList");
}




