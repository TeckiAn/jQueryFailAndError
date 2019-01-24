$('#flashMessage')
  .hide()
  

//const title = "My first Blog Post";
//const content = "This is my first post!";


$("#previewButton").click(function(){
	const title = $("#blogTitleInput").val();
	const content = $("#blogContentInput").val();
$("#blogTitlePreview").text(title);
$("#blogContentPreview").text(content);

	$('#flashMessage')
  .slideDown(1000)
  .delay(3000)
  .slideUp();
});