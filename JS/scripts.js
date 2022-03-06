function akanName() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", "Kwame"];
  let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let birthDate = document.getElementById("date").value;
  let gender = document.getElementById("gender").value;

  //get users date of birth and use the input to select the day of the week
  //get users gender and use it to get the akan name based on the day of the week
  birthDate.addEventListener("change"),
    function () {
      for (let i = 1; i <= days.length; i++) {
        days[i].value;
        if (gender.value === "male") {
          for (let i = 1; i <= maleAkanNames.length; i++) {
            maleAkanNames[i].days[i].value;
          }
        }
        if (gender.value === "female") {
          for (let i = 1; i <= femaleAkanNames.length; i++) {
            femaleAkanNames[i];
          }
        }
      }
    };
}
document.getElementById("submit").addEventListener("click", (akanName) => {
  alert(`You were born on ${days[i]} and your akan name is ${maleAkanNames[i].value}`);
});
document.getElementById("submit").addEventListener("click", (akanName) => {
  alert(`You were born on ${days[i]} and your akan name is ${femaleAkanNames[i].value}`);
});
