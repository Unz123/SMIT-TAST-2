//   QUESTION NO 1:

 function addNumber(num) {
    return function(x) {
      return x + num;
    }
  }
  const addFive = addNumber(5);
  console.log(addFive(10)); // Output: 15
  console.log(addFive(20)); // Output: 25
  console.log(addFive(30)); // Output: 35
  const addTen = addNumber(10);
  console.log(addTen(10)); // Output: 20
  console.log(addTen(20)); // Output: 30
  console.log(addTen(30)); // Output: 40

//   QUESTION NO 2:

function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    }
    const head = array[0];
    const tail = array.slice(1);   
    if (head === value) {
      return true;
    } else {
      return searchArray(tail, value);
    }
  }  
const array = [1, 2, 3, 4, 5];
console.log(searchArray(array, 3)); 
console.log(searchArray(array, 6)); 

// QUESTION NO 3:
function addParagraph(text) {
  // create a new paragraph element
  var para = document.createElement("p");
  // create a text node with the input string and append it to the paragraph element
  var node = document.createTextNode(text);
  para.appendChild(node);
  // append the paragraph element to the body of the HTML document
  document.body.appendChild(para);
}
addParagraph("This is a new paragraph!");



// QUESTION NO 4:
        const list = document.getElementById("myList");
        const listItem = document.createElement("li");
        const textInput = document.getElementById("myInput");
        const text = textInput.value;   
        const textNode = document.createTextNode(text);
        listItem.appendChild(textNode);
        list.appendChild(listItem);
        textInput.value = "1";

// QUESTION NO 5:
function changeBackgroundColor(element, color) {
  // set the background color of the element to the input color
  element.style.backgroundColor = color;
}
var myDiv = document.getElementById("myDiv");
changeBackgroundColor(myDiv, "red");
         



// QUESTION NO 6:
        function saveObjectToLocalStorage(key, object) {
            localStorage.setItem(key, JSON.stringify(object));
          }
          const myObject = { name: "Ali", age: 20 };
          saveObjectToLocalStorage("myKey", myObject);
          const savedObject = JSON.parse(localStorage.getItem("myKey"));
          console.log(savedObject); 

// QUESTION NO 7:
function getObjectFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue);
  }
  const myObject = getObjectFromLocalStorage("myKey");
  console.log(myObject); 

  // QUESTION NO 8:
  function saveObjectToLocalStorage(obj) {
    for (const prop in obj) {
      if (Object.hasOwnProperty.call(obj, prop)) {
        const value = obj[prop];
        localStorage.setItem(prop, JSON.stringify(value));
      }
    } 
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      newObj[key] = value;
    } 
    return newObj;
  }
  const myObject = { name: "Ali", age: 20 };
const retrievedObject = saveObjectToLocalStorage(myObject);
console.log(retrievedObject); 







    






                              







  