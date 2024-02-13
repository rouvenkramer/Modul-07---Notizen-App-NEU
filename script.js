
//GLOBAL VARIABLES//

let notes = ['note01', 'note02', 'note03'];


function render() {

    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        content.innerHTML += `

            <div class="note">

                <b>${note}</b>

            </div>


`;
    }
}