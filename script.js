function validateJSON() {
  try {
    if (document.getElementById("json-input").value == "") {
      alert("Please fill in the input field.");
      return;
    }
    JSON.parse(document.getElementById("json-input").value);
    alert("klasa");
  } catch (e) {
    alert(`Error: ${e.message}`);
  }
}

function clearJSON() {
  document.getElementById("json-input").value = "";
}

function formatJSON() {
  const inputElement = document.getElementById("json-input");
  const obj = JSON.parse(inputElement.value);
  inputElement.value = JSON.stringify(obj, null, 3);
}
