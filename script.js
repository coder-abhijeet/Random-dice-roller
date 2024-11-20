function rollDice(){
    const noOfDice = document.getElementById("noOfDice").value;
    const rollDiceBtn = document.getElementById("rollDiceBtn");
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values=[];
    const images=[];

    

    for (let i=0; i<noOfDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/${value}.svg">`);        
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('');
    }
