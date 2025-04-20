const action_bar = document.querySelector('.action_bar')
const mobile_box = document.querySelector('.custom_border')

// Set up action bar nav_buttons
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

mobile_box.innerHTML = `
<div class="mobile_toggle_box">
<div class="mobile_toggle_mode"><div class="mobile_switch"></div></div>
</div>
<div class="mobile_btn_box">
<button class="mobile_nav active">Home</button>
<button class="mobile_nav">About</button>
<button class="mobile_nav">Portfolio</button>
<button class="mobile_nav">Contact</button>
</div>
`

// INITIAL SETTING OF ACTION BAR LOGO
logo = document.querySelector('.logo')
logo.innerHTML = `<img src="images/software-engineer-logo-darkmode-small.png" alt="Logo"/>`

// INITIALIZATION OF CONSTANTS
const body = document.querySelector('body')
const toggle_mode = document.querySelector('.toggle_mode')
const switch_button = document.querySelector('.switch')
const root = document.documentElement;
const nav_buttons = document.querySelectorAll('.nav');
const mobile_nav_buttons = document.querySelectorAll('.custom_border .mobile_btn_box .mobile_nav');
const mobile_menu_button = document.querySelector('.action_bar .nav_links .mobile_menu');
const mobile_toggle_mode = document.querySelector('.mobile_toggle_mode')
const mobile_button_box = document.querySelector('.mobile_btn_box')
const mobile_toggle_box = document.querySelector('.mobile_toggle_box')

// NAV BUTTON ACTIVATION EVENT
nav_buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all nav_buttons
        nav_buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class only to the button pressed
        button.classList.add("active");
    });
});

// MOBILE NAV BUTTON ACTIVATION EVENT
mobile_nav_buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all nav_buttons
        mobile_nav_buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class only to the button pressed
        button.classList.add("active");
    });
});

// MOBILE MENU BUTTON EVENT
mobile_menu_button.addEventListener('click', (event) => {

    event.target.innerHTML = event.target.innerHTML === "X" ? "≡" : "X";

    if (event.target.innerHTML === "X") {
        event.target.classList.add("active");
        body.style.transition = "ease-in-out 1s"
        mobile_box.style.borderRight = "1px solid var(--theme)"
        mobile_box.style.borderLeft = "1px solid var(--theme)"
        mobile_box.style.borderRadius = "0 0 10px 10px"
        body.style.gridTemplateRows = "10% 35% auto"
        setTimeout(() => {
            mobile_button_box.style.scale = "1"
            mobile_toggle_box.style.scale = "1"
        }, 500);
    } else {
        event.target.classList.remove("active");
        mobile_box.style.borderRadius = "unset"
        body.style.gridTemplateRows = "10% 1% auto"
        mobile_button_box.style.scale = "0"
        mobile_toggle_box.style.scale = "0"
        setTimeout(() => {
            body.style.transition = "none"
            mobile_box.style.borderRight = "none"
            mobile_box.style.borderLeft = "none"
        }, 1000);
    }
});

// THEME SWITCH FOR DARK & LIGHT MODES
toggle_mode.addEventListener('click', event => {
    const icon_bg = window.getComputedStyle(switch_button).backgroundColor
    switch (icon_bg) {
        case "rgb(255, 255, 255)": // white
            toggle_mode.style.justifyContent = "flex-start"
            toggle_mode.style.borderColor = "blue"
            root.style.setProperty('--theme', 'blue')
            root.style.setProperty('--background_color', 'white')
            root.style.setProperty('--border_color', 'black')
            root.style.setProperty('--font_color', 'black')
            switch_button.style.backgroundColor = "black"
            logo.innerHTML = `<img src="images/software-engineer-logo-lightmode-small.png" alt="Logo"/>`
            break
        case "rgb(0, 0, 0)": // black
            toggle_mode.style.justifyContent = "flex-end"
            toggle_mode.style.borderColor = "red"
            root.style.setProperty('--theme', 'red')
            root.style.setProperty('--background_color', 'black')
            root.style.setProperty('--border_color', 'white')
            root.style.setProperty('--font_color', 'white')
            switch_button.style.backgroundColor = "white"
            logo.innerHTML = `<img src="images/software-engineer-logo-darkmode-small.png" alt="Logo"/>`
            break
        default:
            break
    }
})

// MOBILE THEME SWITCH FOR DARK / LIGHT MODES
mobile_toggle_mode.addEventListener('click', event => {
    const icon_bg = window.getComputedStyle(switch_button).backgroundColor;
    switch (icon_bg) {
        case "rgb(255, 255, 255)": // white
            // Temporarily disable transitions
            body.style.transition = "none";
            mobile_box.style.transition = "none";
            mobile_button_box.style.transition = "none";

            // Perform your dark/light mode changes
            mobile_toggle_mode.style.justifyContent = "flex-start";
            mobile_toggle_mode.style.borderColor = "blue";
            root.style.setProperty('--theme', 'blue');
            root.style.setProperty('--background_color', 'white');
            root.style.setProperty('--border_color', 'black');
            root.style.setProperty('--font_color', 'black');
            switch_button.style.backgroundColor = "black";
            logo.innerHTML = `<img src="images/software-engineer-logo-lightmode-small.png" alt="Logo"/>`;

            // Restore transitions
            setTimeout(() => {
                body.style.transition = "ease-in-out 1s";
                mobile_box.style.transition = "ease-in-out 1s";
                mobile_button_box.style.transition = "ease 0.5s";
            }, 0); // Small delay ensures changes take effect first
            break;

        case "rgb(0, 0, 0)": // black
            // Temporarily disable transitions
            body.style.transition = "none";
            mobile_box.style.transition = "none";
            mobile_button_box.style.transition = "none";

            // Perform your dark/light mode changes
            mobile_toggle_mode.style.justifyContent = "flex-end";
            mobile_toggle_mode.style.borderColor = "red";
            root.style.setProperty('--theme', 'red');
            root.style.setProperty('--background_color', 'black');
            root.style.setProperty('--border_color', 'white');
            root.style.setProperty('--font_color', 'white');
            switch_button.style.backgroundColor = "white";
            logo.innerHTML = `<img src="images/software-engineer-logo-darkmode-small.png" alt="Logo"/>`;

            // Restore transitions
            setTimeout(() => {
                body.style.transition = "ease-in-out 1s";
                mobile_box.style.transition = "ease-in-out 1s";
                mobile_button_box.style.transition = "ease 0.5s";
            }, 0); // Small delay ensures changes take effect first
            break;

        default:
            break;
    }
});
