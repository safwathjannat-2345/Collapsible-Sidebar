
const sidebar=document.getElementById('Side-Bar');
const togglebutton=document.getElementById('Toggle-Button');
const bodycontent =document.querySelector(".content");
togglebutton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    bodycontent.classList.toggle('collapsed');
});