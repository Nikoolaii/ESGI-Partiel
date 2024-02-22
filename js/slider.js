let nbImg = 6;

$(document).ready(function () {
  let img = $('.slider img');

  // Fonction pour passer à l'image précédente et suivante
  function sliderPrevious() {
    var current = img.attr('src').split('/').pop().split('.')[0];
    if (current == 1) {
      img.attr('src', 'images/' + nbImg + '.jpg');
      $('.slider-caption').text('Image 1');
    } else {
      img.attr('src', 'images/' + (parseInt(current) - 1) + '.jpg');
      $('.slider-caption').text('Image ' + (parseInt(current) - 1));

    }
  }
  function sliderNext() {
    var current = img.attr('src').split('/').pop().split('.')[0];
    if (current == nbImg) {
      img.attr('src', 'images/1.jpg');
      $('.slider-caption').text('Image 1');
    } else {
      img.attr('src', 'images/' + (parseInt(current) + 1) + '.jpg');
      $('.slider-caption').text('Image ' + (parseInt(current) + 1));

    }
  }

  // Gestion des événements
  $('#toolbar-toggle').on('click', function () {
    $('#toolbar').toggleClass('hidden');
    $('#toolbar').toggleClass('toolbar');
  });

  $('.slider-previous').on('click', function () {
    sliderPrevious();
  });

  $('.slider-next').on('click', function () {
    sliderNext();
  });

  var interval; 
  $('.slider-toggle').on('click', function () {
    if ($(".slider-toggle i").hasClass('fa-play')) {
      $('.slider-toggle i').removeClass('fa-play').addClass('fa-pause');
      interval = setInterval(function () {
        sliderNext();
      }, 1000);
    } else if ($(".slider-toggle i").hasClass('fa-pause')) {
      $('.slider-toggle i').removeClass('fa-pause').addClass('fa-play');
      clearInterval(interval);
    }
  });

  $(document).on('keydown', function(e) {
    if (e.keyCode === 37) {
      sliderPrevious();
    } else if (e.keyCode === 39) {
      sliderNext();
    }
  });
})

