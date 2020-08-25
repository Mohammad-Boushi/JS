   
     $('p span').css('color','orange');
     $('ul#list li:first').css('color','red');
     $('ul#list li:nth-child(3n)').css('background-color','rgb(145, 95, 192)');

     $('input').focus(function(){
                    //alert('Focus')
                    $(this).css('background','pink')
                });
    
                $('input').blur(function(){
                    //alert('Focus')
                    $(this).css('background','white')
                });
    
                $('input').keyup(function(){
                 console.log('keyup')
                });
                
                $('select#gender').change(function(e){
                    alert(e.target.value)
                })

     $(document).ready(function(){ 



        $('#btnFadeOut').click(function(){
            $('#box').fadeOut(3000,function(){
                $('#btnFadeOut').text('Its Goen')
            })
        });

        $('#btnFadeIn').click(function(){
            $('#box').fadeIn (2000)
        });

        $('#btnFadeTog').click(function(){
            $('#box').fadeToggle(1000)
                
            
        });

        $('#btnSlideDown').click(function(){
            $('#box').slideDown (2000)
        });

        $('#btnSlideUp').click(function(){
            $('#box').slideUp (2000)
        });

        $('#btnSlideTog').click(function(){
            $('#box').slideToggle (2000)
        });

        $('#btnStop').click(function(){
            $('#box').stop (2000)
        });


        $('#moveRight').click(function(){
            $('#box2').animate({
                left: 500,
                height: '300px',
                width: '300px',
                opacity: '0.5'
            });
        })

        $('#moveLeft').click(function(){
            $('#box2').animate({
                left: 0,
                height: '100px',
                width: '100px',
                opacity: '1'
            });
        })


        $('#moveAround').click(function(){
           var box = $('#box2');
           box.animate({
               left: 500
           });
           box.animate({
               top: 500
           });
           box.animate({
               left: 0,
               top: 500
           });
           box.animate({
               left: 0,
               top:0
           });
        });









        
  }); 