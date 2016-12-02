$(function() {
  var $category = $('.browse__category');
  var currentID; // stores current selection

  var heightDefault = 250;
  var heightPeek = '70vh';
  var heightFull = '100vh';

  var intro = setTimeout(startMoodica, 1000); // this should cancel if mouse input is registered.

  function startMoodica() {
    $category.first().addClass('browse__category--full');
    currentID = $category.first().index();
  }

  $('.slider').unslider({
    infinite: true
  });

  $('.unslider-arrow').on('click', function(e) {
    e.stopPropagation();
  });

  // $('html, body').scrollTop(0);

  // $category.each(function(index) {
  //   $(this).data('id', index);
  //   console.log($(this).data('id'));
  // });

  $category.hover(function() {
    $(this).addClass('browse__category--peek');
    // $(this).stop().velocity({
    //   height: heightPeek,
    //   duration: 350,
    //   easing: 'easeOutQuad'
    // });
  }, function() {
    $(this).removeClass('browse__category--peek');
    // $(this).stop().velocity({
    //   height: heightDefault,
    //   duration: 350,
    //   easing: 'easeInQuad'
    // });
  });

  $category.on('click', function(e) {
    var $this = $(this);
    console.log($this);
    var offset = ($(this).index()) * heightDefault;
    // console.log(offset);

    $category.removeClass('browse__category--full');

    // $('html, body').animate({
    //   scrollTop: offset
    // }, {
    //   duration: 500,
    //   easing: 'easeOutQuad',
    //   complete: function() {
    //     $this.addClass('browse__category--full');
    //   }
    // });

    $('html, body').stop().velocity("scroll", {
        duration: 400,
        offset: offset,
        easing: 'easeOutQuad',
        complete: function() {
          $this.addClass('browse__category--full');
        }
    });

    currentID = $this.index();
  });
});

