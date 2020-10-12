function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function wire() {
    var ubmitForm = document.getElementsByClassName('container-4');
    for (var i = 0; i < ubmitForm.length; i += 1) {
        ubmitForm[i].style.display = 'block';
    }
}

function continueRequest() {
    submitForm = document.getElementsByClassName('container-4');
    var addresstype = document.getElementsByClassName('classic').value;
    var firstName = document.getElementById("name").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    document.getElementById("demo").innerHTML;
    sessionStorage.setItem("address", addresstype);
    sessionStorage.getItem("address", addresstype);
    sessionStorage.setItem("name", firstName);
    sessionStorage.getItem("name", firstName);
    sessionStorage.setItem("Addres1", address1);
    sessionStorage.getItem("address", addresstype);
    sessionStorage.setItem("Addres2", address1);
    sessionStorage.getItem("address", addresstype);
    
    // for (var i = 0; i < submitForm.length; i += 1) {
       
    //     alert("Your Request has been submitted");
    // }
}