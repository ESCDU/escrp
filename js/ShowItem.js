async function showItem() {
    collapseAll();
    var response = await fetch('./json/search.json');
    const jsonData = await response.json();
    const sstring = document.getElementById('searchInput').value;
    var matchedElement = jsonData.find(function(element) {
        return element.sstring === sstring;
      });

    if (matchedElement) {
      const subitem_id = matchedElement.id;
      document.getElementById(subitem_id).parentElement.parentElement.parentElement.setAttribute("class", "accordion-collapse collapse show");
      document.getElementById(subitem_id).scrollIntoView({
        block: 'center',
        inline: 'center'
      });
    } else {
      console.log("Error from showitem");
    }
}

function collapseAll() {
    var collapseElements = document.querySelectorAll('.accordion-collapse');
    collapseElements.forEach(function(collapseEl) {
      if (collapseEl.classList.contains('show')) {
        collapseEl.classList.remove('show');
      }
    });
}
