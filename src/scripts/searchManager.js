import API from "./data.js"
import DOM from "./entriesDOM.js"
const searchingStuff = {
    searchEntries: (input) => {
        API.fetchJournalEntry().then((entries) => {
            console.log(entries)
            const foundEntries = entries.filter((entry) => {
                let counter = 0;
                for( const value of Object.values(entry)) {
                    //.includes gets caught up when it hits the ids because they are not strings
                    if (value.toString().includes(input)) {
                        counter ++
                    }
                }
                if (counter >0) {
                    return true;
                } else {
                    return false;
                }
            })
            console.log("found", foundEntries)
            //need to take found entries and post them to the dom
            DOM.postJournal(foundEntries);
        })
    }
}

export default searchingStuff