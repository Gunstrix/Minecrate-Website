var copyButton = document.querySelector('.copyButton');

copyButton.addEventListener('click', function(event) {
	var copyArea = document.querySelector('.copyArea');
	copyArea.focus();
	copyArea.select();

	try {
		var successful = document.execCommand('copy');
	} catch(err) {
		console.log('There was an error while attempting to copy that text, take a look: ' + "/n" + err);
	}
});