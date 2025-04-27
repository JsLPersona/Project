document.addEventListener("DOMContentLoaded", function() {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach(link => {
        link.addEventListener("click", function() {
            const tabname = this.getAttribute("data-tab");

            tablinks.forEach(item => item.classList.remove("active-link"));
            tabcontents.forEach(item => item.classList.remove("active-tab"));

            this.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        });
    });
});
