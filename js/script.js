const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const menuItems = menu.querySelectorAll("a");

// tabs menu event listener

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// hamburger button event listener

btn.addEventListener("click", navToggle);

// Close menu when clicking any menu item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    btn.classList.remove("open");
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  });
});

function onTabClick(e) {
  // deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0",
    );
  });

  //hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // activate a new tab and panel based on target
  e.target.classList.add("border-softRed", "border-b-4");

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
