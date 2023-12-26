/**
 * 🎄 Challenge:
 * 1. The Christmas tree's lights should switch
 *    on and off every 800 miliseconds.
 *
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 *
 * @format
 */


setInterval(() => {
    document.querySelectorAll('.lights').forEach(light => {
        light.classList.toggle('lights-on')
    })
}, 800)


let toggle = true

setInterval(() => {
    const redLights = document.getElementsByClassName('red')
    const blueLights = document.getElementsByClassName('blue')

    if (toggle) {
        for (let light of redLights) light.classList.add('lights-on')
        for (let light of blueLights) light.classList.remove('lights-on')
    } else {
        for (let light of redLights) light.classList.remove('lights-on')
        for (let light of blueLights) light.classList.add('lights-on')
    }

    toggle = !toggle
}, 800)
