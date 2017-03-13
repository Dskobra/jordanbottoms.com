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
			document.write("IE is not supported");
		} else if (browserName == "Firefox"){
			document.write("Firefox is fully supported");
		} else if (browserName == "Chrome"){
			document.write("Chrome is fully supported");
		} else if (browserName == "Opera"){
			document.write("Opera is not supported");
		} else {
			document.write("Sorry this browser version is not supported");
		}
		
		
function checkEdge(){ 
	if (/Edge\/\d./i.test(navigator.userAgent)){
   window.alert('Microsoft Edge');
}}