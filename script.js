// Check JS is Connected
console.log("JS Connected");

// Get the Footer
const footer = document.querySelector(".copyright");

// Get the Current Year
const date = new Date();
const year = date.getFullYear();
console.log(year);

// Set the footer to have the current year and copyright
footer.innerHTML = `&copy; ${year} RyanHirte`;
