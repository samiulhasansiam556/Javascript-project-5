var allbtn = document.getElementById('allbtn');
var carbtn = document.getElementById('carbtn');
var busbtn = document.getElementById('busbtn');
var bikebtn = document.getElementById('bikebtn');

var elements = document.querySelectorAll('.div1');

allbtn.addEventListener('click', () => {
  showAllElements();
});

carbtn.addEventListener('click', () => {
  filterElements('car');
});

busbtn.addEventListener('click', () => {
  filterElements('bus');
});

bikebtn.addEventListener('click', () => {
  filterElements('bike');
});

function showAllElements() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('active');
  }
}

function filterElements(type) {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].dataset.type === type) {
      elements[i].classList.add('active');
    } else {
      elements[i].classList.remove('active');
    }
  }
}
