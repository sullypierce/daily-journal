import entryFunctions from "./entryComponent.js"


const API = {
fetchJournalEntry : () => {
fetch("http://localhost:8088/journal")
.then(entryData => {
    console.log("entries", entryData);
    return entryData.json();
})
.then(parsedEntries => {
    console.log(parsedEntries);
    console.log(parsedEntries[0].date)
})},

postEntry : () => {
    // Invoke the factory function, passing along the form field values
    const newJournalEntry = entryFunctions.getInput();
    
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/journal", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })}
}

export default API