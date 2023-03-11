const fingerprint = document.getElementById("fingerprint")

const mem = navigator.deviceMemory
const proc = navigator.hardwareConcurrency
const width = screen.width
const height = screen.height
const agent = navigator.userAgent
const touchpoint = navigator.maxTouchPoints
fingerprint.innerHTML = `your device fingerprint id is : ${mem}.${proc}.${width}.${height}<br> <b>number of touchpoints are</b> : ${touchpoint} <br> useragent is : ${agent}`