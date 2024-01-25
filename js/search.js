   // Assuming you have a JSON data source
   const jsonData = [
    { name: 'Item 1', description: 'Description 1' },
    { name: 'Item 2', description: 'Description 2' },
    // Add more data as needed
];

// Function to perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    // Clear previous results
    clearResults();

    // Check if the search term is empty
    if (searchTerm.trim() === '') {
        return; // No need to proceed if the search term is empty
    }

    // Filter the data based on the search term
    const filteredData = jsonData.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
    });

    // Display the results in the floating element
    displayResults(filteredData);
}

// Function to clear previous results
function clearResults() {
    const floatingResults = document.getElementById('floatingResults');
    floatingResults.innerHTML = ''; // Clear content
    floatingResults.style.display = 'none'; // Hide the floating element
}

// Function to display results in the floating element
function displayResults(filteredData) {
    const floatingResults = document.getElementById('floatingResults');
    floatingResults.style.display = 'block'; // Show the floating element

    // Display the results
    filteredData.forEach(item => {
        const resultElement = document.createElement('div');
        resultElement.textContent = `${item.name} - ${item.description}`;
        floatingResults.appendChild(resultElement);
    });
}

// Attach the search function to the input's 'input' event
document.getElementById('searchInput').addEventListener('input', performSearch);