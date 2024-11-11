//Arrays of names
const names = [
    "Shater Tsavsar", "Adugbo Justine", "Martins Ferderick", "Alexander Usman"
];

const input = document.getElementById("nameInput");
const dropDown = document.querySelector('.dropDownName');

// shows dropdown with names when input is clicked
input.addEventListener("focus", () => {
    dropDown.style.display = "block";
    displayNames();
  });

// Hide dropdown when clickig outside the input
document.addEventListener("click", (e) => {
    if (!dropDown.contains(e.target) && e.target !== input) {
        dropDown.style.display = "none";
    }
});

// displays the names as dropdown options
function displayNames() {
    dropDown.innerHTML = "";
    names.forEach((name) => {
        const option = document.createElement("div");
        option.textContent = name;
        option.addEventListener("click", () => {
          input.value = name;
          dropDown.style.display = "none";
        });
        dropDown.appendChild(option);
    });
}