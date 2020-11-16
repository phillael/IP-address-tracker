window.addEventListener("DOMContentLoaded", (event) => {
  initMap();
});

var map;
var marker;
var place;

function Location({ ipAddress, city, state, zip, timezone, isp, lat, lng }) {
  this.ipAddress = ipAddress;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.timezone = timezone;
  this.isp = isp;
  this.lat = lat;
  this.lng = lng;

  return this;
}

Location.prototype.locationString = function () {
  return this.city + ", " + this.state + " " + this.zip;
};

Location.prototype.fromJson = function (json) {
  return new Location({
    ipAddress: json.ip,
    lat: json.location.lat,
    lng: json.location.lng,
    city: json.location.city,
    state: json.location.region,
    zip: json.location.postalCode,
    timezone: json.location.timezone,
    isp: json.isp,
  });
};

Location.prototype.addMarker = function (map) {
  map.setView([this.lat, this.lng], 13);
  marker = L.marker([this.lat, this.lng])
    .addTo(map)
    .bindPopup(this.locationString())
    .openPopup();
};

function initMap() {
  map = L.map("mapid").setView([37.4223, -122.085], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  document.getElementById("search-btn").addEventListener("click", search);
}

async function search(e) {
  e.preventDefault();

  var search = document.getElementById("search-box").value;
  var searchType = isNaN(search.charAt(0)) ? "domain" : "ipAddress";

  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_9D8P3lEDDFmO2pRmugRsVKQoMS4Wf&${searchType}=${search}`
  );
  console.log(response);

  if (response.statusText === "Unprocessable Entity") {
    alert(
      "Sorry no data found. Try a domain name such as www.netflix.com or an ip address such as 8.8.8.8"
    );
  } else {
    const json = await response.json();

    place = new Location({}).fromJson(json);
    if (marker) map.removeLayer(marker);
    place.addMarker(map);

    displayResults();
    // console.log(place);
  }
  // fetch(
  //   `https://geo.ipify.org/api/v1?apiKey=at_9D8P3lEDDFmO2pRmugRsVKQoMS4Wf&${searchType}=${search}`
  // )
  //   .then((response) => response.json())
  //   .then((json) => {
  //     place = new Location({}).fromJson(json);
  //     if (marker) map.removeLayer(marker);
  //     place.addMarker(map);

  //     displayResults();
  //   });
}

function displayResults() {
  document.querySelector(".results .ip-address").innerHTML = place.ipAddress;
  document.querySelector(
    ".results .location"
  ).innerHTML = place.locationString();
  document.querySelector(".results .timezone").innerHTML = place.timezone;
  document.querySelector(".results .isp").innerHTML = place.isp;
}

function toggleResults() {
  var element = document.getElementById("results");
  element.classList.toggle("closed");
}
