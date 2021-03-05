// Changing the class name of any dom elements
function changeClass(domElement, attrName, newClass) {
  this.element = document.querySelectorAll(domElement);
  for (let i = 0; i < this.element.length; i++) {
    this.attr = this.element[i].setAttribute(attrName, newClass);
  }
}

//Get datasets from dom elements
function getDatasets(domElement, dataSetName) {
  this.element = document.querySelectorAll(domElement);
  for (let i = 0; i < this.element.length; i++) {
    this.attr = this.element[i].getAttribute(dataSetName);
    return this.attr;
  }
}

//Inject new dom element
function injectElement(DOMElement, elementName) {
  this.createElement = document.createElement(elementName);
  this.element = document.querySelectorAll(DOMElement);
  for (let i = 0; i < this.element.length; i++) {
    this.attr = this.element[i].appendChild(this.createElement);
  }
}

// Make both ajax and get request
function getRequest(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    return this;
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
  };
  xhttp.open('GET', link, true);
  xhttp.send();
}

function postRequest(link, postData) {
  this.string = '';
  for (const j in data) {
    console.log();
    this.string += j + '=' + data[j] + '&';
  }
  console.log(this.string);
  this.post_data = this.string;
  this.xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('demo').innerHTML = this.responseText;
    }
  };
  xhttp.open('POST', link, true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(this.post_data);
}

window.onload = () => {
  setTimeout(() => {
    changeClass('h1', 'class', 'alert');
    getDatasets('.data-sets', 'data-color');
    injectElement('.data-set-values', 'p');
    getRequest('/');
    data = {
      name: 'kaushal',
      age: 24,
    };
    postRequest('/', data);
  }, 500);
};
