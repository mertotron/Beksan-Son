
window.addEventListener('load', () => {

  

  if (window.innerWidth <= 800){
    let mrt = document.getElementById('grid1');
    mrt.classList.remove('grid-div'); 
    mrt.classList.add('grid-div-row');
    console.log('tamamlandı', mrt);
    //----------------------------------------------//
    let mrt1 = document.getElementById('dısdiv');
    mrt1.classList.remove('grid-div'); 
    mrt1.classList.add('grid-div-row');
    console.log('tamamlandı', mrt1);
    let mrt2 = document.getElementById('innerdiv');
    mrt2.classList.add("ORDER")
    //----------------------------------------------//
    let mrt3 = document.getElementById('grid10');
    mrt3.classList.remove('grid-div'); 
    mrt3.classList.add('grid-div-row');
    console.log('tamamlandı', mrt3);

  }

  
});


