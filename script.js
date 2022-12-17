

function getgeolocation() {
    navigator.geolocation.getCurrentPosition(navigatetonext);
}

function navigatetonext(pos) {
    var crd = pos.coords;
    latitude = crd.latitude;
    longitude = crd.longitude;
    console.log(crd);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    //storing location info
    sessionStorage.setItem("latitude", `${crd.latitude}`);
    sessionStorage.setItem("longitude", `${crd.longitude}`);
    // console.log(localStorage.getItem("latitude"));


    //navigating to second page
    window.open("index2.html", "_blank");

}

localStorage.clear();