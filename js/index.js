


//.eq(0)  equal(index)
//$('h1').eq(0).css('backgroundColor','blue')

//$('section').find('.stop').css('backgroundColor','red')

//--------------------

//Show Clicked Image
/*
$('.selImage').click(function(){
   let x=$(this).attr('src')
   console.log(x)
   $('.toShow').attr('src',$(this).attr('src'))
})
*/

//$('h1').eq(0).css('backgroundColor','blue')
$('.card').append('<div class="back"></div>')

let clickSequence = 'first'
let firstImg = ''
let secondImg = ''
let firstIndex = 0
let secondIndex = 0

$('.container').on("click", ".card", function (e) {
   if (clickSequence == 'first') {

      firstIndex = $('.card').index($(this));
      firstImg = $(this).find('img').attr('src')
      console.log('first click ', firstIndex, '- img', firstImg)
      clickSequence = 'second';

      this.classList.add('flipped');
      //console.log('Card Clicked');

   } else if (clickSequence == 'second') {

      secondIndex = $(".card").index($(this))
      secondImg = $(this).find('img').attr('src')
      console.log('secondclick ', secondIndex, '-', secondImg)
      clickSequence = 'first'

      this.classList.add('flipped');
      //console.log('Card Clicked');
      if (firstIndex != secondIndex && firstImg == secondImg) {
         console.log(firstImg, 'to be deleted');

         setTimeout(() => {
            $('.card').eq(firstIndex).fadeOut(50);
            $('.card').eq(secondIndex).fadeOut(50);
         },1000)


      } else {

         setTimeout(() => {
            console.log('flipped Back');
            //console.log($('.card').eq(firstIndex), '/', $('.card').eq(secondIndex));

            $('.card').eq(firstIndex).removeClass('flipped');
            console.log('First flipped Back');

            $('.card').eq(secondIndex).removeClass('flipped');
            console.log('Second flipped Back');
         }, 2000);
      }
   }


});









