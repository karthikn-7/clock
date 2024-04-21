const clock = document.getElementById("clock")

function time(){
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0)
    const seconds = now.getSeconds().toString().padStart(2,0)
    const timeString = `${hours}:${minutes}:${seconds}`
    clock.textContent = (timeString)
    return timeString
}

time()
setInterval(time,1000)
