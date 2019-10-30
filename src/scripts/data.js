import entryFunctions from "./entryComponent.js"


const API = {
    fetchJournalEntry: () => {
        return fetch("http://localhost:8088/journal")
            .then(entryData => {
                console.log("entries", entryData);
                return entryData.json();
            })
            
    },

    postEntry: () => {
        // Invoke the factory function, passing along the form field values
        const newJournalEntry = entryFunctions.getInput();
        if (/\w/.test(newJournalEntry.date) && /\w/.test(newJournalEntry.entry) && /\w/.test(newJournalEntry.title) && /\w/.test(newJournalEntry.mood)) {
            // Use `fetch` with the POST method to add your entry to your API
            fetch("http://localhost:8088/journal", { // Replace "url" with your API's URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newJournalEntry)
            }
            )
        } else {
            window.alert("something is missing!")
        }
    }
}

export default API