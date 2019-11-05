import API from "./data.js"
import entryFunctions from "./entryComponent.js"
import searchingStuff from "./searchManager.js"

const DOM = {
    formOnDom: () => {
        const container = document.querySelector("#formGoesHere");

        const form = `
    <form class="make" action="">
        <fieldset>
            <legend>Date of entry</legend>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
            <legend>Concepts Covered</legend>
            <input type="text" name="journalConcepts" id="journalConcepts">
        </fieldset>
        <fieldset>
            <legend>Journal Entry</legend>
            <textarea name="journalEntry" id="journalEntry" cols="25" rows="5"></textarea>
        </fieldset>
        <fieldset>
            <legend>Mood for the Day</legend>
            <select name="mood" id="mood">
                <option value="great">Great!</option>
                <option value="stressed">Stressed</option>
                <option value="ok">Ok</option>
                <option value="tired">Tired</option>
                <option value="good-not-great">Good not great</option>

            </select>
        </fieldset>
    </form>`


        container.innerHTML = form
        if (document.querySelector("h1").classList[0] === "edit") {
            container.innerHTML += `<button id="updateEntry">Update</button>`
        } else {
            container.innerHTML += `<button id="record">Record Daily Journal</button>`
        }
    },



    buildRadioAndSearch: () => {
        const radioField = `
        <div>
        <fieldset id="radioField">
        <legend>Sift by Mood</legend>
        <label for="great">Great!</label>
        <input type="radio" name="moodSelect" id="great">

        <label for="stressed">Stressed</label>
        <input class="radioButton" type="radio" name="moodSelect" id="stressed">

        <label for="ok">OK</label>
        <input type="radio" class="radioButton" name="moodSelect" id="ok">

        <label for="tired">Tired</label>
        <input type="radio" name="moodSelect" class="radioButton" id="tired">

        <label for="notGreat">Good Not Great</label>
        <input type="radio" name="moodSelect" id="not" class="radioButton">
    </fieldset>
    <fieldset>
    <legend>Search</legend>
    <input type="text" id="searchBar">
    </fieldset>
    </div>`

        document.querySelector("#formGoesHere").innerHTML += radioField;
    },



    postJournal: (journalEntries) => {
        const domRef = document.querySelector(".domRef");
        domRef.innerHTML = ""

        journalEntries.forEach(entry => {

            const divEl = document.createElement("div");
            divEl.id = "entryEl"
            divEl.innerHTML = `<h2>${entry.date}  ${entry.title}</h2>
                <p>Entry: ${entry.entry}  MOOD: ${entry.mood}</p>
                <button id="delete--${entry.id}">Delete Entry</button>
                <button id="edit--${entry.id}">Edit</button>`
            domRef.appendChild(divEl);
            document.querySelector(`#delete--${entry.id}`).addEventListener("click", () => {
                API.deleteEntry().then(API.fetchJournalEntry).then(DOM.postJournal);
            })
            document.querySelector(`#edit--${entry.id}`).addEventListener("click", () => {
                document.querySelector("h1").className = "edit";
                document.querySelector("#formGoesHere").innerHTML = "";
                DOM.formOnDom();

                API.getSingleEntry(entry.id).then((entryObj) => {
                    console.log(entryObj)
                    //fill in all the inputs with the values from the single entry obj just fetched
                    document.querySelector("#journalDate").value = entryObj.date
                    document.querySelector("#journalConcepts").value = entryObj.title
                    document.querySelector("#journalEntry").value = entryObj.entry
                    document.querySelector("#mood").value = entryObj.mood

                    document.querySelector("#updateEntry").addEventListener("click", () => {
                        const newEntry = entryFunctions.writeEntry(document.querySelector("#journalDate").value, document.querySelector("#journalConcepts").value, document.querySelector("#journalEntry").value, document.querySelector("#mood").value)


                        API.editSingleEntry(entry.id, newEntry).then(() => {
                            document.querySelector("#formGoesHere").innerHTML = "";
                            DOM.formOnDom();
                            DOM.buildRadioAndSearch();
                            API.fetchJournalEntry().then((entries) => {
                                DOM.postJournal(entries);

                            })
                        })
                    })
                })
            })
        })
    },


    addRadioAndSearchListener: () => {
        document.querySelector("#radioField").addEventListener("click", () => {
            const entrId = event.target.id;
            API.fetchJournalEntry().then((entries) => {
                const filteredEntries = entries.filter((entry) => {
                    if (entry.mood.includes(entrId)) {
                        return entry;
                    }
                })
                DOM.postJournal(filteredEntries);
            })
        });
        document.getElementById("searchBar").addEventListener("keypress", (event) => {
            if (event.charCode === 13) {
                const searchValue = document.getElementById("searchBar").value;
                searchingStuff.searchEntries(searchValue);
            }
        })
    }
}




export default DOM