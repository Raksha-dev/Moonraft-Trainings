function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
function openSelect(){
    submitForm = document.getElementsByClassName('container-4');
        submitForm.style.display = 'block';
}
function continueRequest() {
    submitForm = document.getElementsByClassName('container-4');
    for (var i=0;i<submitForm.length;i+=1){
        submitForm[i].style.display = 'none';
    alert("Your Request has been submitted");
}
var firstName = document.getElementById('name');
firstName.innerHTML = JSON.stringify(sessionStorage);
// var targetingParams = pbjs.getAdserverTargeting();
sessionStorage.setItem("name", firstName);
console.log('name', firstName);
var myName = sessionStorage.getItem('name', firstName);
// localStorage.setItem('name', name);
// console.log(firstName);
// localStorage.setItem('address', name);
// var myAddress = localStorage.getItem('address');
// console.log(myAddress);
}

