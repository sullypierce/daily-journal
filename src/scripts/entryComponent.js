const entryFunctions = {

    writeEntry: (Date, Title, Entry, Mood) => {
        return {
            date: Date,
            title: Title,
            entry: Entry,
            mood: Mood
        }}
    ,

    getInput : () => {
        const date = document.querySelector("#journalDate").value;
        const concepts = document.querySelector("#journalConcepts").value;
        const jEntry = document.querySelector("#journalEntry").value;
        const mood = document.querySelector("#mood").value;
        const tempEntry = entryFunctions.writeEntry(date, concepts, jEntry, mood);
        return tempEntry;
    }
}


export default entryFunctions







