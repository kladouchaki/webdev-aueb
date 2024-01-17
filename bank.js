document.getElementById('welcomeLogo').innerHTML = "Η Τράπεζα της καθημερινότητας σας!";
alert(welcomeLogo.textContent);

 let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    alert('Ευχαριστούμε για την απάντηση σας!');
}, false); 

 let checkSubBtn = document.getElementById('checkSubBtn');
checkSubBtn.addEventListener ('click', function() {
    alert('Τα σχόλια σας έχουν καταχωρηθεί!');
     console.log('Τα σχόλια σας έχουν καταχωρηθεί!'); 
});  



function toggleButtonHandler () {
    let toggleMenu = document.querySelector('.toggle-menu');
    let slider = document.querySelector('.slider');
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');


    if (toggleMenuDisplayStatus == "none") {
        toggleMenu.style.display = "block"; 
        slider.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    } else {
        toggleMenu.style.display = "none"; 
        slider.style.display = "block";
        main.style.display = "block";
        footer.style.display = "flex";
    }
}

$(document).ready(function() {
    hideAllDescriptions();
    showImgText('#documents', '.documents-text');
    showImgText('#websecure', 'websecure-text');
    showImgText('#gdpr', '.gdpr-text');

})

function hideAllDescriptions() {
    $('.documents-text').hide();
    $('.websecure-text').hide();
    $('.gdpr-text').hide();
}

function showImgText(imgId, textDiv) {
    $(textDiv).prepend('<h3></h3>');
    $(textDiv + '> h3').addClass('mb-20');
    $(textDiv + '> h3').text(imgId);

    $(imgId).hover(function() {
        $(this).css({'box-shadow': '0 0 5px grey'});
        $(textDiv).show();
    }, function() {
        $(this).css({'box-shadow' : 'none'});
        $(textDiv).hide();
    })
}
const container = document.querySelector(".container");
const createAccount = document.querySelector(".createAccountBtn");

createAccountBtn.addEventListener('click', () =>{
    container.classList.toggle("change");
})