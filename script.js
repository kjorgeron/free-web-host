let hello = document.querySelector('.test')

hello.innerHTML = "<p class='hello'>Hello World!<br>From your local JS!</p>"




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
