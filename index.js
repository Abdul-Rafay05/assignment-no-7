let username;

document.getElementById('firstbutton').addEventListener('click', () => {
    username = document.getElementById('userinput').value;
    if (username.length >= 8) {
        alert("A Success validation Pass")
    } else {
        alert(`"The User Name Enter atleast 8 Character Long ("letters and numbers")`)

    }
});

document.getElementById('secondbtn').addEventListener('click', () => {
    document.getElementById('hidediv').style.visibility = "visible";
    document.getElementById('hidediv').style.width = "50vw";
    document.getElementById('hidediv').style.height = "50vh";
    document.getElementById('hidediv').style.backgroundColor = "green";
    document.getElementById('hidediv').innerHTML = "Show Div";
    document.getElementById('hidediv').style.transition = "0.2s";

});
document.getElementById('thirdbtn').addEventListener('click', () => {
    document.getElementById('hidediv').style.visibility = "hidden";
});



