const openBtn = document.getElementById('btn-open');
const closeBtn = document.getElementById('btn-close');
const modalMobileInfor = document.getElementById('modal-mobile-infor');
const tagBody = document.body;

openBtn.addEventListener('click', () => {
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  tagBody.classList.add('mobile-nav-active');
});

closeBtn.addEventListener('click', () => {
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  tagBody.classList.remove('mobile-nav-active');
})
