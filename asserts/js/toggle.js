// Function to toggle the theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const button = document.querySelector('.theme-switcher');
    const isDarkTheme = document.body.classList.contains('dark-theme');

    button.innerHTML = isDarkTheme
        ? '<i class="fas fa-sun"></i> Switch to Light Theme'
        : '<i class="fas fa-moon"></i> Switch to Dark Theme';
}

// function toggleTheme() {
//     const body = document.body;
//     body.classList.toggle('dark-theme');
//     const themeSwitcher = document.querySelector('.theme-switcher');
//     if (body.classList.contains('dark-theme')) {
//         themeSwitcher.textContent = 'Switch to Light Theme';
//     } else {
//         themeSwitcher.textContent = 'Switch to Dark Theme';
//     }
// }

// Function to toggle output on the right
function toggleOutputRight(outputRightId, outputBelowId, syntaxId) {
    const outputRight = document.getElementById(outputRightId);
    const outputBelow = document.getElementById(outputBelowId);
    const syntax = document.getElementById(syntaxId);

    outputRight.classList.toggle('show');
    outputBelow.classList.remove('show');
    syntax.classList.toggle('half-width', outputRight.classList.contains('show'));
}

// Function to toggle output below
function toggleOutputBelow(outputBelowId, outputRightId, syntaxId) {
    const outputBelow = document.getElementById(outputBelowId);
    const outputRight = document.getElementById(outputRightId);
    const syntax = document.getElementById(syntaxId);
    
    outputBelow.classList.toggle('show');
    outputRight.classList.remove('show');
    syntax.classList.remove('half-width');
}

// Function to toggle Dropdown 
document.querySelectorAll('.main-topic').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const sublist = this.nextElementSibling; 
        if (sublist.style.display === 'block') {
            sublist.style.display = 'none';
        } else {
            sublist.style.display = 'block';
        }
    });
});




// // Function to toggle the dark theme
// function toggleTheme() {
//     const body = document.body;
//     body.classList.toggle('dark-theme');
//     const themeSwitcher = document.querySelector('.theme-switcher');
//     if (body.classList.contains('dark-theme')) {
//         themeSwitcher.textContent = 'Switch to Light Theme';
//     } else {
//         themeSwitcher.textContent = 'Switch to Dark Theme';
//     }
// }

// // Function to toggle output to the right of the syntax section
// function toggleOutputRight() {
//     const outputRight = document.getElementById('output-right');
//     const outputBelow = document.getElementById('output-below');
//     const syntax = document.getElementById('syntax');

//     // Toggle the visibility of the output right section
//     outputRight.classList.toggle('show');
//     // Ensure the output below section is hidden when showing the output on the right
//     outputBelow.classList.remove('show');
//     // Adjust syntax width based on output right visibility
//     syntax.classList.toggle('half-width', outputRight.classList.contains('show'));
// }

// // Function to toggle output below the syntax section
// function toggleOutputBelow() {
//     const outputBelow = document.getElementById('output-below');
//     const outputRight = document.getElementById('output-right');
//     const syntax = document.getElementById('syntax');

//     // Toggle the visibility of the output below section
//     outputBelow.classList.toggle('show');
//     // Ensure the output right section is hidden when showing the output below
//     outputRight.classList.remove('show');
//     // Reset syntax width when showing output below
//     syntax.classList.remove('half-width');
// }
