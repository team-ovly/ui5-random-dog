sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ovly/random-dog/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ovly.random-dog.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
			if (!String.prototype.endsWith)
				String.prototype.endsWith = function (searchStr, Position) {
					// This works much better than >= because
					// it compensates for NaN:
					if (!(Position < this.length))
						Position = this.length;
					else
						Position |= 0; // round position
					return this.substr(Position - searchStr.length,
						searchStr.length) === searchStr;
				};
		}
	});
});