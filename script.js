
//GLOBAL VARIABLES//

let notes = [];
let dates =[];
load();


function render() {

    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        content.innerHTML += `

            <div class="note">
                <b>${note}</b>
                <button id="delete" onclick="deleteNote(${i})">X</button>
            </div>
`;
    }
}

function saveNewNote() {

    let newNote = document.getElementById('newNoteText');
    notes.push(newNote.value);

    save();
    render();
}

function deleteNote(i) {

    const yesDelete = confirm("delete note ?");
    if (yesDelete) {

        notes.splice(i, 1);
        save();
        render();
    }
    else { }
}

function save() {

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notesAsTextSaved', notesAsText);
}

function load (){

    let notesAsText = localStorage.getItem('notesAsTextSaved');
    if(notesAsText){
        notes = JSON.parse(notesAsText);
    }
    



}

function getSaveDate(){
    let now = new Date;
    let datumAsString = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    console.log(datumAsString);
}