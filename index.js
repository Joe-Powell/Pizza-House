  //// Jquery
$(document).ready(()=>{

    $('.menuhover').on('click', ()=>{ 
        $('.menu-drop').fadeIn('slow');
        })

    $('.menu-drop').on('mouseleave', ()=>{
        $('.menu-drop').hide();
    })  

   
    /// not using the hide on mouseleave because I added a toggle with if/else 
    /*$('.burger-dropdown').on('mouseleave', ()=>{
        $('.burger-dropdown').hide();
    })*/     


})
      ///// Vanilla Javascript hits hamburger menu
const pizzaPic = document.querySelector('.pizza');
const hamburgerMenu = document.querySelector('.fa-bars');
hamburgerMenu.addEventListener('click',() =>{
    if( document.querySelector('.burger-dropdown').style.display =='none'){
        document.querySelector('.burger-dropdown').style.display ='block';
    }else{
        document.querySelector('.burger-dropdown').style.display='none';
    }
   
    document.querySelector('.burger-dropdown').style.top='65px'; 
})

//// click menu inside burger-dropdown
document.querySelector('.menudropburger').addEventListener('click', () =>{
                                                    // == important
    if (document.querySelector('.menuformenu').style.display =='none'){
        document.querySelector('.menuformenu').style.display = 'block'; 
     }else{
        document.querySelector('.menuformenu').style.display = 'none';
     }



})
