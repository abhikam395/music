export function toogleFullScreen(element, fullScreenModeOff){
    let count = 0;
    if(!element.fullscreenElement)
        element.requestFullscreen();
    element.addEventListener('fullscreenchange', (e) => {
        count++;
        if(count == 2)
            fullScreenModeOff(true)
    }, false);
}