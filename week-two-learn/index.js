/* wait for the page load before running the code inside this function
*  note that you can have many of such functions 
*/

$(document).ready(function(){
    $('#DownArrow').on('click',function(){
        let Thirty=[9,4,6,11];
        let day = parseInt($('#day').val());
       let month= parseInt($('#month').val());
       let year=parseInt($('#year').val());

       // Handle Month Validity
      /* if (isNaN(month)||isNaN(day)||isNaN(year)) {
          alert('No field Should left Empty');
          return;
       }*/
       if ((month<1||month>12)) {

                $('#main-1>span:nth-of-type(2)>i').css({
                    visibility:'visible'
                });
       }
       else{
                $('#main-1>span:nth-of-type(2)>i').css({
                    visibility:'hidden'
                });             
       }

       //Handle Day validity
       if ((day<1||day>31)||(Thirty.includes(month)&&day>30)||(month===2&&day>29)) {
            $('#main-1>span:nth-of-type(1)>i').css({
                visibility:'visible'
            });
       }
       else{
            $('#main-1>span:nth-of-type(1)>i').css({
                visibility:'hidden'
            });        
       }
        //Handle Day validity
       if (year>Date().substring(11,15)&&year<1) {
            $('#main-1>span:nth-of-type(1)>i').css({
                visibility:'visible'
            });  
       } else {
            $('#main-1>span:nth-of-type(3)>i').css({
                visibility:'hidden'
            });
            $('#Y1').val()='20';    
       }
      
        $('#main-3>ul>li>input').css({
            'background-color':'red',
             width: '30px',
             height:'25px'
        });
    });
});