

     //// Jquery
 $(document).ready(()=>{
    
     $('.menuhover').on('mouseenter', ()=>{ 
        $('.menu-drop').fadeIn('slow');
        })

    $('.menu-drop').on('mouseleave', ()=>{
        $('.menu-drop').hide();
    })  
 



});
   
    /// not using the hide on mouseleave because I added a toggle with if/else 
    /*$('.burger-dropdown').on('mouseleave', ()=>{
        $('.burger-dropdown').hide();
    })*/     



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
// document.querySelector('.anchLi').addEventListener('mouseenter', () => {
//     document.getElementById('a').style.color='white';
// })


/// shoppin  cart
const cartBox = document.querySelector('.cart-box');
const Pep = document.querySelector('.pepperoni');
const Che = document.querySelector('.cheese');
const Bas = document.querySelector('.basil');
const Thi = document.querySelector('.thick');
 Pep.addEventListener('click', addCart);
Che.addEventListener('click', addCart);
Bas.addEventListener('click', addCart);
Thi.addEventListener('click', addCart);


function addCart(e){
     //e.preventDefault();

const cartBox = document.querySelector('.cart-box');
const Pep = document.querySelector('.pepperoni');
const Che = document.querySelector('.cheese');
const Bas = document.querySelector('.basil');
const Thi = document.querySelector('.thick');

cartBox.style.display='block';
                                 
        ///Prices
const Pepperoni = 8.99;
const Cheese = 6.99;
const Basil = 7.99;
const ThickCrust = 9.99;
                    
        /// Landings 
const pepLanding = document.querySelector('.pepLanding');
const cheLanding = document.querySelector('.cheLanding');
const basLanding = document.querySelector('.basLanding');
const thiLanding = document.querySelector('.thiLanding');


        // Send prices to landings
if(e.target === Pep ){
 pepLanding.innerHTML=Pepperoni;
} else if(e.target === Che){
    cheLanding.innerHTML = Cheese;
}else if(e.target=== Bas){
    basLanding.innerHTML=Basil;
}else if(e.target === Thi){
    thiLanding.innerHTML=ThickCrust;
}






}
  //// Xout of cart using a font Awesome icon
document.querySelector('.fa-times').addEventListener('click', xout);

function xout(){
   document.querySelector('.cart-box').style.display='none';
}

// total functionality

const totalBtn = document.querySelector('.totalBtn');
totalBtn.addEventListener('click', getTotal);

function getTotal(e){
    const pepLanding = document.querySelector('.pepLanding').innerHTML;
const cheLanding = document.querySelector('.cheLanding').innerHTML;
const basLanding = document.querySelector('.basLanding').innerHTML;
const thiLanding = document.querySelector('.thiLanding').innerHTML;

     // parseFloat landings to convert from a sting into a number
    const a = parseFloat(pepLanding);
    const b = parseFloat(cheLanding)
    const c = parseFloat(basLanding)
    const d = parseFloat(thiLanding)

    const totalLanding = document.querySelector('.totalLanding');
    totalLanding.innerHTML=a+b+c+d;

            /// Logic to  add up items so no NAN error shows up
    if(a && !b && !c && !d){
    totalLanding.innerHTML=a;
}
}