function generate() {
    var day = document.getElementById("day").nodeValue;
    var dd = parseInt(day);
    var month = document.getElementById("month").nodeValue;
    var mm = parseInt(month);
    var year = document.getElementById("year").nodeValue;
    var yy = parseInt(year.toString().slice(2, 4));
    var cc = Math.ceil(year/100);
    var result = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked) {
      var gender = "male";
    }
    else{
        var gender = "female";
    }
    if (dd <=0 || dd > 31) {
        alert("invalid date");
    }
    else if (mm <= 0 || mm > 31) {
        alert("invalid month");
    }
    else if (Math.round(result) == 0 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[0]);
    }
    else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[1]);
    }
    else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[2]);
    }
    else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[3]);
    }
    else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[4]);
    }
    else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[5]);
    }
    else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === "male"){
        document.getElementById("final").innerHTML = ("Your Akan Name is " + maleNames[6]);
    }

    else if (Math.round(result) == 0 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[0]);
    }
    else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[1]);
    }
    else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[2]);
    }
    else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[3]);
    }
    else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[4]);
    }
    else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[5]);
    }
    else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === "female"){
    document.getElementById("final").innerHTML = ("Your Akan Name is " + femaleNames[6]);
    }
    else{
        alert("Please fill out evey field");
    }

}