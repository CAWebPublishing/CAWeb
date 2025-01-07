var locationApiUrl = "https://dev.virtualearth.net/REST/v1/Locations";
var apiGeoKey = "sTpxHCYR4FTGnCG8Xyvs~8zP_m4PenqxGvLqv1RWjNw~AhUOabwx86TCto41-4IWTZBf3Yi7d-nSDWkDs1IhANlZcCvWyv9XC5BSUp343Pcu";
var geocodeRequest = "";
var itemToGet = "";
var mapPointFlag = false;
var mapPointCount = 0;
var userLat = 34.058333;
var userLong = -118.230902;
var closestLocationLat = 0.0;
var closestLocationLong = 0.0;
var entryType = "";
var locatedCitySpan = document.getElementsByClassName("located-city-name");
var locationTextBoxValue = "";
var calculatedCity = "";
var cookieSetFlag = false;
var myLocation = "";
var cookieName = "selectedLocationDetails";
var cookieValue = null;
var cookies = null; 



function showAddLocation() {
	
	var element = document.getElementById("locationSettings");
	var classDetails = element.className;
	if (classDetails.indexOf("show") > -1) {
		element.className =      element.className.replace(/\bshow\b/g, "");
	}
	else {
		element.className = element.className.replace(/\bcollapsed\b/g, "collapsed show");

	} 
		var locationSettingHtml = "";
		
		cookies = document.cookie.split(/\s*;\s*/);
		
		for (var i = 0; i < cookies.length; i++) {
			if (cookies[i].substring(0, cookieName.length + 1) === cookieName + "=") {
				cookieValue = decodeURIComponent(cookies[i].substring(cookieName.length + 1));
				myLocation = cookieValue;
				break;
			}
		}

		if (myLocation.length > 0) {
			cookieSetFlag === true;
			var selectedLocationDetailParts = myLocation.split("^");
			locationTextBoxValue = selectedLocationDetailParts[2];
		}
		else {
			locationTextBoxValue = "";
		}

		locationSettingHtml += "    <div class=\"container p-y location-settings\">";
		locationSettingHtml += "		<button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"#locationSettings\" aria-expanded=\"false\" aria-controls=\"locationSettings\" aria-label=\"Close\">";
		locationSettingHtml += "            <span aria-hidden=\"true\">&times;</span>";
		locationSettingHtml += "        </button>";
		locationSettingHtml += "            <div class=\"form-group form-inline\">";
        locationSettingHtml += "                <label for=\"locationInput\">Saving your California location allows us to provide you with more relevant information.</label><br />";
		locationSettingHtml += "                <input type=\"input\" class=\"form-control\" id=\"locationInput\" placeholder=\"Enter Zip Code or City\" value = \"" + locationTextBoxValue + "\" style=\"margin-right: 3px;margin-top: 2px;\">";
		locationSettingHtml += "                <button type=\"button\" onclick=\"processZipCity();\" class=\"btn btn-default btn-md\" style=\"margin-right: 3px;margin-top: 3px;\">Set Location</button>";
		locationSettingHtml += "                <button id=\"locationClear\" onclick=\"clearSelectedLocation();\" type=\"button\" class=\"btn btn-default btn-md\" style=\"margin-right: 10px;margin-top: 3px;\">Clear</button>";
		locationSettingHtml += "                <button type=\"button\" class=\"btn btn-default btn-md\" onclick=\"getMyLocationDetails();\" style=\"margin-top: 3px;\">Use My Location</button>";
		locationSettingHtml += "            </div>";
		locationSettingHtml += "        </div>";
		
		element.innerHTML = locationSettingHtml;

	
	document.getElementById("locationInput")
		.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			processZipCity();
			blur();
		}
	});
	
	var clearTestText = locationTextBoxValue;
	if (!(clearTestText.length > 1)) {
		document.getElementById("locationClear").disabled = true;
	}
	else {
		document.getElementById("locationClear").disabled = false;
	}
	
	window.scrollTo(0, 0);
}	

// ##############################################  SET HOMEPAGE BACKGROUND IMAGE ##############################################

function showRegionalImage() {

    var processBackgroundImage = true;

    var imageLocationExistsTestVariable = document.getElementById("spanCaption");
    if (typeof imageLocationExistsTestVariable === 'undefined'|| imageLocationExistsTestVariable === null) {
        processBackgroundImage = false;
    }

    var today = new Date();
    today.setHours(today.getHours() - 8);

    var userDateTime = new Date(today.toString()).toISOString();
    computedBackgroundLocationValues = "";
    var itemsToShow = "";
    var regionImageFlag = false;
    var regionImageCount = 0;

    function getRegionImageInfo() {
        if (regionImageCount === 0) {
            processJsonData.provideImageNameDetails(userLong, userLat, userDateTime);
        }
        regionImageCount += 1;
        if (regionImageFlag === false) {
            if (regionImageCount < 200) {
                itemsToShow = computedBackgroundLocationValues;
                if (itemsToShow.length > 0) {
                    regionImageFlag = true;
                    setTimeout(getRegionImageInfo, 100);
                }
                else {
                    setTimeout(getRegionImageInfo, 100);
                }
            }
            else {
                regionImageFlag = true;
                itemsToShow = "no details";
                setTimeout(getRegionImageInfo, 100);
            }
        }
        else {
            var itemsArray = itemsToShow.split("|");

            var regionStorage = "";

            switch (itemsArray[0].toUpperCase()) {
                case "UPSTATE CALIFORNIA":
                    regionStorage = "us";
                    break;
                case "SACRAMENTO":
                    regionStorage = "sac";
                    break;
                case "BAY AREA":
                    regionStorage = "ba";
                    break;
                case "CENTRAL COAST":
                    regionStorage = "cc";
                    break;
                case "CENTRAL VALLEY":
                    regionStorage = "cv";
                    break;
                case "CENTRAL SIERRA":
                    regionStorage = "cs";
                    break;
                case "LOS ANGELES":
                    regionStorage = "la";
                    break;
                case "ORANGE":
                    regionStorage = "or";
                    break;
                case "INLAND EMPIRE":
                    regionStorage = "ie";
                    break;
                case "SAN DIEGO/IMPERIAL":
                    regionStorage = "sd";
                    break;
                default:
                    regionStorage = "none";
            } 

            if (userLong === -118.230902 && userLat === 34.058333) {
                regionStorage = "-" + itemsArray[2].toLowerCase() + "-" + itemsArray[1].toLowerCase();
            }
            else { 
                regionStorage = regionStorage + "-" + itemsArray[2].toLowerCase() + "-" + "summer";  // itemsArray[1].toLowerCase();
            }
            var homepageBackgroundImageArray = [];
			homepageBackgroundImageArray[0]="us-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Summer/Day/Summer-Day-GettyImages-482705680.jpg|Crescent Beach Overlook Enderts Beach|State of California";
			homepageBackgroundImageArray[1]="us-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Summer/Day/Summer-Day-GettyImages-483070280.jpg|Manzanita Lake at Lassen Volcanic National Park |State of California";
			homepageBackgroundImageArray[2]="us-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Summer/Day/Summer-Day-Humbolt-Redwoords-SP-090-P68139.jpg|Humboldt Redwoods State Park|California State Parks";
			homepageBackgroundImageArray[3]="us-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Day/GettyImages-183408195.jpg|Fern Canyon in Redwood National Park|State of California";
			homepageBackgroundImageArray[4]="us-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Day/GettyImages-622903540.jpg|Mount Shasta|State of California";
			homepageBackgroundImageArray[5]="us-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Day/GettyImages-615387556.jpg|Hidden Beach in Del Norte Coast Redwoods State Park|State of California";
			homepageBackgroundImageArray[6]="us-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Summer/Night/Weed-California-lake-GettyImages-586724506.jpg|Weed Lake |State of California";
			homepageBackgroundImageArray[7]="us-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Summer/Night/Summer-Night-South-Warner-Mountain-GettyImages-529921567.jpg|South Warner Wilderness|State of California";
			homepageBackgroundImageArray[8]="us-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Summer/Night/Summer-Night-Clear-Lake-GettyImages-515841709.jpg|Clear Lake|State of California";
			homepageBackgroundImageArray[9]="us-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Night/GettyImages-509054139.jpg|Trinidad Lighthouse|State of California";
			homepageBackgroundImageArray[10]="us-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Night/GettyImages-650151608.jpg|Shasta Caverns|State of California";
			homepageBackgroundImageArray[11]="us-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Night/GettyImages-546006690.jpg|Sundial Bridge|State of California";
			homepageBackgroundImageArray[12]="sac-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Summer/Day/Summer-Day-Emerald-Bay-Lake-Tahoe-GettyImages-492848164.jpg|Emerald Bay Lake Tahoe|State of California";
			homepageBackgroundImageArray[13]="sac-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Summer/Day/Summer-Day-Folsom-Lake-GettyImages-87655810.jpg|Folsom Lake|State of California";
			homepageBackgroundImageArray[14]="sac-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Summer/Day/Summer-Day-GettyImages-89916503.jpg|Sacramento River near Old Sacramento|State of California";
			homepageBackgroundImageArray[15]="sac-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Day/GettyImages-167374170.jpg|Rainbow Bridge|State of California";
			homepageBackgroundImageArray[16]="sac-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Day/Winter-Day-090-P66699.jpg|Old Sacramento State Historic Park |California State Parks";
			homepageBackgroundImageArray[17]="sac-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Day/Winter-Day-090-P71929.jpg|Sugar Pine State Park |California State Parks";
			homepageBackgroundImageArray[18]="sac-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Summer/Night/GettyImages-dv030157.jpg|Emerald Bay Lake Tahoe|State of California";
			homepageBackgroundImageArray[19]="sac-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Summer/Night/Sacramento-%20Region-Foothill-Sunset-Summer.jpg|Sacramento Foothills|Maryann Hazel";
			homepageBackgroundImageArray[20]="sac-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Summer/Night/Summer-Night-Tower-Bridge-GettyImages-482639644-OLD.jpg|Tower Bridge near Old Sacramento|State of California";
			homepageBackgroundImageArray[21]="sac-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Night/GettyImages-89156284.jpg|Emerald Bay|State of California";
			homepageBackgroundImageArray[22]="sac-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Night/GettyImages-91813393.jpg|Delta King Hotel |State of California";
			homepageBackgroundImageArray[23]="sac-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Night/GettyImages-167079984.jpg|Sacramento River near Tower Bridge|State of California";
			homepageBackgroundImageArray[24]="ba-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Summer/Day/Summer-Day-Oakland-Bridge-GettyImages-506347856.jpg|San Francisco Bay Bridge |State of California";
			homepageBackgroundImageArray[25]="ba-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Summer/Day/Summer-Day-Golden-Gate.jpg|Golden Gate Bridge|State of California";
			homepageBackgroundImageArray[26]="ba-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Summer/Day/Summer-Day-Muir-Woods-GettyImages-488653182.jpg|Muir Woods|State of California";
			homepageBackgroundImageArray[27]="ba-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Day/GettyImages-468064405.jpg|Golden Gate Bridge San Francisco|State of California";
			homepageBackgroundImageArray[28]="ba-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Day/GettyImages-472849244.jpg|San Francisco Harbor|State of California";
			homepageBackgroundImageArray[29]="ba-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Day/Parks-090-P91716.jpg|Emeryville Crescent State Marine Reserve |California State Parks";
			homepageBackgroundImageArray[30]="ba-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Summer/Night/Summer-Night-Bay-Bridge-GettyImages-644147752.jpg|San Francisco Bay Bridge |State of California";
			homepageBackgroundImageArray[31]="ba-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Summer/Night/Summer-Night-Coit-Tower-GettyImages-610034474.jpg|San Francisco Coit Tower|State of California";
			homepageBackgroundImageArray[32]="ba-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Summer/Night/Summer-Night-SF-Pier-GettyImages-534552738.jpg|San Francisco Pier 7|State of California";
			homepageBackgroundImageArray[33]="ba-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Night/GettyImages-147314487.jpg|Presidio Park |State of California";
			homepageBackgroundImageArray[34]="ba-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Night/GettyImages-477851056.jpg|Transamerica Pyramid|State of California";
			homepageBackgroundImageArray[35]="ba-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Night/GettyImages-504788164.jpg|Twin Peaks|State of California";
			homepageBackgroundImageArray[36]="cc-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Summer/Day/GettyImages-587798288.jpg|City of Solvang |State of California";
			homepageBackgroundImageArray[37]="cc-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Summer/Day/Summer-Day-090-P72928.jpg|Morro Strand State Beach|California State Parks";
			homepageBackgroundImageArray[38]="cc-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Summer/Day/Summer-Day-Bixby-Bridge-GettyImages-526763095.jpg|Bixby Creek Bridge|State of California";
			homepageBackgroundImageArray[39]="cc-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Day/Bixby-Bridge-Khomishen.jpg|Bixby Creek Bridge|State of California";
			homepageBackgroundImageArray[40]="cc-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Day/Parks-090-P85388.jpg|Robert H. Meyer Memorial State Beach|California State Parks";
			homepageBackgroundImageArray[41]="cc-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Day/Parks-090-P84011.jpg|Morro Strand State Beach|California State Parks";
			homepageBackgroundImageArray[42]="cc-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Summer/Night/GettyImages-134218626.jpg|Pier in Santa Barbara|State of California";
			homepageBackgroundImageArray[43]="cc-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Summer/Night/Summer-Night-Gondola-Santa-Cruz-GettyImages-99471952.jpg|Santa Cruz Boardwalk|State of California";
			homepageBackgroundImageArray[44]="cc-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Summer/Night/Summer-Night-Pigeon-Point-Lighthouse-090-P71647.jpg|Pigeon Point Lighthouse|California State Parks";
			homepageBackgroundImageArray[45]="cc-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Night/GettyImages-484508880.jpg|Point Pinos Monterey|State of California";
			homepageBackgroundImageArray[46]="cc-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Night/GettyImages-968539992.jpg|Morro Bay|State of California";
			homepageBackgroundImageArray[47]="cc-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Night/GettyImages-500734570.jpg|Ventura California |State of California";
			homepageBackgroundImageArray[48]="cv-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Summer/Day/Summer-Day-California-Road-155-GettyImages-479830510.jpg|Highway 155 |State of California";
			homepageBackgroundImageArray[49]="cv-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Summer/Day/Summer-Day-Fox-Theatre-Bakersfield.jpg|Fox Theatre in Bakersfield|State of California";
			homepageBackgroundImageArray[50]="cv-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Summer/Day/Summer-Day-Red-Rock-Canyon-SP-090-P88660.jpg|Red Rock Canyon|California State Parks";
			homepageBackgroundImageArray[51]="cv-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Day/GettyImages-479830548.jpg|California State Route 155|State of California";
			homepageBackgroundImageArray[52]="cv-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Day/GettyImages-529249535.jpg|Kings River|State of California";
			homepageBackgroundImageArray[53]="cv-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Day/GettyImages-518012227.jpg|Wind Turbines near Bakersfield|State of California";
			homepageBackgroundImageArray[54]="cv-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Summer/Night/Summer-Day-Stockton-Waterfront-GettyImages-615746094.jpg|Stockton Waterfront|State of California";
			homepageBackgroundImageArray[55]="cv-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Summer/Night/Summer-Night-Kings-Canyon-GettyImages-508498930.jpg|Kings Canyon|State of California";
			homepageBackgroundImageArray[56]="cv-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Summer/Night/Summer-Night-San-Luis-Reservoir-GettyImages-498491011.jpg|San Luis Reservoir|State of California";
			homepageBackgroundImageArray[57]="cv-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Night/GettyImages-477499518.jpg|Farmhouse in rural countryside|State of California";
			homepageBackgroundImageArray[58]="cv-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Night/SRA-090-P86997.jpg|San Luis Reservoir State Recreation Area|California State Parks";
			homepageBackgroundImageArray[59]="cv-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Night/GettyImages-498491011.jpg|San Luis Reservoir|State of California";
			homepageBackgroundImageArray[60]="cs-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Summer/Day/Day-Summer-GettyImages-518565539.jpg|Zabriskie Point in Death Valley |State of California";
			homepageBackgroundImageArray[61]="cs-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Summer/Day/Summer-Day-Calaveras-Big-Trees-GettyImages-497393138.jpg|Calaveras Big Trees State Park|State of California";
			homepageBackgroundImageArray[62]="cs-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Summer/Day/Summer-Day-Mobius-Arch-GettyImages-509292286.jpg|Mobius Arch near Owens Valley|State of California";
			homepageBackgroundImageArray[63]="cs-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Day/GettyImages-508070596.jpg|Yosemite Valley along the Merced River |State of California";
			homepageBackgroundImageArray[64]="cs-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Day/GettyImages-623771514.jpg|Hot Creek Geologic Site|State of California";
			homepageBackgroundImageArray[65]="cs-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Day/Parks-090-P74609.jpg|Calaveras Big Trees State Park|California State Parks";
			homepageBackgroundImageArray[66]="cs-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Summer/Night/Summer-Night-Badwater-Basin-GettyImages-659634896.jpg|Badwater Basin in Death Valley|State of California";
			homepageBackgroundImageArray[67]="cs-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Summer/Night/Summer-Night-Half-Dome.jpg|Half Dome near Yosemite Valley|State of California";
			homepageBackgroundImageArray[68]="cs-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Summer/Night/Summer-Night-Tufa-formation-Mono-Lake-GettyImages-646357994.jpg|Tufa Formation near Mono Lake|State of California";
			homepageBackgroundImageArray[69]="cs-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Night/GettyImages-494305198.jpg|Twin Lakes at Mammoth Lakes|State of California";
			homepageBackgroundImageArray[70]="cs-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Night/GettyImages-1028386212.jpg|South Tufa at Mono Lake|State of California";
			homepageBackgroundImageArray[71]="cs-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Night/GettyImages-638043258.jpg|Yosemite Park|State of California";
			homepageBackgroundImageArray[72]="la-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Summer/Day/Summer-Day-Hermosa-beach-GettyImages-476666720.jpg|Hermosa Beach |State of California";
			homepageBackgroundImageArray[73]="la-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Summer/Day/Summer-Day-Santa-Monica-beach-GettyImages-534610535.jpg|Santa Monica Beach|State of California";
			homepageBackgroundImageArray[74]="la-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Summer/Day/GettyImages-1061409368.jpg|Los Angeles Cityscape|State of California";
			homepageBackgroundImageArray[75]="la-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Day/GettyImages-466502378.jpg|Los Angeles Cityscape|State of California";
			homepageBackgroundImageArray[76]="la-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Day/GettyImages-639915340.jpg|Los Angeles County|State of California";
			homepageBackgroundImageArray[77]="la-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Day/GettyImages-623099772.jpg|Santa Monica Beach|State of California";
			homepageBackgroundImageArray[78]="la-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Summer/Night/GettyImages-982418842.jpg|Los Angeles Cityscape|State of California";
			homepageBackgroundImageArray[79]="la-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Summer/Night/Summer-Night-Downtown-Los-Angeles-GettyImages-613871370.jpg|Downtown Los Angeles|State of California";
			homepageBackgroundImageArray[80]="la-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Summer/Night/Summer-Night-Santa-Barbara-seashore-GettyImages-92281614.jpg|Santa Barbara Shore|State of California";
			homepageBackgroundImageArray[81]="la-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Night/GettyImages-488811698.jpg|Downtown Los Angeles|State of California";
			homepageBackgroundImageArray[82]="la-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Night/GettyImages-638015368.jpg|Los Angeles Hills |State of California";
			homepageBackgroundImageArray[83]="la-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Night/GettyImages-504746580.jpg|Los Angeles|State of California";
			homepageBackgroundImageArray[84]="or-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Summer/Day/Summer-Day-Laguna-Beach-GettyImages-490826227.jpg|Laguna Beach|State of California";
			homepageBackgroundImageArray[85]="or-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Summer/Day/Summer-Day-Little-Corona-Baech-GettyImages-615073460.jpg|Little Corona del Mar Beach|State of California";
			homepageBackgroundImageArray[86]="or-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Summer/Day/Summer-Day-Mission-San-Juan-Capistrano-ThinkstockPhotos-87789231.jpg|Mission San Juan Capistrano|State of California";
			homepageBackgroundImageArray[87]="or-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Day/GettyImages-467925506.jpg|Laguna Beach Canyon Hiking Trail|State of California";
			homepageBackgroundImageArray[88]="or-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Day/GettyImages-626434804.jpg|Laguna Beach|State of California";
			homepageBackgroundImageArray[89]="or-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Day/SP-090-P78550.jpg|Crystal Cove State Park |California State Parks";
			homepageBackgroundImageArray[90]="or-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Summer/Night/GettyImages-931586002.jpg|Newport Beach |State of California";
			homepageBackgroundImageArray[91]="or-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Summer/Night/Summer-Night-%20San-Joaquin-Hills-GettyImages-504585285.jpg|San Joaquin Hills|State of California";
			homepageBackgroundImageArray[92]="or-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Summer/Night/Summer-Night-Doheny-SB-090-P69308.jpg|Doheny State Beach|State of California";
			homepageBackgroundImageArray[93]="or-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Night/GettyImages-146835642.jpg|Beach in Orange County|State of California";
			homepageBackgroundImageArray[94]="or-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Night/GettyImages-522487393.jpg|Venice Beach|State of California";
			homepageBackgroundImageArray[95]="or-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Night/GettyImages-508815680.jpg|Huntington Beach |State of California";
			homepageBackgroundImageArray[96]="ie-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Summer/Day/Summer-Day-BigBearLake-GettyImages-514785876.jpg|Big Bear Lake|State of California";
			homepageBackgroundImageArray[97]="ie-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Summer/Day/Summer-Day-Joshua-Tree-GettyImages-528611321.jpg|Joshua Tree National Park|State of California";
			homepageBackgroundImageArray[98]="ie-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Summer/Day/Summer-Day-Monolith-Joshua-Tree-National-Park-GettyImages-538392549.jpg|Monolith at Joshua Tree National Park|State of California";
			homepageBackgroundImageArray[99]="ie-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Day/GettyImages-499403336.jpg|Joshua Tree National Park|State of California";
			homepageBackgroundImageArray[100]="ie-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Day/GettyImages-915594002.jpg|Mount San Jacinto|State of California";
			homepageBackgroundImageArray[101]="ie-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Day/GettyImages-533010055.jpg|Lake Fulmor in San Jacinto Mountains Reserve|State of California";
			homepageBackgroundImageArray[102]="ie-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Summer/Night/Summer-Night-Palm-Desert-GettyImages-177780477.jpg|Palm Desert|State of California";
			homepageBackgroundImageArray[103]="ie-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Summer/Night/Summer-Night-Salton-Sea-GettyImages-642592756.jpg|Salton Sea|State of California";
			homepageBackgroundImageArray[104]="ie-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Summer/Night/Summer-Night-San-Bernardino-GettyImages-471665562.jpg|San Bernardino Valley|State of California";
			homepageBackgroundImageArray[105]="ie-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Night/GettyImages-468652782.jpg|Joshua Tree National Park|State of California";
			homepageBackgroundImageArray[106]="ie-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Night/GettyImages-520640877.jpg|San Bernardino Mountains|State of California";
			homepageBackgroundImageArray[107]="ie-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Night/GettyImages-520638071.jpg|Coachella Valley|State of California";
			homepageBackgroundImageArray[108]="sd-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Summer/Day/GettyImages-954696082.jpg|San Diego Embarcadero|State of California";
			homepageBackgroundImageArray[109]="sd-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Summer/Day/Summer-Day-Balboa-park-in-San-Diego-GettyImages-538745659.jpg|Balboa Park|State of California";
			homepageBackgroundImageArray[110]="sd-day-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Summer/Day/Summer-Day-La-Jolla-shoreline-GettyImages-512132037.jpg|La Jolla|State of California";
			homepageBackgroundImageArray[111]="sd-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Day/GettyImages-464831546.jpg|Hotel del Coronado|State of California";
			homepageBackgroundImageArray[112]="sd-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Day/GettyImages-506540906.jpg|Jolla Beach Pier|State of California";
			homepageBackgroundImageArray[113]="sd-day-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Day/Winter-Day-090-P79061.jpg|Anza-Borrego Desert State Park|California State Parks";
			homepageBackgroundImageArray[114]="sd-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Summer/Night/Summer-Night-Oceanside-GettyImages-528243709.jpg|Oceanside Pier|State of California";
			homepageBackgroundImageArray[115]="sd-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Summer/Night/Summer-Night-San-Diego-Financial-District-GettyImages-515671556.jpg|San Diego Financial District|State of California";
			homepageBackgroundImageArray[116]="sd-night-summer|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Summer/Night/Summer-Night-San-Diego-Skyline-GettyImages-578568490.jpg|San Diego Skyline|State of California";
			homepageBackgroundImageArray[117]="sd-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Night/Winter-Night-090-P82320.jpg|Silver Strand State Beach in San Diego|California State Parks";
			homepageBackgroundImageArray[118]="sd-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Night/GettyImages-909410960.jpg|La Jolla|State of California";
			homepageBackgroundImageArray[119]="sd-night-winter|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Night/GettyImages-936649786.jpg|San Diego|State of California";


            var homepageArrayLength = homepageBackgroundImageArray.length;

            var selectedRegionArray = [];
            var selectedRegionCount = 0;

            for (var i = 0; i < homepageArrayLength; i++) {
                if (homepageBackgroundImageArray[i].indexOf(regionStorage) > -1) {
                    selectedRegionArray[selectedRegionCount] = homepageBackgroundImageArray[i];
                    selectedRegionCount += 1;
                }
            }
            
            var arrayItemToUse = null;

            if (selectedRegionCount < 1) {
                arrayItemToUse = homepageBackgroundImageArray[Math.floor(Math.random() * homepageArrayLength)];
            } else {
                arrayItemToUse = selectedRegionArray[Math.floor(Math.random() * selectedRegionCount)];
            }

            var itemToUseDataSet = arrayItemToUse.split("|");



            document.getElementById("spanCaption").innerHTML = itemToUseDataSet[2];
            document.getElementById("abbrCopy").innerHTML = "&copy; " + itemToUseDataSet[3];
            document.getElementsByClassName("et_pb_section_0")[0].style.backgroundImage = "url('" + itemToUseDataSet[1] + "')";

            document.getElementsByClassName("main-content")
            [0].style.paddingTop = "5px";


            
        }
    }


    if (processBackgroundImage === true) {

        setTimeout(getRegionImageInfo, 250);
    }
}

// ############################################## SHOW FILTERED MAP ##############################################

function showFilteredMap() {
	var mapPointFlag = false;
	var mapPointCount = 0;

	function getMapPoints() {
		if (mapPointCount === 0) {
            document.getElementById("map_toc").innerHTML = "";
            closestLocationLat = 0.0;
            closestLocationLong = 0.0;
            if (pageAgencyId > 0) {
			    if (isAgencyPageFlag === true) {
                    processJsonData.showFilteredAgencyMap('map_toc', 'map_array', 'mapssection', userLong, userLat, pageAgencyId, 25, 'en');
                }
                else {
                    processJsonData.showFilteredServiceMap('map_toc', 'map_array', 'mapssection', userLong, userLat, pageAgencyId, pageServiceId, 25, 'en');
				}
            }
		}
		mapPointCount += 1;
		if (mapPointFlag === false) {
			if (mapPointCount < 150) {
				var mapTestVariable = document.getElementById("map_toc");
				if (typeof mapTestVariable === 'undefined'|| mapTestVariable === null) {
					setTimeout(getMapPoints, 100);
				}
				else {
					if (document.getElementById("map_toc").innerHTML.indexOf("-- DONE --") > -1) {	
						var mapItems = document.getElementById("map_array").innerHTML;
                        set_servicesesrimap(17, closestLocationLong, closestLocationLat, mapItems, 'esrimap_canvas');
						var elt = document.getElementById('service_locations');
						elt.style.cssText = "";
                        mapPointFlag = true;
						document.getElementById("map_array").innerHTML = "";
					}
					else  { 
						setTimeout(getMapPoints, 100);
					}
				}
			}
			else {
				mapPointFlag = true;
			}
		}		
	}

	var serviceLocationTestVariable = document.getElementById("mapssection");
	if (!(typeof serviceLocationTestVariable === 'undefined'|| serviceLocationTestVariable === null)) {
		setTimeout(getMapPoints, 750);
	}
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// Process location based on selection
cookies = document.cookie.split(/\s*;\s*/);

for (var i = 0; i < cookies.length; i++) {
	if (cookies[i].substring(0, cookieName.length + 1) === cookieName + "=") {
		cookieValue = decodeURIComponent(cookies[i].substring(cookieName.length + 1));
		myLocation = cookieValue;
		break;
	}
}

if (myLocation.length > 0) {
	cookieSetFlag === true;
	var selectedLocationDetailParts = myLocation.split("^");
	userLat = selectedLocationDetailParts[0];
	userLong = selectedLocationDetailParts[1];
	locatedCitySpan[0].innerHTML = selectedLocationDetailParts[2];
	if (document.getElementById('setLocationMapButton') !== null) {
        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + selectedLocationDetailParts[2];  
	} 
}
else {
    userLat = 34.058333;
    userLong = -118.230902;
}

showFilteredMap();
showRegionalImage();


function clearSelectedLocation() {
	setCookie("selectedLocationDetails", '', 365);
	document.getElementById("locationClear").disabled = true;
	locatedCitySpan[0].innerHTML = "Set Location";
	document.getElementById('locationInput').value = "";
	if (document.getElementById('setLocationMapButton') !== null) {
        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Set location to show nearby results";  
	} 
    userLat = 34.058333;
    userLong = -118.230902;
    showFilteredMap();
    showRegionalImage();
}	
		
function getMyLocationDetails() {
	mapPointFlag = false;
	mapPointCount = 0;
	getMyLatLong();
}	

function getMyLatLong() {
	entryType = "Dynamic";
	if (mapPointCount === 0) {
		userLat = 34.058333;
		userLong = -118.230902;
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	mapPointCount += 1;
	if (mapPointFlag === false) {
        if (userLat === 34.058333) {
            if (userLong === -118.230902) {
				//console.log(userLat + " -  " + userLong + " (" + mapPointCount + ") ");
			} 
			else { 
                mapPointFlag = true;
			}
		}
		else { 
            mapPointFlag = true;
		}
		if (mapPointCount >= 700) {
			mapPointFlag = true;
		}
		window.setTimeout(getMyLatLong, 100); /* this checks the flag every 100 milliseconds*/
	}
	else {
		itemToGet = userLat + "," + userLong;
		geocodeRequest = locationApiUrl + "/" + itemToGet + "?maxResults=1&key=" + apiGeoKey + "&jsonp=GeocodeCallback";
		CallRestService(geocodeRequest);	
	}
}

 function showPosition(position) {
	userLong = position.coords.longitude;
	userLat = position.coords.latitude;
}

function processZipCity() {
	entryType = "Manual";
	itemToGet = document.getElementById('locationInput').value;
	
	if (isNaN(itemToGet)) {
        itemToGet = itemToGet + ", CA";
		geocodeRequest = locationApiUrl + "?query=" + itemToGet +  "&maxResults=1&key=" + apiGeoKey + "&jsonp=GeocodeCallback"; //", CA" +
		CallRestService(geocodeRequest);
	}
	else {
		if (itemToGet.length === 5) {
			geocodeRequest = locationApiUrl + "?query=" + itemToGet + "&maxResults=1&key=" + apiGeoKey + "&jsonp=GeocodeCallback";
			CallRestService(geocodeRequest);
		}
		else {
			alert('Location not found.');
			document.getElementById('locationInput').value = "";
		}
	}
}

function GeocodeCallback(result) 
{  
	document.getElementById('locationInput').value = "";
	
	var locationHolder = locatedCitySpan[0].innerHTML;

    if (typeof result.resourceSets[0].resources[0] !== "undefined") {

		if (result.resourceSets[0].resources[0].address.adminDistrict === "CA") {
			if (entryType === "Manual") {
				calculatedCity = "";
				calculatedCity += result.resourceSets[0].resources[0].address.locality;
				document.getElementById('locationInput').value = calculatedCity;
				if (document.getElementById('setLocationMapButton') !== null) {
					if (calculatedCity !== "undefined") {
                        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + calculatedCity;  
					}
				} 
			}
			else {
				calculatedCity = result.resourceSets[0].resources[0].address.formattedAddress;
				calculatedCityParts = calculatedCity.split(",");
			
				if (calculatedCityParts.length > 2) {
					calculatedCity = calculatedCityParts[calculatedCityParts.length - 2];
				}
				
				if (calculatedCity.length > 0) {
					document.getElementById('locationInput').value = calculatedCity;
					if (document.getElementById('setLocationMapButton') !== null) {
                        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + calculatedCity;  
					} 
				}
				else {
					calculatedCity = "undefined";
				}
			}
			
			if (calculatedCity.indexOf("undefined") > -1) {
				if (typeof result.resourceSets[0].resources[0].address.adminDistrict2 === 'undefined') {
					locatedCitySpan[0].innerHTML = "Not Found";
					document.getElementById('locationInput').value = "";
				}
				else {
					calculatedCity = result.resourceSets[0].resources[0].address.adminDistrict2;
					if (calculatedCity.indexOf("undefined") > -1) {
						locatedCitySpan[0].innerHTML = "Not Found";
						document.getElementById('locationInput').value = "";
					}		
					else {
						var countyFormatting = result.resourceSets[0].resources[0].address.adminDistrict2.replace("Co.","County");
						locatedCitySpan[0].innerHTML = countyFormatting;
						document.getElementById('locationInput').value = countyFormatting;
						if (document.getElementById('setLocationMapButton') !== null) {
                            document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + countyFormatting;  
						} 
					}
				}
			}
			else {
				locatedCitySpan[0].innerHTML = calculatedCity;
			}
			
			if (!(locatedCitySpan[0].innerHTML === "Not Found")) {
				if (typeof result.resourceSets[0].resources[0].point.coordinates[0] !== "undefined" && typeof result.resourceSets[0].resources[0].point.coordinates[1] !== "undefined")  {
					document.getElementById("locationClear").disabled = false;
					var selectLocationToStore = result.resourceSets[0].resources[0].point.coordinates[0] + "^" + result.resourceSets[0].resources[0].point.coordinates[1] + "^" + document.getElementById('locationInput').value;
					setCookie("selectedLocationDetails", selectLocationToStore, 365);
					showAddLocation();
					userLat = result.resourceSets[0].resources[0].point.coordinates[0];
					userLong = result.resourceSets[0].resources[0].point.coordinates[1];
					showFilteredMap();
                    showRegionalImage();
                }
			}
			else {
				locatedCitySpan[0].innerHTML = locationHolder;
				alert('Location not found.');
			}
		}
		else {
			alert('Please enter a location in California.');
		}
	}
	else {
		alert('Please enter a location in California.');
	}
}
	
function CallRestService(request) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", request);
    document.body.appendChild(script);
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
    d.setTime(d.getTime() + exdays * 86400000);
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}	
