$(document).ready(()=>{
    
    $('.menuhover').on('mouseenter', ()=>{ 
       $('.menu-drop').fadeIn('slow');
       })

   $('.menu-drop').on('mouseleave', ()=>{
       $('.menu-drop').hide();
   })  
});



  ///// Vanilla Javascript hits hamburger menu
  const pizzaPic = document.querySelector('.pizza');
  const hamburgerMenu = document.querySelector('.fa-bars');
   
  hamburgerMenu.addEventListener('click',() =>{
      if( document.querySelector('.burger-dropdown').style.display =='block'){
          document.querySelector('.burger-dropdown').style.display ='none';
      }else{
          document.querySelector('.burger-dropdown').style.display='block';
      }
     
      document.querySelector('.burger-dropdown').style.top='65px'; 
  })

  //// click menu inside burger-dropdown   // == important
 document.querySelector('.menudropburger').addEventListener('click', () =>{
                                              
    if (document.querySelector('.menuformenu').style.display ==='block'){
        document.querySelector('.menuformenu').style.display = 'none'; 
     }else{
        document.querySelector('.menuformenu').style.display = 'block';
     }



})

// select drink
let select = document.getElementById('select');
let selectQuant = document.getElementById('selectQuant');
const landing = document.getElementById('landing');
const img = document.getElementById('img');
const anch = document.getElementById('anch');
const quant = document.getElementById('quant');

function putPic(){
    
   img.src=select.value;
   quant.style.display='block';
   selectQuant.value=1;
   const cart = document.querySelector('.fa-cart-plus');
   cart.style.display='none';


}

// make the cart Icon pop up on click
function addCart(){
    const cart = document.querySelector('.fa-cart-plus');
    cart.style.display='inline-block';

        // toggle color on click
    if (cart.style.background =='yellow'){
        cart.style.background= 'red'; 
     }else{
        cart.style.background ='yellow' ;
     }

}

