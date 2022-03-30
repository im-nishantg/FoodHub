const btn = document.querySelector(".btn");

btn.addEventListener("click", function()
{
    const links = document.querySelector(".links");

    links.classList.toggle("show-links");
})