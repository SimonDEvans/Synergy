/*-----------------------------------------------------------------

Modular - JS Extension
Made by @esr360
http://github.com/esr360/Modular/
	
-----------------------------------------------------------------*/

//-----------------------------------------------------------------
// Convert CSS config to JS
//-----------------------------------------------------------------

// Get styles' configuration
var stylesConfigJSON = document.getElementById("stylesConfigJSON");

// Remove quotes from computed JSON
function removeQuotes(json) {
    json = json.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
    return json;
}

// Convert computed JSON to camelCase
function camelCase(json) {
	json = json.replace(/-([a-z])/g, function (g) { 
		return g[1].toUpperCase(); 
	});
	return json;
}