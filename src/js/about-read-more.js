  (() => {
      const refs = {
        moreText: document.querySelector('[more-text]'),
        btnMore:document.querySelector('[about-button-more]'),
        btnLess:document.querySelector('[about-button-less]')
      };
      
  
      refs.btnMore.addEventListener('click', toggleModal);
      refs.btnLess.addEventListener('click', toggleModal);
      
     

       function toggleModal() {
            refs.moreText.classList.toggle('is-hidden');
            refs.btnLess.classList.toggle('is-hidden');
            refs.btnMore.classList.toggle('is-hidden');
    }
     
  })();




