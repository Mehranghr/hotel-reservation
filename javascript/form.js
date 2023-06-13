function myF() {
    let f_name= document.forms["myForm"]["fName"].value;
    if (f_name ==("") || f_name>=parseInt(0) || f_name < parseInt(0)) {
        alert("Firstname must be filled out with Alphabets");
        return false;
     }

    let l_name=document.forms["myForm"]["lName"].value;
    if(l_name ==("") || l_name>=parseInt(0) || l_name < parseInt(0)) {
        alert("Lastname must be filled out with Alphabets");
        return false;
     }

    let idNum = document.forms["myForm"]["id"].value;
    if(idNum == ("") || typeof idNum === "string"){
        alert("IDnumber must be filled out with numbers");
        return false;
     }
 }