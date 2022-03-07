// function akanName() {
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", "Kwame"];
//   let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//   let birthDate = document.getElementById("date").value;
//   let gender = document.getElementById("gender").value;

//   //get users date of birth and use the input to select the day of the week
//   //get users gender and use it to get the akan name based on the day of the week
//   birthDate.addEventListener("change"),
//     function () {
//       for (let i = 1; i <= days.length; i++) {
//         days[i].value;
//         if (gender.value === "male") {
//           for (let i = 1; i <= maleAkanNames.length; i++) {
//             maleAkanNames[i].days[i].value;
//           }
//         }
//         if (gender.value === "female") {
//           for (let i = 1; i <= femaleAkanNames.length; i++) {
//             femaleAkanNames[i];
//           }
//         }
//       }
//     };
// }
// document.getElementById("submit").addEventListener("click", (akanName) => {
//   alert(`You were born on ${days[i]} and your akan name is ${maleAkanNames[i].value}`);
// });
// document.getElementById("submit").addEventListener("click", (akanName) => {
//   alert(`You were born on ${days[i]} and your akan name is ${femaleAkanNames[i].value}`);
// });
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", "Kwame"];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let calendar = document.getElementById("date"); // the value is of form: "2022-03-06"
let weekday; // sunday is 0, saturday is 6

let genderButtons = document.getElementsByClassName("gender");

// convert to Array object so we can have access to array methods like "find"
genderButtons = Array.from(genderButtons);

//get users date of birth and use the input to select the day of the week
//get users gender and use it to get the akan name based on the day of the week
calendar.addEventListener("change", function () {
  // get day of the week e.g thursday is 4
  weekday = new Date(calendar.value).getDay();
});

function akanName() {
  // find only the radiobutton that is checked, and get the value
  let selectedGenderButton = genderButtons.find((x) => x.checked);
  let gender = selectedGenderButton.value; // e.g "female"

  let nameList = gender == "male" ? maleAkanNames : femaleAkanNames;
  alert(`You were born on ${days[weekday]} and your akan name is ${nameList[weekday]}`);
}

document.getElementById("btn").addEventListener("click", akanName);
