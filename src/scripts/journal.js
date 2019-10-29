/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalEntry = {
date: "today",
title: "stuff",
entry: "yep",
mood: "good",

};

//this array will hold all the journal entries!!
const journal = [

];
//this function takes the parts of a journal entry and puts them in an object!

//heres a test of my writeEntry function
const firstEntry = writeEntry("today","title","learned a lot","Feeling good!")

journal.push(firstEntry);

console.log(journal);


