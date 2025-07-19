ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32618").setExtent([421217.455835, 983308.308620, 422089.779822, 983723.821399]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Curvas_020m_1 = new ol.format.GeoJSON();
var features_Curvas_020m_1 = format_Curvas_020m_1.readFeatures(json_Curvas_020m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Curvas_020m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_020m_1.addFeatures(features_Curvas_020m_1);
var lyr_Curvas_020m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_020m_1, 
                style: style_Curvas_020m_1,
                popuplayertitle: 'Curvas_020m',
                interactive: true,
    title: 'Curvas_020m<br />\
    <img src="styles/legend/Curvas_020m_1_0.png" /> 7,200000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_1.png" /> 7,400000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_2.png" /> 7,600000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_3.png" /> 7,800000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_4.png" /> 8,000000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_5.png" /> 8,200000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_6.png" /> 8,400000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_7.png" /> 8,600000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_8.png" /> 8,800000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_9.png" /> 9,000000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_10.png" /> 9,200000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_11.png" /> 9,400000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_12.png" /> 9,600000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_13.png" /> 9,800000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_14.png" /> 10,000000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_15.png" /> 10,200000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_16.png" /> 10,400000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_17.png" /> 10,600000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_18.png" /> 10,800000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_19.png" /> 11,000000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_20.png" /> 11,200000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_21.png" /> 11,400000000000000<br />\
    <img src="styles/legend/Curvas_020m_1_22.png" /> 11,600000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_23.png" /> 11,800000000000001<br />\
    <img src="styles/legend/Curvas_020m_1_24.png" /> 12,000000000000000<br />' });
var format_Finca_La_Huerta_2 = new ol.format.GeoJSON();
var features_Finca_La_Huerta_2 = format_Finca_La_Huerta_2.readFeatures(json_Finca_La_Huerta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Finca_La_Huerta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finca_La_Huerta_2.addFeatures(features_Finca_La_Huerta_2);
var lyr_Finca_La_Huerta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Finca_La_Huerta_2, 
                style: style_Finca_La_Huerta_2,
                popuplayertitle: 'Finca_La_Huerta',
                interactive: true,
    title: 'Finca_La_Huerta<br />\
    <img src="styles/legend/Finca_La_Huerta_2_0.png" /> 6995,8<br />\
    <img src="styles/legend/Finca_La_Huerta_2_1.png" /> 7568,9<br />\
    <img src="styles/legend/Finca_La_Huerta_2_2.png" /> 12606,8<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Curvas_020m_1.setVisible(true);lyr_Finca_La_Huerta_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Curvas_020m_1,lyr_Finca_La_Huerta_2];
lyr_Curvas_020m_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Finca_La_Huerta_2.set('fieldAliases', {'id': 'id', 'Área': 'Área Ha', 'm2': 'Área en M2', 'Desc': 'Desc', 'Fotográfi': 'Foto # 1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', });
lyr_Curvas_020m_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Finca_La_Huerta_2.set('fieldImages', {'id': 'TextEdit', 'Área': 'ValueRelation', 'm2': 'TextEdit', 'Desc': 'TextEdit', 'Fotográfi': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', });
lyr_Curvas_020m_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Finca_La_Huerta_2.set('fieldLabels', {'id': 'no label', 'Área': 'inline label - always visible', 'm2': 'no label', 'Desc': 'inline label - visible with data', 'Fotográfi': 'inline label - visible with data', 'Foto_2': 'inline label - visible with data', 'Foto_3': 'inline label - visible with data', 'Foto_4': 'inline label - visible with data', });
lyr_Finca_La_Huerta_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});