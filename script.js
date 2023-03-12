const fingerprint = document.getElementById("fingerprint")

const mem = navigator.deviceMemory
const proc = navigator.hardwareConcurrency
const width = screen.width
const height = screen.height
const agent = navigator.userAgent
const successCallback = (position) => {
    console.log(position.coords.latitude);
    let loc= [ position.coords.latitude,position.coords.longitude  ]
    fingerprint.innerHTML = `your device fingerprint id is : ${mem}.${proc}.${width}.${height} <br> useragent is : ${agent} <br> your location is : ${loc}`

  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  const options = {
    enableHighAccuracy: true,
  };
  
navigator.geolocation.getCurrentPosition(successCallback, errorCallback,options);