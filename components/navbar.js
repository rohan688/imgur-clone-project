var menuStatus = false;
function openMenu(){
    if(!menuStatus) menuStatus=true;
    else menuStatus=false;
    let menu = document.getElementById("openmenu");
    if(menuStatus) menu.style.display='block';
    else menu.style.display='none';
}

