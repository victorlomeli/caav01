    $(document).ready(function() {

      $(document).on('click', 'a[href*="#"]', function() {
        var slashedHash = '#/' + this.hash.slice(1);
        if ( this.hash ) {

          if ( slashedHash === location.hash ) {
            $.smoothScroll({scrollTarget: this.hash});
          } else {
            $.bbq.pushState(slashedHash);
          }

          return false;
        }
      });

      $(window).bind('hashchange', function(event) {
        var tgt = location.hash.replace(/^#\/?/,'');
        if ( document.getElementById(tgt) ) {
          $.smoothScroll({scrollTarget: '#' + tgt});
        }
      });

      $(window).trigger('hashchange');
    });
