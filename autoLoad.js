$(document).ready(function() {
  
  //if(window.loggedIn === false) {
 		if(!autopause){
 			if(window.currentStreamObject.name == 'notifications') {
 				document.title = window.siteTitle;
 			}
 			var hiddenStreamItems = $('.stream-item.hidden');
 			hiddenStreamItems.css('opacity','0')
 			hiddenStreamItems.animate({opacity:'1'}, 200);
 			hiddenStreamItems.addClass('visible');
 			hiddenStreamItems.removeClass('hidden');
 			$('#new-queets-bar').parent().addClass('hidden');
 		
 			// say hello to the api if this is notifications stream, to
 			// get correct unread notifcation count
 			if(window.currentStreamObject.name == 'notifications') {
 				helloAPI();
 			}
});
