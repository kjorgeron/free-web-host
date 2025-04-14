// Set up action bar buttons
action_bar = document.querySelector('.action_bar')
action_bar.innerHTML = `
        <div class="logo"></div>
        <div class="nav_links">
        <button class="nav active">Home</button>
        <button class="nav">About</button>
        <button class="nav">Portfolio</button>
        <button class="nav">Contact</button>
        <button class="mobile_menu">≡</button>
        </div>
`
logo = document.querySelector('.logo')
logo.innerHTML = `<img src="images/software-engineer-logo-darkmode.png" alt="Logo"/>`

// Select all buttons within the action bar
const buttons = document.querySelectorAll('.nav');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove active class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to button pressed
        button.classList.add("active");

    });
});

const mobile_button = document.querySelector('.action_bar .nav_links .mobile_menu');

mobile_button.addEventListener('click', (event) => {
    // Toggle innerHTML between "≡" and "X"
    event.target.innerHTML = event.target.innerHTML === "X" ? "≡" : "X";

    // Toggle 'active' class based on innerHTML
    if (event.target.innerHTML === "X") {
        event.target.classList.add("active");
    } else {
        event.target.classList.remove("active");
    }
});
