document.querySelector('#mobile_menu_toggle').addEventListener('click',function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    document.querySelector(".top__hamburger").classList.toggle('active');
    document.body.classList.toggle('hidden');
})
