// Q1 Starts here 

// DOM Assighnment by QAMBAR ALI 


var a = document.getElementById('mainDIv');
var createH1 = document.createElement('H');
var heading = document.createTextNode('Displaying ChildNodes of Main-Content');
var addinghead = createH1.appendChild(heading);
a.appendChild(addinghead );
document.write("<br>")
var getContent = document.getElementById('main-content');
var p1 = getContent.childNodes[0];
document.write(p1 + "<br>");
var p2 = getContent.childNodes[1];
document.write(p2 + "<br>");
var p3 = getContent.childNodes[2];
document.write(p3 + "<br>");
var p4 = getContent.childNodes[3];
document.write(p4 + "<br>");
var p5 = getContent.childNodes[4];
document.write(p5 + "<br>" + "<br>");

document.write('Dispalying InnerHtml of Class Render'+ "<br>"+ "<br>")
var gethtml = document.getElementsByClassName('render');
document.write(gethtml[0].innerHTML + "<br>");
document.write(gethtml[1].innerHTML + "<br>");
document.write(gethtml[2].innerHTML + "<br>");
document.write(gethtml[3].innerHTML + "<br>");
document.write(gethtml[4].innerHTML + "<br>");



var firstName = document.getElementById('first-name');
firstName.value = "ALex";
var LastName = document.getElementById('last-name');
LastName.value = "Bank";
var email = document.getElementById('email');
email.value = "alexbank@example.com";
document.write("<br>"+"<br>")

// Q1 End here

// DOM Assighnment by QAMBAR ALI 

// Q2 Starts here


var typeOfFormContent = document.getElementById('form-content');
var getNodeType = typeOfFormContent.nodeType;
document.write("Node type of element having id “form-content” is : "+getNodeType);
document.write('<br>');
var lastNamee = document.getElementById('last-name');
var NTofLastName = lastNamee.nodeType;
document.write("Node type of element having id “last-name” is : "+NTofLastName);
document.write('<br>');
var getChildNode = lastNamee.childNodes[0];
document.write("childNode of element having id “last-name” is : "+getChildNode);
document.write("<br>")
getChildNode = "Ali";
document.write("Last Name after updation is : "+getChildNode);
document.write("<br>");
document.write(getContent.firstChild.innerHTML);
document.write("<br>");
document.write(getContent.lastChild.innerHTML);

document.write("<br>");
document.write('PreviousSibling of Last Name is : '+LastName.previousSibling.innerHTML);

document.write("<br>");
document.write('NextSibling of Last Name is : '+LastName.nextSibling.innerHTML)

document.write("<br>");
document.write('parentnode of element having id “email” is : ' + '<br>' + '<br>' +email.parentNode.innerHTML);

document.write("<br>"+ "<br>");
document.write('node type of element having id “email” is : '+email.nodeType);

// Q2 ENds Here 