/*
* JavaScript for index.html 
* Functions for control #top_page button
*/

function topPageButton() {
    scroll(0, 0);
}

function checkScroll() {
        var height = this.scrollY;

        if (height >= 76) {
            document.getElementById("top_page").style.visibility = "visible";
        } else {
            document.getElementById("top_page").style.visibility = "hidden";
        }
}