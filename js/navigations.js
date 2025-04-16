
// Set up action bar buttons
let action_bar = document.querySelector('.action_bar')
action_bar.innerHTML = `
<div class="logo"></div>
<div class="nav_links">
<div class="toggle_mode"><div class="switch"></div></div>
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


// THEME SWITCH FOR DARK & LIGHT MODES
const body = document.querySelector('body')
const switch_mode = document.querySelector('.toggle_mode')
const icon = document.querySelector('.switch')
const root = document.documentElement;
const active = document.querySelector('.active')
switch_mode.addEventListener('click', event => {
    console.log('click')
    const icon_bg = window.getComputedStyle(icon).backgroundColor
    console.log(icon_bg);
    
    switch(icon_bg){
        case "rgb(255, 255, 255)": // white
        switch_mode.style.justifyContent = "flex-start"
        switch_mode.style.borderColor = "blue"
        active.style.borderColor = "blue"
        active.style.color = "blue"
        root.style.setProperty('--theme', 'blue')
        root.style.setProperty('--background_color', 'white')
        root.style.setProperty('--border_color', 'black')
        root.style.setProperty('--font_color', 'black')
        icon.style.backgroundColor = "black"
        logo.innerHTML = `<img src="images/software-engineer-logo-lightmode.png" alt="Logo"/>`
        break
        case "rgb(0, 0, 0)": // black
        switch_mode.style.justifyContent = "flex-end"
        switch_mode.style.borderColor = "red"
        active.style.borderColor = "red"
        active.style.color = "red"
        root.style.setProperty('--theme', 'red')
        root.style.setProperty('--background_color', 'black')
        root.style.setProperty('--border_color', 'white')
        root.style.setProperty('--font_color', 'white')
        icon.style.backgroundColor = "white"
        logo.innerHTML = `<img src="images/software-engineer-logo-darkmode.png" alt="Logo"/>`
        break
        default:
            break
        }
})