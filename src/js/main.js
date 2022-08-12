document.addEventListener('DOMContentLoaded', function(){
  const tableSlider = () => {
      const btnPrev = document.querySelector('.btn-prev');
      const btnNext = document.querySelector('.btn-next');
      const tableItems = document.querySelectorAll('.table-item');

      let i = 0;

      btnPrev.onclick = () => {
           tableItems[i].className = 'table-item';
           i--;

           if (i < 0) i = tableItems.length-1;

           tableItems[i].classList.add('-curr-item');
      }

      btnNext.onclick = () => {
           tableItems[i].className = 'table-item';
           i++;

           if (i >= tableItems.length) i = 0;

           tableItems[i].classList.add('-curr-item');
      }
  }

  tableSlider();
});
