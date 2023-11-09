function startGame(){
    window.location.href = 'livingRoom.html';
}

function openPopUp() {
    let url = "help.html";
    let height = 300;
    let width = 500;
    var left = ( screen.width - width ) / 2;
    var top = ( screen.height - height+200 ) / 2;
    var newWindow = window.open( url, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top='+ top + ', left=' + left);
}