window.onload = () => {
    let coins = 500
    let userInput = 1

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
    
    const cubeGenerator = (y) => {
        let cube = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        let svg = document.querySelector('html > body > div > svg')
        
        cube.setAttribute("id", "svg_4")
        cube.setAttribute("stroke", "#0f0f00")
        cube.setAttribute("width", "45.83309")
        cube.setAttribute("y", y)
        cube.setAttribute("x", "267.08345")
        cube.setAttribute("fill-opacity", "null")
        cube.setAttribute("stroke-width", "1.5")
        cube.setAttribute("fill", "#030303")
        cube.setAttribute("height", "45.83309")
        
        svg.appendChild(cube)
        return cube
    }  

    document.querySelector("#coins-value").innerHTML = coins
    
    gameBoard.addEventListener('click', () => {
        const userInput = document.querySelector("#bet").value
        let multiplier = document.querySelector("#multiplier").value
        document.querySelector("#coins-value").innerHTML = coins
        
        const race = () => {
            let i = 580;
            const intervalId = setInterval(() => {
                document.querySelector("#svg_4").x.baseVal.value = i-= 10;

                if (i < 4) {
                    let yVal = document.querySelector("#svg_4").y.baseVal.value;
                    //console.log(offsetY, yVal)
                    
                    if (offsetY > (yVal - 45) && offsetY < (yVal + 45)) {                          
                        if (userInput > coins) {
                            alert("You don't have enough coins!")
                        } else if (userInput != 0 && userInput < coins) {
                            coins = coins + ( userInput * multiplier )
                        }
                        console.log(offsetY, yVal, coins)
                    } else {
                        if (userInput != 0 && userInput < coins) {
                            coins = coins - ( userInput * multiplier )
                        } else if (userInput > coins) {
                            alert("You don't have enough coins!")
                        }
                    }
                    clearInterval(intervalId)
                }
            }, 20);
        }
        

        let parent = document.querySelector('html > body > div > svg');
        let child = document.querySelector("#svg_4")

        cubeGenerator(randomPosition())
        race()

        parent.removeChild(child)


        console.log(multiplier)    
    })
}
