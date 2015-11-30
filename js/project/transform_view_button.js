    var anchor = document.querySelectorAll('button');
    
    [].forEach.call(anchor, function(anchor){
      var open = false;
      anchor.onclick = function(event){
        event.preventDefault();
        if(!open){
          this.classList.add('close');
          $('#left-bar').addClass('expanded');
          $('#box-container').addClass('right-side');
          open = true;
        }
        else{
          this.classList.remove('close');
          $('#left-bar').removeClass('expanded');
          $('#box-container').removeClass('right-side');

          open = false;
        }
      }
    }); 