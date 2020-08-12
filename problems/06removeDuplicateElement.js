// Determine the duplicate elements from an array
var name = ["Ovi","Nabil","Avijit","Shanto","Afridi","Ovi","Jim","Avijit",];
var uniqueName = [];
for (var i = 0; i < name.length; i++) {
  var element = name[i];
  var indx = uniqueName.indexOf(element);
  if (indx == -1) {
    uniqueName.push(element);
  }
}
console.log(uniqueName);

