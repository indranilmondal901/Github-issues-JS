const pageNumber = document.querySelector('#page-number');
const issuesList = document.querySelector('#issuesList');
let currentPage = 1;

// Data for landing Page
fetchAndDisplayIssues(currentPage);

// Button functionality
function countPrev() {
    currentPage = currentPage - 1;
    if (currentPage >= 1) {
        fetchAndDisplayIssues(currentPage);
    } else {
        currentPage = 1;
        alert(`No Previous Page Is There`);
    }
}
function countNext() {
    currentPage++;
    fetchAndDisplayIssues(currentPage);
}

// Fetching functionality
function fetchAndDisplayIssues(currentPage) {
    // Page Number
    pageNumber.innerHTML = `Page number ${currentPage}`;
    // URL
    const url = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`;
    // fetching DATA
    fetch(url).then((response) => response.json())
        .then((data) => {
            //removing previous
            issuesList.innerHTML = "";
            data.map((singleData) => {
                issuesList.innerHTML += `<li>${singleData.title}</li>`;
            })
        }).catch((err) => {
            console.log(err);
        });
}

