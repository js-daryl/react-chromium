var versions = {
	"1.4":"53",
	"1.3":"52",
	"1.2":"51",
	"1.1":"50",
	"1.0":"49",
	"0.37":"49",
	"0.36":"47",
	"0.35":"45",
	"0.34":"45",
	"0.33":"45",
	"0.32":"45",
	"0.31":"44",
	"0.30":"44",
	"0.29":"43",
	"0.28":"43",
	"0.27":"42",
	"0.26":"42",
	"0.25":"42",
	"0.24":"41",
	"0.23":"41",
	"0.22":"41",
	"0.21":"40",
	"0.20":"39"
};
var fullVersions = {
	"1.4.15":"53.0.2785.143",
	"1.4.14":"53.0.2785.143",
	"1.4.13":"53.0.2785.143",
	"1.4.12":"54.0.2840.51",
	"1.4.11":"53.0.2785.143",
	"1.3.13":"52.0.2743.82",
	"1.4.10":"53.0.2785.143",
	"1.4.9":"53.0.2785.143",
	"1.4.8":"53.0.2785.143",
	"1.3.10":"52.0.2743.82",
	"1.3.9":"52.0.2743.82",
	"1.4.7":"53.0.2785.143",
	"1.4.6":"53.0.2785.143",
	"1.4.5":"53.0.2785.113",
	"1.4.4":"53.0.2785.113",
	"1.4.3":"53.0.2785.113",
	"1.4.2":"53.0.2785.113",
	"1.3.7":"52.0.2743.82",
	"1.4.1":"53.0.2785.113",
	"1.4.0":"53.0.2785.113",
	"1.3.6":"52.0.2743.82",
	"1.3.5":"52.0.2743.82",
	"1.3.4":"52.0.2743.82",
	"1.3.3":"52.0.2743.82",
	"1.3.2":"52.0.2743.82",
	"1.3.1":"52.0.2743.82",
	"1.3.0":"52.0.2743.82",
	"1.2.8":"51.0.2704.106",
	"1.2.7":"51.0.2704.106",
	"1.2.6":"51.0.2704.106",
	"1.2.5":"51.0.2704.103",
	"1.2.4":"51.0.2704.103",
	"1.2.3":"51.0.2704.84",
	"1.2.2":"51.0.2704.84",
	"1.2.1":"51.0.2704.63",
	"1.2.0":"51.0.2704.63",
	"1.1.3":"50.0.2661.102",
	"1.1.2":"50.0.2661.102",
	"1.1.1":"50.0.2661.102",
	"1.1.0":"50.0.2661.102",
	"1.0.2":"49.0.2623.75",
	"1.0.1":"49.0.2623.75",
	"1.0.0":"49.0.2623.75",
	"0.37.8":"49.0.2623.75",
	"0.37.7":"49.0.2623.75",
	"0.37.6":"49.0.2623.75",
	"0.37.5":"49.0.2623.75",
	"0.37.4":"49.0.2623.75",
	"0.37.3":"49.0.2623.75",
	"0.36.12":"47.0.2526.110",
	"0.37.1":"49.0.2623.75",
	"0.37.0":"49.0.2623.75",
	"0.36.11":"47.0.2526.110",
	"0.36.10":"47.0.2526.110",
	"0.36.9":"47.0.2526.110",
	"0.36.8":"47.0.2526.110",
	"0.36.7":"47.0.2526.110",
	"0.36.6":"47.0.2526.110",
	"0.36.5":"47.0.2526.110",
	"0.36.4":"47.0.2526.73",
	"0.36.3":"47.0.2526.73",
	"0.35.5":"45.0.2454.85",
	"0.36.2":"47.0.2526.73",
	"0.36.0":"47.0.2526.73",
	"0.35.4":"45.0.2454.85",
	"0.35.3":"45.0.2454.85",
	"0.35.2":"45.0.2454.85",
	"0.34.4":"45.0.2454.85",
	"0.35.1":"45.0.2454.85",
	"0.34.3":"45.0.2454.85",
	"0.34.2":"45.0.2454.85",
	"0.34.1":"45.0.2454.85",
	"0.34.0":"45.0.2454.85",
	"0.33.9":"45.0.2454.85",
	"0.33.8":"45.0.2454.85",
	"0.33.7":"45.0.2454.85",
	"0.33.6":"45.0.2454.85",
	"0.33.4":"45.0.2454.85",
	"0.33.3":"45.0.2454.85",
	"0.33.2":"45.0.2454.85",
	"0.33.1":"45.0.2454.85",
	"0.33.0":"45.0.2454.85",
	"0.32.3":"45.0.2454.85",
	"0.32.2":"45.0.2454.85",
	"0.31.2":"45.0.2454.85",
	"0.31.0":"44.0.2403.125",
	"0.30.4":"44.0.2403.125",
	"0.29.2":"43.0.2357.65",
	"0.29.1":"43.0.2357.65",
	"0.28.3":"43.0.2357.65",
	"0.28.2":"43.0.2357.65",
	"0.28.1":"43.0.2357.65",
	"0.28.0":"43.0.2357.65",
	"0.27.3":"43.0.2357.65",
	"0.27.2":"43.0.2357.65",
	"0.27.1":"42.0.2311.107",
	"0.27.0":"42.0.2311.107",
	"0.26.1":"42.0.2311.107",
	"0.26.0":"42.0.2311.107",
	"0.25.3":"42.0.2311.107",
	"0.25.2":"42.0.2311.107",
	"0.25.1":"42.0.2311.107",
	"0.25.0":"42.0.2311.107",
	"0.24.0":"41.0.2272.76",
	"0.23.0":"41.0.2272.76",
	"0.22.3":"41.0.2272.76",
	"0.22.2":"41.0.2272.76",
	"0.22.1":"41.0.2272.76",
	"0.21.3":"41.0.2272.76",
	"0.21.2":"40.0.2214.91",
	"0.21.1":"40.0.2214.91",
	"0.21.0":"40.0.2214.91",
	"0.20.8":"39.0.2171.65",
	"0.20.7":"39.0.2171.65",
	"0.20.6":"39.0.2171.65",
	"0.20.5":"39.0.2171.65",
	"0.20.4":"39.0.2171.65",
	"0.20.3":"39.0.2171.65",
	"0.20.2":"39.0.2171.65",
	"0.20.1":"39.0.2171.65",
	"0.20.0":"39.0.2171.65"
};
var electronToChromium = function (query) {
  var number = getQueryString(query);
  return number.split('.').length > 2 ? fullVersions[number] : versions[number] || undefined;
}

var electronToBrowserList = function (query) {
  var number = getQueryString(query);
  return versions[number] ? "Chrome >= " + versions[number] : undefined;
}

var getQueryString = function (query) {
  var number = query;
  if (query === 1) { number = "1.0" }
  if (typeof query === 'number') { number += ''; }
  return number;
}

module.exports = {
  versions: versions,
  fullVersions: fullVersions,
  electronToChromium: electronToChromium,
  electronToBrowserList: electronToBrowserList
};
