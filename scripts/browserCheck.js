function getBrowserName(){
	var isBrowser = navigator.userAgent;
	
	if(isBrowser.indexOf("MSIE") >= 0){
		return "MSIE";
		} else if(isBrowser.indexOf("Firefox")  >= 0){
				return "Firefox";
		} else if(isBrowser.indexOf("Chrome")  >= 0){
			return "Chrome";
		} else if(isBrowser.indexOf("Safari")  >= 0){
			return "Safari";
		} else if(isBrowser.indexOf("Opera")  >= 0){
			return "Opera";
		} else {
			return "UNKNOWN";
			}
		}
		
function getBrowserVersion(){
	var ua = navigator.userAgent;
	var browser = getBrowserName();
	var findIndex = ua.indexOf(browser) + browser.length + 1;
	var browserVersion = parseFloat(
		ua.substring(findIndex, findIndex + 3));
		return browserVersion;
	}
		
	var browserName = getBrowserName();
	var browserVersion = getBrowserVersion();
		
	if (browserName == "MSIE"){
			location.replace("unsupported.html");
		} else if (browserName == "Firefox"){
			//
		} else if (browserName == "Chrome"){
			//
		} else if (browserName == "Opera"){
			location.replace("unsupported.html");
		} else {
			location.replace("unsupported.html");
		}
		
		
function checkEdge(){ 
	if (/Edge\/\d./i.test(navigator.userAgent)){
   location.replace("unsupported.html");
}}