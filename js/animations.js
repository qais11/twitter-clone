$(document).ready(function(){
  console.log('dshkjsdh')
  $('.tweet-compose').click(function(){
      $(this).css('height','50px' )
  })
  $('.tweet-compose').click(function(){
    $('#tweet-controls').show('slow')
  })

  $('.tweet-compose').on('keyup keydown', function(){
    var charCount = 140 - $(this).val().length
    var $charCount = $('#char-count');
     $charCount.text(charCount--);
    if (charCount < 10) {
      $charCount.css('color','red');

    } else if (charCount > 10) {
      $charCount.css('color','#000');
    }
      if (charCount < 0 ){
        $('#tweet-submit').attr('disabled','disabled')
    }
      else if(charCount === 0){
        $('#tweet-submit').removeAttr('disabled','disabled')
    }
  })

  $('.tweet-compose').keyup(function(){

  })

  $('.button').click(function(){
    $('.text-tweet').prepend('.content')
  })

  $('.button').click(function(){
    var message = $('.tweet-compose').val()
  var newTweet = $('.tweet:first-child').clone();
    $('.tweet-text',newTweet).text(message)
    $('.fullname' , newTweet).text('Qais Malik')
    $('.username', newTweet).text('@qais')
    $('.avatar' , newTweet).prop( 'src','img/alagoon.jpg')
    $('.retweet img:first-child', newTweet).prop('src', 'img/alagoon.jpg')
    $('.tweet-compose', newTweet).prop('placeholder', 'Reply to @qais')


  newTweet.prependTo('#stream');

})
    $('.content').hover(function(){
      $(this).find('.tweet-actions ul ').show('fast');

    })
    $('.content').click(function(){
      $(this).find('.stats').show('fast');
      $(this).find('.reply').show('fast');
    })


  });
