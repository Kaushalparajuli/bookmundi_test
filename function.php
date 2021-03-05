<?php

// retriving api data
$api_url = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';
// var_dump(XMLLoader($api_url));

function XMLLoader($api_url)
{
    $file = file_get_contents($api_url);

    $xmlObject = simplexml_load_string($file);
    $json = json_encode($xmlObject);
    $phpArray = json_decode($json, true);
    return $phpArray;
}