window.onload = () => {
    const gameBoard = document.querySelector("#gameboard")
    let offsetX, offsetY
    
    
    gameBoard.addEventListener('mousemove', (e) => {
        offsetX = e.offsetX
        offsetY = e.offsetY
    })
    
    const randomPosition = () => {
        let random = Math.floor(Math.random() * 3);
        let y = [132.08346, 177.08346, 222.08346]

        return y[random];
    }
    
    const cubeGenerator = () => {
        let cube = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        let svg = document.querySelector('html > body > div > svg')
        
        cube.setAttribute("id", "svg_4")
        cube.setAttribute("stroke", "#0f0f00")
        cube.setAttribute("width", "45.83309")
        cube.setAttribute("y", randomPosition())
        cube.setAttribute("x", "267.08345")
        cube.setAttribute("fill-opacity", "null")
        cube.setAttribute("stroke-width", "1.5")
        cube.setAttribute("fill", "#030303")
        cube.setAttribute("height", "45.83309")
        
        svg.appendChild(cube)
        return cube
    }

    cubeGenerator()    

    let i = 580;
    const intervalId = setInterval(() => {
        document.querySelector("#svg_4").x.baseVal.value = i-= 10;
        if (i < 4) {
            let yVal = document.querySelector("#svg_4").y.baseVal.value;
            console.log(offsetY, yVal)
            if (offsetY > (yVal - 45) && offsetY < (yVal + 45)) {
                console.log(offsetY, yVal)
            }
            clearInterval(intervalId)
        }
    }, 1);


        
}