const DOM = {
    formOnDom: () => {

        document.querySelector("#formGoesHere").innerHTML =
            `<h1>Daily Journal</h1>
    <form action="">
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
    </form>
    <input id="record" type="button" value="Record Daily Journal">`
    },
    postJournal: (journalEntries) => {
        console.log(journalEntries);
        journalEntries.forEach(entry => {


            const domRef = document.querySelector(".domRef");

            const divEl = document.createElement("div");
            divEl.innerHTML = `<h2>${entry.date}, ${entry.title}</h2>
    <p>Entry: ${entry.entry}, MOOD: ${entry.mood}</p>`
            domRef.appendChild(divEl);
        });
    }
}


export default DOM