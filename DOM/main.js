// Dom manipulation
// Target the HTML elements
/*
########### Basic Methods####################
var element;
element = document;
element = document.all;
element = document.all[6];
element = document.title;
element = document.body;
element = document.links; //For showing how many anchor or links are available
element = document.links[0]; 
element = document.images; 
element = document.forms;
element = document.doctype;
element = document.URL;
element = document.domain;
element = document.baseURI;
console.log(element);

################# Target ID, class and tag ###################
element = document.getElementById('hed');
element = document.getElementsByClassName('text');
element = document.getElementsByTagName('p');
element = document.getElementsByTagName('p')[0];
console.log(element);
*/

/*
########### Set value and Get value#############
What we can get with DOM?
1) HTML
2) Text
3) Attribute
DOM Get Methods
----------------
A. innerText
B. innerHTML
C. getAttribute
D. getAttributeNode
E. Attribute
*/
// var text = document.getElementById('text').innerText;
// console.log(text);
// var h1Text = document.getElementById("newText").innerHTML = "<h1>Monmoy</h1>";
// console.log(h1Text);

// ########### Query Selector #############
// var text2 = document.querySelector('#text2').innerHTML="This is a simple text";
// console.log(text2);
// var text3 = document.querySelectorAll('.list');
// console.log(text3);
// var text4 = document.querySelectorAll('.list').innerHTML = '<p>Pokemon</p>'
// console.log(text4);

/*
    Style using DOM
*/
// var colorChange = document.querySelector('#head').style.color="red";
// console.log(colorChange);
// document.querySelector("#head").style.backgroundColor="black";

// var newClassName = document.querySelector("#head").className='abc';
// console.log(newClassName);

/*
    Add eventListener
*/
// var clickEvent = document.querySelector('#clickMe').onclick = f1;
// function f1(){
//     document.getElementById('clickMe').style.color="orange";
// }
// document.getElementById('login').onmouseleave=f2;
// function f2(){
//     document.getElementById('login').style.color="green";
// }

document.getElementById("login").addEventListener("click", loginStyle);
document.getElementById("login").addEventListener("dblclick", loginStyle2);
function loginStyle() {
  document.getElementById("login").style.color = "tomato";
}

function loginStyle2() {
  document.getElementById("login").style.border = "1px solid red";
  // document.getElementById("login").style.borderRadius='15px';
  this.style.borderRadius = "15px";
}
