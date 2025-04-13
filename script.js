let hello = document.querySelector('.test')

hello.innerHTML = "<p class='hello'>Hello World!<br>From your local JS!</p>"




// Select all buttons within the action bar
const buttons = document.querySelectorAll('.action_bar button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(function(btn){
            if (btn.className != "mobile_menu") {
                btn.classList.remove('active')
            }
        })
        // buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        if (button.className != "mobile_menu"){
            button.classList.add('active');
        }
    });
});
