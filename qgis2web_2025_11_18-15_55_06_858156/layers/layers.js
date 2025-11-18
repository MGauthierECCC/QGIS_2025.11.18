var wms_layers = [];


        var lyr_Fonddecarte_0 = new ol.layer.Tile({
            'title': 'Fond de carte',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zonedetir_1 = new ol.format.GeoJSON();
var features_Zonedetir_1 = format_Zonedetir_1.readFeatures(json_Zonedetir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedetir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedetir_1.addFeatures(features_Zonedetir_1);
var lyr_Zonedetir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedetir_1, 
                style: style_Zonedetir_1,
                popuplayertitle: 'Zone de tir',
                interactive: true,
                title: '<img src="styles/legend/Zonedetir_1.png" /> Zone de tir'
            });
var format_ZonedetirB_2 = new ol.format.GeoJSON();
var features_ZonedetirB_2 = format_ZonedetirB_2.readFeatures(json_ZonedetirB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonedetirB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedetirB_2.addFeatures(features_ZonedetirB_2);
var lyr_ZonedetirB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedetirB_2, 
                style: style_ZonedetirB_2,
                popuplayertitle: 'Zone de tir B',
                interactive: true,
                title: '<img src="styles/legend/ZonedetirB_2.png" /> Zone de tir B'
            });
var format_ZonedetirA_3 = new ol.format.GeoJSON();
var features_ZonedetirA_3 = format_ZonedetirA_3.readFeatures(json_ZonedetirA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonedetirA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedetirA_3.addFeatures(features_ZonedetirA_3);
var lyr_ZonedetirA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedetirA_3, 
                style: style_ZonedetirA_3,
                popuplayertitle: 'Zone de tir A',
                interactive: true,
                title: '<img src="styles/legend/ZonedetirA_3.png" /> Zone de tir A'
            });
var format_Coordonnes_Polygonezonedetir_4 = new ol.format.GeoJSON();
var features_Coordonnes_Polygonezonedetir_4 = format_Coordonnes_Polygonezonedetir_4.readFeatures(json_Coordonnes_Polygonezonedetir_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coordonnes_Polygonezonedetir_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coordonnes_Polygonezonedetir_4.addFeatures(features_Coordonnes_Polygonezonedetir_4);
var lyr_Coordonnes_Polygonezonedetir_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coordonnes_Polygonezonedetir_4, 
                style: style_Coordonnes_Polygonezonedetir_4,
                popuplayertitle: 'Coordonnées_Polygone zone de tir',
                interactive: true,
                title: '<img src="styles/legend/Coordonnes_Polygonezonedetir_4.png" /> Coordonnées_Polygone zone de tir'
            });
var format_StationsQE_5 = new ol.format.GeoJSON();
var features_StationsQE_5 = format_StationsQE_5.readFeatures(json_StationsQE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsQE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsQE_5.addFeatures(features_StationsQE_5);
var lyr_StationsQE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationsQE_5, 
                style: style_StationsQE_5,
                popuplayertitle: 'Stations QE',
                interactive: true,
                title: '<img src="styles/legend/StationsQE_5.png" /> Stations QE'
            });
var format_StationsSdiments2023_6 = new ol.format.GeoJSON();
var features_StationsSdiments2023_6 = format_StationsSdiments2023_6.readFeatures(json_StationsSdiments2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsSdiments2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsSdiments2023_6.addFeatures(features_StationsSdiments2023_6);
var lyr_StationsSdiments2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationsSdiments2023_6, 
                style: style_StationsSdiments2023_6,
                popuplayertitle: 'Stations Sédiments (2023)',
                interactive: true,
                title: '<img src="styles/legend/StationsSdiments2023_6.png" /> Stations Sédiments (2023)'
            });
var format_StationsRCBALaboVivant20192024_7 = new ol.format.GeoJSON();
var features_StationsRCBALaboVivant20192024_7 = format_StationsRCBALaboVivant20192024_7.readFeatures(json_StationsRCBALaboVivant20192024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsRCBALaboVivant20192024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsRCBALaboVivant20192024_7.addFeatures(features_StationsRCBALaboVivant20192024_7);
var lyr_StationsRCBALaboVivant20192024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationsRCBALaboVivant20192024_7, 
                style: style_StationsRCBALaboVivant20192024_7,
                popuplayertitle: 'Stations RCBA + Labo Vivant (2019-2024)',
                interactive: true,
    title: 'Stations RCBA + Labo Vivant (2019-2024)<br />\
    <img src="styles/legend/StationsRCBALaboVivant20192024_7_0.png" /> 1 échantillonnage<br />\
    <img src="styles/legend/StationsRCBALaboVivant20192024_7_1.png" /> 2 échantillonnages<br />\
    <img src="styles/legend/StationsRCBALaboVivant20192024_7_2.png" /> 3 échantillonnages<br />\
    <img src="styles/legend/StationsRCBALaboVivant20192024_7_3.png" /> 4 échantillonnages<br />' });
var format_StationsRCBA20192024_8 = new ol.format.GeoJSON();
var features_StationsRCBA20192024_8 = format_StationsRCBA20192024_8.readFeatures(json_StationsRCBA20192024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsRCBA20192024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsRCBA20192024_8.addFeatures(features_StationsRCBA20192024_8);
var lyr_StationsRCBA20192024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationsRCBA20192024_8, 
                style: style_StationsRCBA20192024_8,
                popuplayertitle: 'Stations RCBA (2019-2024)',
                interactive: true,
    title: 'Stations RCBA (2019-2024)<br />\
    <img src="styles/legend/StationsRCBA20192024_8_0.png" /> 1 échantillonnage<br />\
    <img src="styles/legend/StationsRCBA20192024_8_1.png" /> 2 échantillonnages<br />\
    <img src="styles/legend/StationsRCBA20192024_8_2.png" /> 3 échantillonnages<br />\
    <img src="styles/legend/StationsRCBA20192024_8_3.png" /> 4 échantillonnages<br />' });
var format_Couche_ListedestationsRCBA20042024_9 = new ol.format.GeoJSON();
var features_Couche_ListedestationsRCBA20042024_9 = format_Couche_ListedestationsRCBA20042024_9.readFeatures(json_Couche_ListedestationsRCBA20042024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Couche_ListedestationsRCBA20042024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couche_ListedestationsRCBA20042024_9.addFeatures(features_Couche_ListedestationsRCBA20042024_9);
var lyr_Couche_ListedestationsRCBA20042024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couche_ListedestationsRCBA20042024_9, 
                style: style_Couche_ListedestationsRCBA20042024_9,
                popuplayertitle: 'Couche_Liste de stations RCBA (2004-2024)',
                interactive: true,
    title: 'Couche_Liste de stations RCBA (2004-2024)<br />\
    <img src="styles/legend/Couche_ListedestationsRCBA20042024_9_0.png" /> 1 échantillonnage<br />\
    <img src="styles/legend/Couche_ListedestationsRCBA20042024_9_1.png" /> 2 échantillonnages<br />\
    <img src="styles/legend/Couche_ListedestationsRCBA20042024_9_2.png" /> 3-4 échantillonnages<br />\
    <img src="styles/legend/Couche_ListedestationsRCBA20042024_9_3.png" /> 5-9 échantillonnages<br />\
    <img src="styles/legend/Couche_ListedestationsRCBA20042024_9_4.png" /> 10-19 échantillonnages<br />' });
var format_ListestationsRCBALaboVivant20042024_10 = new ol.format.GeoJSON();
var features_ListestationsRCBALaboVivant20042024_10 = format_ListestationsRCBALaboVivant20042024_10.readFeatures(json_ListestationsRCBALaboVivant20042024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ListestationsRCBALaboVivant20042024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ListestationsRCBALaboVivant20042024_10.addFeatures(features_ListestationsRCBALaboVivant20042024_10);
var lyr_ListestationsRCBALaboVivant20042024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ListestationsRCBALaboVivant20042024_10, 
                style: style_ListestationsRCBALaboVivant20042024_10,
                popuplayertitle: 'Liste stations RCBA + LaboVivant (2004-2024)',
                interactive: true,
    title: 'Liste stations RCBA + LaboVivant (2004-2024)<br />\
    <img src="styles/legend/ListestationsRCBALaboVivant20042024_10_0.png" /> 1 échantillonnage<br />\
    <img src="styles/legend/ListestationsRCBALaboVivant20042024_10_1.png" /> 2 échantillonnages<br />\
    <img src="styles/legend/ListestationsRCBALaboVivant20042024_10_2.png" /> 3 échantillonnages<br />\
    <img src="styles/legend/ListestationsRCBALaboVivant20042024_10_3.png" /> 3-5 échantillonnages<br />\
    <img src="styles/legend/ListestationsRCBALaboVivant20042024_10_4.png" /> 5-10 échantillonnages<br />\
    <img src="styles/legend/ListestationsRCBALaboVivant20042024_10_5.png" /> 10-20 échantillonnages<br />' });
var format_ListestationsRCBA_Suivitemporel10_11 = new ol.format.GeoJSON();
var features_ListestationsRCBA_Suivitemporel10_11 = format_ListestationsRCBA_Suivitemporel10_11.readFeatures(json_ListestationsRCBA_Suivitemporel10_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ListestationsRCBA_Suivitemporel10_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ListestationsRCBA_Suivitemporel10_11.addFeatures(features_ListestationsRCBA_Suivitemporel10_11);
var lyr_ListestationsRCBA_Suivitemporel10_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ListestationsRCBA_Suivitemporel10_11, 
                style: style_ListestationsRCBA_Suivitemporel10_11,
                popuplayertitle: 'Liste stations RCBA_Suivi temporel (10+)',
                interactive: true,
    title: 'Liste stations RCBA_Suivi temporel (10+)<br />\
    <img src="styles/legend/ListestationsRCBA_Suivitemporel10_11_0.png" /> 0 - 9 échantillonnages<br />\
    <img src="styles/legend/ListestationsRCBA_Suivitemporel10_11_1.png" /> 10+ échantillonnages<br />' });
var group_Zonedetir = new ol.layer.Group({
                                layers: [lyr_Zonedetir_1,lyr_ZonedetirB_2,lyr_ZonedetirA_3,lyr_Coordonnes_Polygonezonedetir_4,],
                                fold: 'open',
                                title: 'Zone de tir'});

lyr_Fonddecarte_0.setVisible(true);lyr_Zonedetir_1.setVisible(true);lyr_ZonedetirB_2.setVisible(true);lyr_ZonedetirA_3.setVisible(true);lyr_Coordonnes_Polygonezonedetir_4.setVisible(true);lyr_StationsQE_5.setVisible(true);lyr_StationsSdiments2023_6.setVisible(true);lyr_StationsRCBALaboVivant20192024_7.setVisible(true);lyr_StationsRCBA20192024_8.setVisible(true);lyr_Couche_ListedestationsRCBA20042024_9.setVisible(true);lyr_ListestationsRCBALaboVivant20042024_10.setVisible(true);lyr_ListestationsRCBA_Suivitemporel10_11.setVisible(true);
var layersList = [lyr_Fonddecarte_0,group_Zonedetir,lyr_StationsQE_5,lyr_StationsSdiments2023_6,lyr_StationsRCBALaboVivant20192024_7,lyr_StationsRCBA20192024_8,lyr_Couche_ListedestationsRCBA20042024_9,lyr_ListestationsRCBALaboVivant20042024_10,lyr_ListestationsRCBA_Suivitemporel10_11];
lyr_Zonedetir_1.set('fieldAliases', {'fid': 'fid', });
lyr_ZonedetirB_2.set('fieldAliases', {'fid': 'fid', });
lyr_ZonedetirA_3.set('fieldAliases', {'fid': 'fid', });
lyr_Coordonnes_Polygonezonedetir_4.set('fieldAliases', {'Latitude (Y)': 'Latitude (Y)', 'Longitude (X)': 'Longitude (X)', 'Latitude (Y)_1': 'Latitude (Y)_1', 'Longitude (X)_1': 'Longitude (X)_1', });
lyr_StationsQE_5.set('fieldAliases', {'ProjectCode': 'ProjectCode', 'SiteCode': 'SiteCode', 'SiteName': 'SiteName', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_StationsSdiments2023_6.set('fieldAliases', {'Stations': 'Stations', '2023': '2023', '2023_1': '2023_1', 'Argile': 'Argile', 'Limon': 'Limon', 'Sable': 'Sable', 'Gravier': 'Gravier', 'Odeur': 'Odeur', 'Couleur': 'Couleur', 'Biota': 'Biota', 'Homogénéité': 'Homogénéité', 'Profondeur (m)': 'Profondeur (m)', 'Température': 'Température', 'Benne': 'Benne', 'Nb essais': 'Nb essais', 'Date': 'Date', 'Heure': 'Heure', 'Commentaires': 'Commentaires', 'field_19': 'field_19', });
lyr_StationsRCBALaboVivant20192024_7.set('fieldAliases', {'fid': 'fid', 'Waterbody / Cours d\'eau': 'Waterbody / Cours d\'eau', 'Cours d\'eau - détails': 'Cours d\'eau - détails', 'Status': 'Status', 'CABIN Site Code': 'CABIN Site Code', 'Study': 'Study', 'Years Sampled': 'Years Sampled', 'Number of time sampled': 'Number of time sampled', 'Number of time sampled (2020-2025)': 'Number of time sampled (2020-2025)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_StationsRCBA20192024_8.set('fieldAliases', {'fid': 'fid', 'Waterbody / Cours d\'eau': 'Waterbody / Cours d\'eau', 'Cours d\'eau - détails': 'Cours d\'eau - détails', 'Status': 'Status', 'CABIN Site Code': 'CABIN Site Code', 'Study': 'Study', 'Years Sampled': 'Years Sampled', 'Number of time sampled': 'Number of time sampled', 'Number of time sampled (2020-2025)': 'Number of time sampled (2020-2025)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Couche_ListedestationsRCBA20042024_9.set('fieldAliases', {'fid': 'fid', 'Waterbody / Cours d\'eau': 'Waterbody / Cours d\'eau', 'Cours d\'eau - détails': 'Cours d\'eau - détails', 'Status': 'Status', 'CABIN Site Code': 'CABIN Site Code', 'Study': 'Study', 'Years Sampled': 'Years Sampled', 'Number of time sampled': 'Number of time sampled', 'Number of time sampled (2020-2025)': 'Number of time sampled (2020-2025)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ListestationsRCBALaboVivant20042024_10.set('fieldAliases', {'fid': 'fid', 'Waterbody / Cours d\'eau': 'Waterbody / Cours d\'eau', 'Cours d\'eau - détails': 'Cours d\'eau - détails', 'Status': 'Status', 'CABIN Site Code': 'CABIN Site Code', 'Study': 'Study', 'Years Sampled': 'Years Sampled', 'Number of time sampled': 'Number of time sampled', 'Number of time sampled (2020-2025)': 'Number of time sampled (2020-2025)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ListestationsRCBA_Suivitemporel10_11.set('fieldAliases', {'fid': 'fid', 'Waterbody / Cours d\'eau': 'Waterbody / Cours d\'eau', 'Cours d\'eau - détails': 'Cours d\'eau - détails', 'Status': 'Status', 'CABIN Site Code': 'CABIN Site Code', 'Study': 'Study', 'Years Sampled': 'Years Sampled', 'Number of time sampled': 'Number of time sampled', 'Number of time sampled (2020-2025)': 'Number of time sampled (2020-2025)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Zonedetir_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZonedetirB_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZonedetirA_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Coordonnes_Polygonezonedetir_4.set('fieldImages', {'Latitude (Y)': '', 'Longitude (X)': '', 'Latitude (Y)_1': '', 'Longitude (X)_1': '', });
lyr_StationsQE_5.set('fieldImages', {'ProjectCode': 'TextEdit', 'SiteCode': 'TextEdit', 'SiteName': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_StationsSdiments2023_6.set('fieldImages', {'Stations': 'TextEdit', '2023': 'TextEdit', '2023_1': 'TextEdit', 'Argile': 'TextEdit', 'Limon': 'TextEdit', 'Sable': 'TextEdit', 'Gravier': 'TextEdit', 'Odeur': 'TextEdit', 'Couleur': 'TextEdit', 'Biota': 'TextEdit', 'Homogénéité': 'Range', 'Profondeur (m)': 'TextEdit', 'Température': 'TextEdit', 'Benne': 'TextEdit', 'Nb essais': 'TextEdit', 'Date': 'DateTime', 'Heure': 'DateTime', 'Commentaires': 'TextEdit', 'field_19': 'TextEdit', });
lyr_StationsRCBALaboVivant20192024_7.set('fieldImages', {'fid': 'TextEdit', 'Waterbody / Cours d\'eau': 'TextEdit', 'Cours d\'eau - détails': 'TextEdit', 'Status': 'TextEdit', 'CABIN Site Code': 'TextEdit', 'Study': 'TextEdit', 'Years Sampled': 'TextEdit', 'Number of time sampled': 'TextEdit', 'Number of time sampled (2020-2025)': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_StationsRCBA20192024_8.set('fieldImages', {'fid': 'TextEdit', 'Waterbody / Cours d\'eau': 'TextEdit', 'Cours d\'eau - détails': 'TextEdit', 'Status': 'TextEdit', 'CABIN Site Code': 'TextEdit', 'Study': 'TextEdit', 'Years Sampled': 'TextEdit', 'Number of time sampled': 'TextEdit', 'Number of time sampled (2020-2025)': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Couche_ListedestationsRCBA20042024_9.set('fieldImages', {'fid': 'TextEdit', 'Waterbody / Cours d\'eau': 'TextEdit', 'Cours d\'eau - détails': 'TextEdit', 'Status': 'TextEdit', 'CABIN Site Code': 'TextEdit', 'Study': 'TextEdit', 'Years Sampled': 'TextEdit', 'Number of time sampled': 'Range', 'Number of time sampled (2020-2025)': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ListestationsRCBALaboVivant20042024_10.set('fieldImages', {'fid': 'TextEdit', 'Waterbody / Cours d\'eau': 'TextEdit', 'Cours d\'eau - détails': 'TextEdit', 'Status': 'TextEdit', 'CABIN Site Code': 'TextEdit', 'Study': 'TextEdit', 'Years Sampled': 'TextEdit', 'Number of time sampled': 'Range', 'Number of time sampled (2020-2025)': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ListestationsRCBA_Suivitemporel10_11.set('fieldImages', {'fid': 'TextEdit', 'Waterbody / Cours d\'eau': 'TextEdit', 'Cours d\'eau - détails': 'TextEdit', 'Status': 'TextEdit', 'CABIN Site Code': 'TextEdit', 'Study': 'TextEdit', 'Years Sampled': 'TextEdit', 'Number of time sampled': 'Range', 'Number of time sampled (2020-2025)': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Zonedetir_1.set('fieldLabels', {'fid': 'no label', });
lyr_ZonedetirB_2.set('fieldLabels', {'fid': 'no label', });
lyr_ZonedetirA_3.set('fieldLabels', {'fid': 'no label', });
lyr_Coordonnes_Polygonezonedetir_4.set('fieldLabels', {'Latitude (Y)': 'no label', 'Longitude (X)': 'no label', 'Latitude (Y)_1': 'no label', 'Longitude (X)_1': 'no label', });
lyr_StationsQE_5.set('fieldLabels', {'ProjectCode': 'no label', 'SiteCode': 'no label', 'SiteName': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_StationsSdiments2023_6.set('fieldLabels', {'Stations': 'no label', '2023': 'no label', '2023_1': 'no label', 'Argile': 'no label', 'Limon': 'no label', 'Sable': 'no label', 'Gravier': 'no label', 'Odeur': 'no label', 'Couleur': 'no label', 'Biota': 'no label', 'Homogénéité': 'no label', 'Profondeur (m)': 'no label', 'Température': 'no label', 'Benne': 'no label', 'Nb essais': 'no label', 'Date': 'no label', 'Heure': 'no label', 'Commentaires': 'no label', 'field_19': 'no label', });
lyr_StationsRCBALaboVivant20192024_7.set('fieldLabels', {'fid': 'no label', 'Waterbody / Cours d\'eau': 'no label', 'Cours d\'eau - détails': 'no label', 'Status': 'no label', 'CABIN Site Code': 'no label', 'Study': 'no label', 'Years Sampled': 'no label', 'Number of time sampled': 'no label', 'Number of time sampled (2020-2025)': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_StationsRCBA20192024_8.set('fieldLabels', {'fid': 'no label', 'Waterbody / Cours d\'eau': 'no label', 'Cours d\'eau - détails': 'no label', 'Status': 'no label', 'CABIN Site Code': 'no label', 'Study': 'no label', 'Years Sampled': 'no label', 'Number of time sampled': 'no label', 'Number of time sampled (2020-2025)': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Couche_ListedestationsRCBA20042024_9.set('fieldLabels', {'fid': 'no label', 'Waterbody / Cours d\'eau': 'no label', 'Cours d\'eau - détails': 'no label', 'Status': 'no label', 'CABIN Site Code': 'no label', 'Study': 'no label', 'Years Sampled': 'no label', 'Number of time sampled': 'no label', 'Number of time sampled (2020-2025)': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ListestationsRCBALaboVivant20042024_10.set('fieldLabels', {'fid': 'no label', 'Waterbody / Cours d\'eau': 'no label', 'Cours d\'eau - détails': 'no label', 'Status': 'no label', 'CABIN Site Code': 'no label', 'Study': 'no label', 'Years Sampled': 'no label', 'Number of time sampled': 'no label', 'Number of time sampled (2020-2025)': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ListestationsRCBA_Suivitemporel10_11.set('fieldLabels', {'fid': 'no label', 'Waterbody / Cours d\'eau': 'no label', 'Cours d\'eau - détails': 'no label', 'Status': 'no label', 'CABIN Site Code': 'no label', 'Study': 'no label', 'Years Sampled': 'no label', 'Number of time sampled': 'no label', 'Number of time sampled (2020-2025)': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ListestationsRCBA_Suivitemporel10_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});