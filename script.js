var character=document.getElementById("character");
var block=document.getElementById("block");
function jump(){
    if(character.classList !="animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
character.classList.remove("animate");
    },500);
}
var checkdead = setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<68 && blockleft>0 && characterTop>=170){
        block.style.animation="none";
        block.style.display="none";
        alert("You are definately not good in games !!\nWell, You can refresh the page to play again");
        // <div class="alert alert-danger">
        //     You are definately not good in games !!Well, You can refresh the page to play again
        // </div>
    }
},10)