// Set up action bar buttons
action_bar = document.querySelector('.action_bar')
action_bar.innerHTML = `
        <button class="active">Home</button>
        <button>About</button>
        <button>Portfolio</button>
        <button>Contact</button>
        <button class="mobile_menu">≡</button>
`


// Select all buttons within the action bar
const buttons = document.querySelectorAll('.action_bar button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons except the mobile menu
        buttons.forEach(btn => {
            if (btn.className !== "mobile_menu") {
                btn.classList.remove('active');
            }
        });

        // Toggle innerHTML between "≡" and "X"
        if (button.className === "mobile_menu") {
            button.innerHTML = button.innerHTML === "X" ? "≡" : "X";
            if (button.innerHTML === "X"){
                button.style.fontSize = "40px"
            }
            else {
                button.style.fontSize = "50px"
            }
            // Toggle 'active' class based on innerHTML
            if (button.innerHTML === "X") {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        } else {
            button.classList.add("active");
        }
    });
});
