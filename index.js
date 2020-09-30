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
document.getElementById("name");
sessionStorage.setItem("name", $('#name').text());
document.getElementById("name").innerHTML = sessionStorage.getItem("name", ('#name').text());
// localStorage.setItem('name', name);
// var myName = localStorage.getItem('name');
// console.log(myName);

// localStorage.setItem('address', name);
// var myAddress = localStorage.getItem('address');
// console.log(myAddress);
}

