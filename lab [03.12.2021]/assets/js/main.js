let tabNavigationItem = document.querySelectorAll(".tab-naviagtion__item"),
  tabMenuContentItem = document.querySelectorAll(".tab-menu-content__item");

for (let i = 0; i < tabNavigationItem.length; i++) {
  tabNavigationItem[i].addEventListener("click", () => {
      let getDataColor = tabMenuContentItem[i].dataset.colorValue;
      console.log(getDataColor);
    classesRemover(tabMenuContentItem,"active");
    tabMenuContentItem[i].classList.add("active");
    tabMenuContentItem[i].style.backgroundColor = `${getDataColor}`;
  });
}

function classesRemover(elements, className) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
}