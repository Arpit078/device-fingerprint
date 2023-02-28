const fingerprint = document.getElementById("fingerprint")

const mem = navigator.deviceMemory
const proc = navigator.hardwareConcurrency
const width = screen.width
const height = screen.height
const agent = navigator.userAgent
const depth = screen.colorDepth
fingerprint.innerHTML = `your device fingerprint id is : ${mem}.${proc}.${width}.${height} and ${depth} and ${agent}`