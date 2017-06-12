// Function below checks the input fields
function checkField(field1, field2, field3) {
  this.f1 = field1;
  this.f2 = field2;
  this.f3 = field3;

  var x = document.getElementById(f1).value;
  var y = document.getElementById(f2);

 if(x == "") {
   y.innerHTML = "Please enter the " + f3 + ".";
   document.getElementById(f2).style.color = "Red";
 }
 else {
   y.innerHTML= "OK";
   document.getElementById(f2).style.color = "Green";
 }

}

// Function below checks checkbox selection
function selectCourse(cs1, cs2, cs3, cs4, cs5) {
  this.c1 = cs1;
  this.c2 = cs2;
  this.c3 = cs3;
  this.c4 = cs4;
  this.c5 = cs5;

  var a = document.getElementById(c1);
  var b = document.getElementById(c2);
  var c = document.getElementById(c3);
  var d = document.getElementById(c4);
  var e = document.getElementById(c5);

  if(!a.checked || !b.checked || !c.checked || !d.checked) {
    e.innerHTML = "Please select a course.";
    document.getElementById(c5).style.color = "Red";
  }
  else {
    e.innerHTML = "Good choice!";
    document.getElementById(c5).style.color = "Green";
  }
}


// Function below validates all the fields and inputs
function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zipcode = document.getElementById("zipcode").value;
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var all3 = document.getElementById("all-3");

console.log(html);

  if(fname.length != "" && lname.length != "" && address.length != "" && city.length != "" && state.length != "" && zipcode.length != "" && (html.checked || css.checked || js.checked || all3.checked )) {
    alert("Welcome aboard! Thank you for registering.");

  }
  else{
    alert("Please enter all the required fields ");
  }
}
