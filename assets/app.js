const clock = document.getElementById("clock")

function time(){
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0)
    const seconds = now.getSeconds().toString().padStart(2,0)
    let ampm;
    if (hours>12){
        ampm = "PM"
    }else{
        ampm = "AM"
    }
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`
    clock.textContent = (timeString)
    return timeString
}

time()
setInterval(time,1000)
