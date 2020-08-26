$(document).ready(function(){
//MUSIC PLAYER
    let audio = document.getElementById('audio');
    audio.volume = 0.5;
    let audio2 = document.getElementById('audio2');
    audio2.volume = 0.5;
    let audio3 = document.getElementById('audio3');
    audio3.volume = 0.5;
    let audio4 = document.getElementById('audio4');
    audio4.volume = 0.5;

// COVER PORTFOLIO
    let cover = document.getElementById('cover');
    $("#change").click(function (){
        cover.src = "./assets/img/gradur.jpg"     
    }
    )
    $("#change2").click(function (){
        cover.src = "./assets/img/cudi.jpg"     
    })

    $("#change3").click(function (){
        cover.src = "./assets/img/jon.jpg"     
    })

//SCROLL

function scrollToTop() {
    $("#scroll").click(function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
    $(window).scroll(function(){
        if($(window).scrollTop()<500){
            $("#scroll").fadeOut();
        } else{
            $("#scroll").fadeIn();
        }
    });
}
scrollToTop("#scroll");


// NAV

let nav = document.getElementById('navBAR');
//console.log(nav)
let sticky = nav.offsetHeight;

function navTop() {
    $(window).scroll(function(){
        if($(window).scrollTop()>=sticky){
            nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");

    }
})}
navTop();

$("#btn").click(function(){
    $(this).hide();
})

//COMPETENCES

$("#btnComp").click(function(){
    $("#comp").fadeIn(1000);
    
})

$( ".move" ).animate({
    left: "+=60",
  }, 2000, function() {
});

$( ".move" ).animate({
    left: "-=120",
  }, 2000, function() {
});
$( ".move" ).animate({
    left: "+=60",
  }, 2000, function() {
});



//FORM

$("#nom").blur(function(){
    let name = document.getElementById("nom").value
    if(name != "") { 
} 
    else {
    let alert = document.getElementById('alertNom');
    alert.style.fontSize = "x-small"
    alert.innerHTML = "Veuillez saisir votre nom."
}
})

$("#prenom").blur(function(){
    let prenom = document.getElementById("prenom").value
    if(prenom != "") { 
} 
    else {
    let alert = document.getElementById('alertPrenom');
    alert.style.fontSize = "x-small"
    alert.innerHTML = "Veuillez saisir votre prénom."
}
})

$("#email").blur(function(){
    let email = document.getElementById("email").value
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(regex.test(email)) { 
} 
    else {
    let alert = document.getElementById('alertEmail');
    alert.style.fontSize = "x-small"
    alert.innerHTML = "Veuillez saisir votre email."
}

})

$("#message").blur(function(){
    let message = document.getElementById("message").value
    if(message != "") { 
} 
    else {
    let alert = document.getElementById('alertMessage');
    alert.style.fontSize = "x-small"
    alert.innerHTML = "Veuillez écrire un message."
}
})

}) 





