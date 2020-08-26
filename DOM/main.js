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
########### Set value and Get value############//#
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
var h1Text;
// h1Text = document.getElementById('newText').innerText;
h1Text = document.getElementById('newText').innerHTML;
console.log(h1Text);
