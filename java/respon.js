const menuIcon = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("active");
        });