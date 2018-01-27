let btn = document.getElementById("btn");
let box = document.getElementById("box");
let colorRed = document.getElementById("colorRed");
let colorBlue = document.getElementById("colorBlue");
let colorGreen = document.getElementById("colorGreen");

function clearAll() 
    {
        document.getElementById("reset").reset();

    }

btn.addEventListener("click", setBoxColor);

function setBoxColor(event)
    {
        event.preventDefault();

        let colorRedInt = parseInt(colorRed.value);
        let colorGreenInt = parseInt(colorGreen.value);
        let colorBlueInt = parseInt(colorBlue.value);

        if (isNaN(colorRedInt) || isNaN(colorGreenInt) || isNaN(colorBlueInt))
        {
            alert("Thats not a number. Enter a number!")
        }
        else if (colorRedInt < 0 || colorRedInt > 255 || colorBlueInt < 0 || colorBlueInt > 255 || colorGreenInt < 0 || colorGreenInt > 255 )
        {
            alert("Number out of range. Enter a number between 0 and 255 only")
        }
        else 
        {
            box.style.backgroundColor = "rgb(" + colorRed.value + ", " + colorGreen.value + ", " + colorBlue.value+ ")";
        }
    }

