// displays the last modified date
function displayLastModified() {
    // retrieves the last modified date of the document
    var lastMod = document.lastModified;
    
    // gets the div element by its id
    var lastModifiedDiv = document.getElementById("lastModified");
    
    // checks if the element exists before setting innerHTML
    if (lastModifiedDiv) {
        lastModifiedDiv.innerHTML = "Last Modified: " + lastMod;
    }
}