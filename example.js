function onClickBtn() {
  console.log("Btn Click works");
}

function onAddStorageChange() {
  // Add Storage testing

  // Localstorage
  localStorage.setItem("name", "Abhishek");
  sessionStorage.setItem("name", "Abhishek");
}

function onRemoveStorageChange() {
  // Remove Storage testing

  // Localstorage
  localStorage.clear();
  sessionStorage.clear();
}
