// Get the modal
var modal = document.getElementById("side-effects-modal");

// Get the button that opens the modal
var btn = document.getElementById("side-effects-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/// Get the modals
var sideEffectsModal = document.getElementById("side-effects-modal");
var researchModal = document.getElementById("research-modal");

// Get the buttons that open the modals
var sideEffectsBtn = document.getElementById("side-effects-btn");
var researchBtn = document.getElementById("research-btn");

// Get the <span> elements that close the modals
var closeBtns = document.getElementsByClassName("close-btn");

// When the user clicks the Side Effects button, open the side effects modal
sideEffectsBtn.onclick = function() {
    sideEffectsModal.style.display = "block";
}

// When the user clicks the Research Data button, open the research modal
researchBtn.onclick = function() {
    researchModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        sideEffectsModal.style.display = "none";
        researchModal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == sideEffectsModal) {
        sideEffectsModal.style.display = "none";
    }
    if (event.target == researchModal) {
        researchModal.style.display = "none";
    }
}
