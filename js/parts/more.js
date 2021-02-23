function more() {

  let blockMore = document.querySelector('.overlay'),
    closeCross = document.querySelector('.popup-close'),
    moreBtn = document.querySelector('.more');

  moreBtn.addEventListener('click', () => {
    blockMore.classList.remove('hide');
    blockMore.classList.add('show');
  });

  closeCross.addEventListener('click', () => {
    blockMore.classList.remove('show');
    blockMore.classList.add('hide');
  });

}
module.exports = more;
