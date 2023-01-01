let swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
})

// Working with Tabs
var control = document.querySelectorAll('.control')
var sections = document.querySelectorAll('.section')

control.forEach(function (el) {
  el.addEventListener('click', openSections)
})

function openSections(el) {
  var btnTarget = el.currentTarget
  var section = btnTarget.dataset.section

  sections.forEach(function (el) {
    el.classList.remove('active-btn')
  })

  control.forEach(function (el) {
    el.classList.remove('active')
  })

  document.querySelector('#' + section).classList.add('active-btn')

  btnTarget.classList.add('active')

}
// defaultOpen button
document.getElementById('defaultOpen').click()

//share btn
