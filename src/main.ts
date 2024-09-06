import gsap from "gsap";
import CloseIcon from "/images/icon-close.svg";
import MenuIcon from "/images/icon-hamburger.svg";

const menuOpenBtn = document.getElementById("menu-open-btn")!;
const menuCloseBtn = document.getElementById(
    "menu-close-btn"
)! as HTMLImageElement;
const menu = document.getElementById("menu")!;

menu.addEventListener("click", (e) => e.stopPropagation());
menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

function openMenu() {
    gsap.to(menu, { height: "100vh", duration: 0.5, ease: "power2.out" });
}
function closeMenu() {
    menuCloseBtn.src = MenuIcon
    gsap.to(menu, {
        height: "0",
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
            menuCloseBtn.src = CloseIcon
        },
    });
}
