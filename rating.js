document.querySelectorAll('.imno-rating-click').forEach(function(el, index) {
  renderRating(el);
  
  var stars = el.children;
 
  for (var i = 0; i < stars.length; i++) {
    stars[i].onclick = onClickRating;
  }
});

document.querySelectorAll('.imno-rating').forEach(function(el, index) {
  var max = el.getAttribute('max');
  var value = el.getAttribute('value');

  for (var i = 0; i < max; i++) {
    var star = document.createElement('i');
    star.classList.add('zmdi', 'zmdi-star', 'zmdi-hc-3x', i);
    
    if (i < value) star.style.color = 'tomato';

    el.appendChild(star);
  }
});

function onClickRating(stars) {
  var parent = stars.target.parentElement;
  var child = parent.children;
  var maxChild = parent.getAttribute('max');
  var elIndex = stars.target.classList[3];

  for (var i = 0; i < maxChild; i++) {
    child[i].style.color = '#828282';
  }
  
  for (var s = 0; s <= elIndex; s++) {
    child[s].style.color = 'tomato';
  }

  parent.setAttribute('rate', elIndex);
}

function renderRating(el) {
  var max = el.getAttribute('max');
  var value = el.getAttribute('value');

  for (var i = 0; i < max; i++) {
    var star = document.createElement('i');
    var color;

    if (i !== (max - 1)) {
      star.classList.add('zmdi', 'zmdi-star', 'zmdi-2x', i);
    } else {

      if (value.indexOf('.') === -1) {
        star.classList.add('zmdi', 'zmdi-star', 'zmdi-2x', i);
      } else {
        star.classList.add('zmdi', 'zmdi-star-half', 'zmdi-2x', i);
      }
    }

    if (i < value) color = '#D61D58';
    else color = 'lightgrey';

    star.style.color = color;

    star.classList.add('zmdi', 'zmdi-star', 'zmdi-hc-3x', i);
    star.onclick = onClickRating;

    if (i < value) star.style.color = 'tomato';

    el.appendChild(star);
  }
}