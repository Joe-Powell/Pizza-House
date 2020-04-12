     //// Jquery
     $(document).ready(()=>{
    
        $('.menuhover').on('mouseenter', ()=>{ 
           $('.menu-drop').fadeIn('slow');
           })
   
       $('.menu-drop').on('mouseleave', ()=>{
           $('.menu-drop').hide();
       })  
    
   
   
   
   });
