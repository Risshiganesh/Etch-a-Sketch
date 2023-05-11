let choice = 16;


//Create grid containers to hold the grids
function parentGrids(choicePlaceholder){
    let i = 0;
    const container = document.querySelector('#container1');

    while (i < choicePlaceholder){

        const gridRow = document.createElement('div');
        gridRow.classList.add('gridParent');
    
        container.appendChild(gridRow);
        i++;
    }
}


parentGrids(choice);




//Create the small grids that will be placed in the parent grid containers
function grid16(choicePlaceholder){
    const gridParentNodelist = document.querySelectorAll('.gridParent');

    gridParentNodelist.forEach((grid) => {

        let j = 0;  

        while(j < choicePlaceholder){
            
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('grid');

    
            grid.appendChild(gridColumn);
    
    
            j++
        }
          
    
    });
            
    
};

grid16(choice);

//Hover effect for the small grids

function hoverEffect (){
    const gridNodeList = document.querySelectorAll('.grid');

    gridNodeList.forEach((grid) =>{
        grid.addEventListener("mouseover", function(){
            grid.classList.add('hoverColor');
        })
    }) 
}

hoverEffect();


//Continue here tomorrow - Find a way to remove all grids so that your button can create new divs.
//https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb

function removeGrids () {
    const gridNodeList = document.querySelectorAll('.grid')
    const gridParentNodeList = document.querySelectorAll('.gridParent');


    for (each of gridParentNodeList){
        each.remove();
    }

}

//Updates new grid size to the DOM

function updateDisplaySize(newChoicePlaceholder) {
    const getGridSizeDisplay = document.querySelector('#gridSize');

    getGridSizeDisplay.textContent = `Grid size: ${newChoicePlaceholder} x ${newChoicePlaceholder}`;
}




//Button to input new grid size and restart all functions with new input number
const mainButton = document.querySelector('#promptButton');

mainButton.addEventListener('click', function(){
    let newChoice = Number(prompt(`How many grids would you like?
Input any number below 100.`,));

    console.log(newChoice);

    if(newChoice == false){//sort this out later, when you click cancel, it should return bye!.
        alert(`Your input is not valid,
please try again.`);
        return;
    }else if(newChoice > 100){
        alert(`The number you input is ${newChoice},
which is clearly more than 100,
please try again.`)
    }else{
        removeGrids();    
        updateDisplaySize(newChoice);
        parentGrids(newChoice);
        grid16(newChoice);
        hoverEffect();
    }

    
});






// This function adds 10% black shade over a grid every time the cursor hovers over it 
function addBlackShade (){
    const gridNodeList = document.querySelectorAll('.grid');

    gridNodeList.forEach((grid) =>{

        let k = 0.1; // This was the tricky part*******
                     // Every grid will start with this value of shading when a mouseover event occurs,
                     // Each grid will have it's own 'k' variable and value. And they will increment differently depending
                     // on which grid gets hovered over.

                     //If I declare the k variable inside the event listener's callback function, each mouseover, will 
                     //redeclare k's value to 0.1.

        grid.addEventListener("mouseover", function(){
            
            if(k < 1){
                
                grid.style.backgroundColor = `rgba(0, 0, 0, ${k})`;  

                k = k + 0.1;
                
                return;
            
            }else{
                
                return;
            
            }
        })
    })

}


//Click the button to enable rgb pixel mode
const colorButton = document.querySelector('#rgbButton');

colorButton.addEventListener('click', finalColorFunction); //In case you forget what you're doing here, you are reference the function you made below.


function finalColorFunction(){

    const grids = document.querySelectorAll('.grid');

    

    grids.forEach((eachGrid) => {

        const MAX_RGB_VALUE = 255;

        const RGB_10_PERCENT = ((10/100)*255);

        //console.log(RGB_10_PERCENT);

        let m = 0;

        eachGrid.addEventListener("mouseover", function(){

            if(m <= 255){
            let randomValueForR = Math.floor((Math.floor(((Math.random())+0.1)*10))*RGB_10_PERCENT);
            let randomValueForG = Math.floor((Math.floor(((Math.random())+0.1)*10))*RGB_10_PERCENT);
            let randomValueForB = Math.floor((Math.floor(((Math.random())+0.1)*10))*RGB_10_PERCENT);
            
            //let randomValueTest = Math.floor((Math.floor(((Math.random())+0.1)*10))*RGB_10_PERCENT);
            //console.log('R value: '+randomValueForR);   
            //console.log('G value: '+randomValueForG);  
            //console.log('B value: '+randomValueForB); 

            //console.log('Random value: '+randomValueTest);

            randomValueForR = (randomValueForR - m);
            randomValueForG = (randomValueForG - m);
            randomValueForB = (randomValueForB - m);

            //console.log('M value: '+m);
    
            eachGrid.style.backgroundColor = `rgba(${randomValueForR}, ${randomValueForG}, ${randomValueForB})`;

            

            m = m + RGB_10_PERCENT;
            }else{
                return;
            }

            

            
        })

    })

}





//Hover over the rgbButton to see color changing effect
colorButton.addEventListener('mouseover', changeColor);

function changeColor (){
    let randomValueForR = Math.floor((Math.floor(((Math.random())+0.1)*10))*25.5);
    let randomValueForG = Math.floor((Math.floor(((Math.random())+0.1)*10))*25.5);
    let randomValueForB = Math.floor((Math.floor(((Math.random())+0.1)*10))*25.5);
            
    
    colorButton.style.backgroundColor =  `rgba(${randomValueForR}, ${randomValueForG}, ${randomValueForB})`;
}