var form = document.getElementById('form')
form.addEventListener("submit", function generate(event){
    event.preventDefault()
    let dd = document.getElementById("day").value;
    let mm = document.getElementById("month").value;
    let yy = document.getElementById("year").value;
    let cc = document.getElementById("century").value;
    let gender = document.getElementById("gender").value;
    let result = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (dd <= 0 || dd > 31) {
        alert("invalid date");
    }
    else if (mm <= 0 || mm > 12) {
        alert("invalid month");
    }
    else if (Math.round(result) == 0 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[0]);
    }
    else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[1]);
    }
    else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[2]);
    }
    else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[3]);
    }
    else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[4]);
    }
    else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[5]);
    }
    else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === "male"){
        document.getElementById("generate").innerHTML = ("Your Akan Name is " + maleNames[6]);
    }

    else if (Math.round(result) == 0 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[0]);
    }
    else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[1]);
    }
    else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[2]);
    }
    else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[3]);
    }
    else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[4]);
    }
    else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[5]);
    }
    else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === "female"){
    document.getElementById("generate").innerHTML = ("Your Akan Name is " + femaleNames[6]);
    }
    else{
        alert("Please fill out evey field");
    }

}
)