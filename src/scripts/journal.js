import DOM from "./entriesDOM.js";
import API from "./data.js";


DOM.formOnDom();
DOM.buildRadio();
DOM.addRadioListener();
API.fetchJournalEntry().then(DOM.postJournal);



document.querySelector("#record").addEventListener("click", () => {
    API.postEntry().then(API.fetchJournalEntry).then(DOM.postJournal)
})


