//Crear una función para crear un popup a la capa GeoJSON Restos Arqueologicos

//Crear una función para crear un popup a la capa GeoJSON Red Hídrica
function popupRedHidrica(feature, layer){
	if(feature.properties && feature.properties.Nombre && feature.properties.Rasgo_Prin && feature.properties.Rasgo_Secu){
		layer.bindPopup("<b>Nombre:</b> " 				+ feature.properties.Nombre + 
						"<br><b>Rasgo Principal:</b> " 	+ feature.properties.Rasgo_Prin + 
						"<br><b>Rasgo Principal:</b> " 	+ feature.properties.Rasgo_Secu);
	}
};




//Crear una función para crear un popup con imagen a la capa GeoJSON Urbano
function popuplotes(feature, layer){
	if(feature.properties && feature.properties.LOTE){
		layer.bindPopup("<b>LOTE:</b> " + feature.properties.LOTE
						
						);
	}
};


