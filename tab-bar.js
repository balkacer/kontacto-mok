const tabBar = document.querySelector(".tab-bar");
const tabBarItems = tabBar.querySelectorAll(".tab-bar-btn");
let activeItem = tabBar.querySelector(".active");

tabBarItems.forEach((item) => {
    item.addEventListener("click", () => {
        tabBar.style.removeProperty("--timeOut");
        if (activeItem == item) return;
        if (activeItem) {
            activeItem.classList.remove("active");
        }
        item.classList.add("active");
        activeItem = item;
    });
});