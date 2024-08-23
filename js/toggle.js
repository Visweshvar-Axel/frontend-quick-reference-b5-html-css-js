// Function to toggle the dark theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const themeSwitcher = document.querySelector('.theme-switcher');
    if (body.classList.contains('dark-theme')) {
        themeSwitcher.textContent = 'Switch to Light Theme';
    } else {
        themeSwitcher.textContent = 'Switch to Dark Theme';
    }
}

// Function to toggle output to the right of the syntax section
function toggleOutputRight() {
    const outputRight = document.getElementById('output-right');
    const outputBelow = document.getElementById('output-below');
    const syntax = document.getElementById('syntax');

    // Toggle the visibility of the output right section
    outputRight.classList.toggle('show');
    // Ensure the output below section is hidden when showing the output on the right
    outputBelow.classList.remove('show');
    // Adjust syntax width based on output right visibility
    syntax.classList.toggle('half-width', outputRight.classList.contains('show'));
}

// Function to toggle output below the syntax section
function toggleOutputBelow() {
    const outputBelow = document.getElementById('output-below');
    const outputRight = document.getElementById('output-right');
    const syntax = document.getElementById('syntax');

    // Toggle the visibility of the output below section
    outputBelow.classList.toggle('show');
    // Ensure the output right section is hidden when showing the output below
    outputRight.classList.remove('show');
    // Reset syntax width when showing output below
    syntax.classList.remove('half-width');
}


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
