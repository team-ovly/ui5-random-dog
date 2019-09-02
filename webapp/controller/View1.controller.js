sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.random-dog.controller.View1", {
		
		endpoint: "https://random.dog/woof.json",
		
		imageContainerId: "image-container",
		
		onInit: function () {
			this.callAPI();	
		},
		
		onGetRandomDog: function(oEvent){
			this.callAPI();
		},
		
		callAPI: function(){
			// var callback = $.proxy(this._updatePicture); // Using jQuery
			var callback = this._updateContainer.bind(this); // Using vanilla JS
			
			$.get(this.endpoint, callback);
		},
		
		_updateContainer: function(result){
			var isVideo = result.url.endsWith("mp4");
			
			if(isVideo){
				this._showVideo(result.url);
			}else{
				this._showImage(result.url);
			}
		
		},
		
		_showVideo: function(sUrl){
			var video = $("video");
			video.prop("hidden", false);
			this.byId(this.imageContainerId)
				.setVisible(false);
			
			var source = video.find("source");
			source.attr("src", sUrl);
			video.load();
		},
		
		_showImage: function(sUrl){
			var video = $("video");
			video.prop("hidden", true);
			
			this.byId(this.imageContainerId)
				.setVisible(true)
				.setSrc(sUrl);
		}
		
		
		
	});
});