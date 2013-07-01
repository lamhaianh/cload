function MainDocument() {}

MainDocument.prototype.init = function() {
	this.searching = $('#searching').val() == 'true' ? 1 : 0;
	console.log(this.searching);
	this.loading = $('#loading');
}

MainDocument.prototype.initLoadingIcon = function() {
	if (this.searching == 1) {
		this.loading.show();
	} else {
		this.loading.hide();
	}
}

$(document).ready(function() {
	var mainDocument = new MainDocument();
	// Init main_document
	mainDocument.init();

	// Init result loading
	mainDocument.initLoadingIcon();

});

