import DOM from "./entriesDOM.js";
import API from "./data.js";


DOM.formOnDom();
DOM.buildRadioAndSearch();
DOM.addRadioAndSearchListener();
API.fetchJournalEntry().then(DOM.postJournal);



document.querySelector("#record").addEventListener("click", () => {
    API.postEntry().then(API.fetchJournalEntry).then(DOM.postJournal)
})


