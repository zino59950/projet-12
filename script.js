function toggleMenu() {
  var content = document.querySelector(".content");
  content.classList.toggle("show-content");
}

function toggleCollapsible(index) {
    var content = document.querySelectorAll('.content');

    for (var i = 0; i < content.length; i++) {
        if (i === index) {
            content[i].style.maxHeight = content[i].style.maxHeight === '0px' ? content[i].scrollHeight + 'px' : '0';
        } else {
            content[i].style.maxHeight = '0';
        }
    }
}

// Ouvrir les deux collapsibles par défaut
toggleCollapsible(0);
toggleCollapsible(1);