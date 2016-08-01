$(document).ready(function(){
  var bank = new Bank();
  var fruity = new FruitMachine(bank);

  fruity.spinTheWheels();

  // $('#slot-one').text(fruity.playerTurn[0]);
  // $('#slot-two').text(fruity.playerTurn[1]);
  // $('#slot-three').text(fruity.playerTurn[2]);
  // $('#slot-four').text(fruity.playerTurn[3]);

  var slotOne = $('#slot-one>ul:first');
  var slotTwo = $('#slot-two>ul:first');
  var slotThree = $('#slot-three>ul:first');
  var slotFour = $('#slot-four>ul:first');

  var firstItemSlotOne = slotOne.find('li:first');
  var firstItemSlotTwo = slotTwo.find('li:first');
  var firstItemSlotThree = slotThree.find('li:first');
  var firstItemSlotFour = slotFour.find('li:first');

  firstItemSlotOne.clone().appendTo(slotOne);
  firstItemSlotTwo.clone().appendTo(slotTwo);
  firstItemSlotThree.clone().appendTo(slotThree);
  firstItemSlotFour.clone().appendTo(slotFour);

      function moveTo(val) {
          val = -val % 800;
          if (val > 0) val -= 800;
          $('#slot-one').css({
              top: val
          });
          $('#slot-two').css({
              top: val
          });
      }

      function spinOne(count) {
          $('#slot-one').stop().animate({
              top: -800
          }, 2000, 'linear', function () {
              if (count == 0) {
                  var slot = Math.floor(Math.random() * 4),
                      top = -slot * 200,
                      time =  2000 * slot / 4;
                  $(this).css({
                      top: 0
                  }).animate({
                      top: top
                  },time, 'easeOutQuad')
              } else {
                  $(this).css({
                      top: 0
                  })
                  spinOne(count - 1)
              };
          });
      }
      function spinTwo(count) {
          $('#slot-two').stop().animate({
              top: -800
          }, 2000, 'linear', function () {
              if (count == 0) {
                  var slot = 1,
                      top = -slot * 200,
                      time =  2000 * slot / 4;
                  $(this).css({
                      top: 0
                  }).animate({
                      top: top
                  },time, 'easeOutQuad')
              } else {
                  $(this).css({
                      top: 0
                  })
                  spinTwo(count - 1)
              };
          });
      }
      $('#start').click(function () {
          $('#slot-one').css({
              top: 0
          })
          $('#slot-two').css({
            top: 0
          })
          spinTwo(3);
          spinOne(2);
          // spinTwo(2, 2);
      });

      $('#moveTo').click(function () {
          moveTo($('#pos').val());
      });





});
