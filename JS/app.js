//Instrukcje wyboru - 

let box = document.getElementById("result");

let color = "black"

switch (color) //nie stawiay warunku logicznego tylko pojedynczą zmienna 
//wewnątrz wykonują się wszystkie przypadki
//łatwo przrobić na if / if else    //0
{
    case "red": // if (color == red) //case 0
        box.style.backgroundColor = "red";
        box.style.color = "white";
        break; //zakończenie
    case "blue": // else if ( == ) //case 1
        box.style.backgroundColor = "blue";
        box.style.color = "white";
        break;
    case "green": // else if ( == )
        box.style.backgroundColor = "green";
        box.style.color = "white";
        break;
    default: //przypadek domyślny //else
        box.style.backgroundColor = "grey";
        box.style.color = "white";
        break;
}