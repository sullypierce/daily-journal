const domRef = document.querySelector(".domRef");
document.querySelector("#record").addEventListener("click", () => {
    const date = document.querySelector("#journalDate").value;
    const concepts = document.querySelector("#journalConcepts").value;
    const jEntry = document.querySelector("#journalEntry").value;
    const mood = document.querySelector("#mood").value;
    const tempEntry = writeEntry(date, concepts, jEntry, mood);
    journal.push(tempEntry);
    console.log(journal);
    const divEl = document.createElement("div");
    divEl.innerHTML = `<h2>${tempEntry.date}, ${tempEntry.title}</h2>
    <p>Entry: ${tempEntry.entry}, MOOD: ${tempEntry.mood}</p>`
    domRef.appendChild(divEl);
})