import API from "./data.js"

const DOM = {
    formOnDom: () => {
        const container = document.querySelector("#formGoesHere");
        
           const form = `<h1>Daily Journal</h1>
    <form class="make" action="">
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
            <label for="journalConcepts">Concepts Covered</label>
            <input type="text" name="journalConcepts" id="journalConcepts">
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="25" rows="5"></textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the Day</label>
            <select name="mood" id="mood">
                <option value="great">Great!</option>
                <option value="stressed">Stressed</option>
                <option value="ok">Ok</option>
                <option value="tired">Tired</option>
                <option value="good-not-great">Good not great</option>

            </select>
        </fieldset>
    </form>`
    

    container.innerHTML =form
        if (document.querySelector("form").classList[0] === "edit") {
            container.innerHTML += `<input id="updateEntry" type="button" value="Update">`
        } else {
    container.innerHTML += `<input id="record" type="button" value="Record Daily Journal">`
        }
    },



    buildRadio: () => {
        const radioField = `<fieldset id="radioField">
        <legend>Sift by Mood</legend>
        <label for="great">Great!</label>
        <input type="radio" name="moodSelect" id="great">

        <label for="stressed">Stressed</label>
        <input type="radio" name="moodSelect" id="stressed">

        <label for="ok">OK</label>
        <input type="radio" name="moodSelect" id="ok">

        <label for="tired">Tired</label>
        <input type="radio" name="moodSelect" id="tired">

        <label for="notGreat">Good Not Great</label>
        <input type="radio" name="moodSelect" id="not">
    </fieldset>`

        document.querySelector("#formGoesHere").innerHTML += radioField;
    },



    postJournal: (journalEntries) => {
        const domRef = document.querySelector(".domRef");
        domRef.innerHTML = ""
        
        journalEntries.forEach(entry => {

            const divEl = document.createElement("div");
            divEl.innerHTML = `<h2>${entry.date}  ${entry.title}</h2>
                <p>Entry: ${entry.entry}  MOOD: ${entry.mood}</p>
                <button id="delete--${entry.id}">Delete Entry</button>`
            domRef.appendChild(divEl);
            document.querySelector(`#delete--${entry.id}`).addEventListener("click", () => {
                API.deleteEntry().then(API.fetchJournalEntry).then(DOM.postJournal);
            })
        })
    },


    addRadioListener: () => {
        document.querySelector("#radioField").addEventListener("click", () => {
            const entrId = event.target.id;
            API.fetchJournalEntry().then((entries) => {
                const filteredEntries = entries.filter((entry) => {if (entry.mood.includes(entrId)) {
                    return entry;
                }})
                DOM.postJournal(filteredEntries);
            })
    })
    }
}




export default DOM