fetch("http://localhost:8088/journal")
.then(entryData => {
    console.log("entries", entryData);
    return entryData.json();
})
.then(parsedEntries => {
    console.log(parsedEntries);
    console.log(parsedEntries[0].date)
})