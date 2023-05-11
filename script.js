let choice = 16;


//Create grid containers to hold the grids
function parentGrids(choicePlaceholder){
    let i = 0;
    const container = document.querySelector('#container1');
    console.log('received data '+ choicePlaceholder)
    while (i < choicePlaceholder){

        const gridRow = document.createElement('div');
        gridRow.classList.add('gridParent');
    
        container.appendChild(gridRow);
        console.log(i);
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
            console.log('NEW GRIDS CREATED');  
    
    
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
    
    console.log(gridNodeList);
    console.log(gridParentNodeList);

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
    Input any number below 100`,));

    if(newChoice == false){//sort this out later, when you click cancel, it should return bye!.
        alert(`Your input is not a valid number,
    please try again`)
        return;
    }else if(newChoice > 100){
        alert(`The number you input is ${newChoice},
    which is clearly more than 100,
    please try again`)
    }else{
        removeGrids();    
        updateDisplaySize(newChoice);
        parentGrids(newChoice);
        grid16(newChoice);
        hoverEffect();
    }

    
})