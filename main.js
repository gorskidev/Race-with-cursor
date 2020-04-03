window.onload = () => {
    let coins = 10
    let userInput = 1
    
    const gameBoard = document.querySelector("#gameboard")
    let offsetX, offsetY // Declare global values

    document.querySelector("#coins-value").innerHTML = coins // Assign value 'coins' to HTML element with id of #coins-value.
    
    // Get mouse position
    gameBoard.addEventListener('mousemove', (e) => { 
        offsetX = e.offsetX
        offsetY = e.offsetY
    })
    
    // Use to calculate random y position of a block
    const randomPosition = () => { 
        let random = Math.floor(Math.random() * 3);
        let y = [132.08346, 177.08346, 222.08346]

        return y[random];
    }
    
    // Generate new block
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
        return cube // Return that is used to gather block's attributes
    }  

    
    gameBoard.addEventListener('click', () => {
        const userInput = document.querySelector("#bet").value // Get user input
        let multiplier = document.querySelector("#multiplier").value // Get multiplier value
        document.querySelector("#coins-value").innerHTML = coins // Alter assigned value to HTML element
        
        // Game engine,
        const race = () => {
            let i = 580 // iterator
            const intervalId = setInterval(() => {
                document.querySelector("#svg_4").x.baseVal.value = i-= 10;

                if (i < 10) {
                    let yVal = document.querySelector("#svg_4").y.baseVal.value;
                    if (offsetY < (yVal + 45) && offsetY > yVal) { 
                        if (userInput > coins) {
                            alert("You don't have enough coins!")
                        } else if (userInput != 0 && userInput <= coins) {
                            coins = coins + (userInput * multiplier)
                        }
                    } else {
                        if (userInput != 0 && userInput <= coins) {
                            coins = coins - (userInput * multiplier)
                        } else if (userInput > coins) {
                            alert("You don't have enough coins!")
                        }
                    }
                    clearInterval(intervalId) 
                }
            }, 1);
        }
        
        let parent = document.querySelector('html > body > div > svg');
        let child = document.querySelector("#svg_4")
        
        cubeGenerator(randomPosition()) // Call cubeGenerator with randomPosition() as it's argument.
        race()
        
        parent.removeChild(child) // Remove last generated cube
    }) 
}
