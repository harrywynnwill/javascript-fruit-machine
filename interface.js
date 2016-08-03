$(document).ready(function(){
  var bank = new Bank();
  var rules = new Rules();
  var fruity = new FruitMachine(bank, rules);

  fruity.spinTheWheels();

  $('#credits').text(fruity.showBalance());
  // $('#slot-two').text(fruity.playerTurn[1]);
  // $('#slot-three').text(fruity.playerTurn[2]);
  // $('#slot-four').text(fruity.playerTurn[3]);
  var slotOneOutput = fruity.playerTurn[0];
  var slotTwoOutput = fruity.playerTurn[1];
  var slotThreeOutput = fruity.playerTurn[2];
  var slotFourOutput = fruity.playerTurn[3];

  console.log(slotOneOutput);

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
                  var slot = slotOneOutput,
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
                  var slot = slotTwoOutput,
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
      function spinThree(count) {
          $('#slot-three').stop().animate({
              top: -800
          }, 2000, 'linear', function () {
              if (count == 0) {
                  var slot = slotThreeOutput,
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
                  spinThree(count - 1)
              };
          });
      }
      function spinFour(count) {
          $('#slot-four').stop().animate({
              top: -800
          }, 2000, 'linear', function () {
              if (count == 0) {
                  var slot = slotFourOutput,
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
                  spinFour(count - 1)
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
          $('#slot-three').css({
              top: 0
          })
          $('#slot-four').css({
            top: 0
          })
          fruity.insertCoin(1);
          spinOne(1);
          spinTwo(1);
          spinThree(1);
          spinFour(1);
          console.log(fruity.playerTurn)
          console.log(fruity.showBalance())
          fruity.resultOfSpin(fruity.playerTurn)
      });

      $('#moveTo').click(function () {
          moveTo($('#pos').val());
      });





});
