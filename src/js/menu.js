// ;(() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   //const mobileMenu = document.querySelector('.menu-container');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });

   

  
// })();


(() => {
  const refs = {
         menuBtnRef:document.querySelector('[data-menu-button]'),
   mobileMenuRef:document.querySelector('[data-menu]'),

     mobileMenu:document.querySelector('.menu-container')
    };

  refs.menuBtnRef.addEventListener('click', toggleModal);
   
    refs.mobileMenu.addEventListener('click', closeModal);

  function toggleModal() {
    
      
      refs.mobileMenuRef.classList.toggle('is-open');
      refs.menuBtnRef.classList.toggle('is-open');
    }
    function closeModal() {
        
      refs.mobileMenuRef.classList.toggle('is-open');
      refs.menuBtnRef.classList.toggle('is-open');
    }
})();