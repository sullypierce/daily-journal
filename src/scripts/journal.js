import DOM from "./entriesDOM.js";
import API from "./data.js";


DOM.formOnDom();



document.querySelector("#record").addEventListener("click", () => {
    API.postEntry();
    API.fetchJournalEntry().then(DOM.postJournal)
})


