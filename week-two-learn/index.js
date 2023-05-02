/* wait for the page load before running the code inside this function
*  note that you can have many of such functions 
*/

$(document).ready(function(){

    $(DownArrow).on('click',function(){
        let day = $('#day').val();
       let month= $('#month').val();
       let year=$('#year').val();
        $('#main-3>ul>li>input').css({
            'background-color':'red',
             width: '7vw',
             height:'7vh'
        });
    });
});