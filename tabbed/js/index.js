const selector = document.querySelector('.navigation__selector');

const navigation = document.querySelector('.navigation');

const navigationItems = document.querySelectorAll('.navigation__item');

// Init selector
selector.style.left = navigationItems[0].offsetLeft + 'px';
selector.style.width = navigationItems[0].offsetWidth + 'px';

navigationItems.forEach(item => {
  item.addEventListener('click', onClick);
});


//
function onClick(event) {
  event.preventDefault();
  selector.style.width = this.offsetWidth + 'px';
  selector.style.left = this.offsetLeft + 'px';
  
  updateActiveClass(this);
}

function updateActiveClass(item) {
  navigationItems.forEach(item => {
    item.classList.remove('active');
  });
  
  item.classList.add('active');
}