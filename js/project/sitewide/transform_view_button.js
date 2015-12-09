var anchor = $('#view_more_button');
    
[].forEach.call(anchor, function(anchor){
      var open = false;
      anchor.onclick = function(event){
        event.preventDefault();
        if(!open){
          this.classList.add('close');
          $('#left-bar').addClass('expanded');
          $('#box-container').addClass('right-side');
          //As main body are squashed, need to hide some space
          $('#main_nav').removeClass('visible-lg');
          $('#main_nav').addClass('hidden');
          $('#logo').addClass('hidden');
          open = true;
        }
        else{
          this.classList.remove('close');
          $('#left-bar').removeClass('expanded');
          $('#box-container').removeClass('right-side');
          
          //As main body are squashed, need to hide some space
          $('#main_nav').removeClass('hidden');
          $('#main_nav').addClass('visible-lg');
          $('#logo').removeClass('hidden');

          open = false;
        }
        
        
        
        
        
        
      }
}); 