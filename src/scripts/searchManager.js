import API from "./data.js"

const searching = {
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
        })
    }
}

export default searching