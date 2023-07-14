var screen = document.getElementById("screen");
var container=document.getElementsByClassName("calculator-container")
var rows=document.getElementsByClassName("line-one")
screen.value = "0";
var flag = false;
function change(x) {
    if (flag == false) {
        screen.value = x;
        flag = true;
    }
    else {
        screen.value+=x;
    }
}
function percentage(sybl) {
    screen.value += sybl;
    setTimeout(() => {
        let num = parseFloat(parseFloat(screen.value) / 100);
       return screen.value = num;
    },200)
}
function deleting() {
    if (screen.value.length == 1) {
        screen.value = "0";
    }
    else {
        screen.value = screen.value.slice(0, screen.value.length - 1);
    }
}
function reseting() {
    screen.value = 0
    flag = false;
}
function evaluating() {
    try {
        var result = eval(screen.value)
        screen.value = result;
        console.log(result);
        if (screen.value==="NaN") {
            setTimeout(reseting, 2000);
        }
    } catch (error) {
        screen.value = "Undefined";
        setTimeout(reseting,2000)
    }
    
}
function changeColour() {
    var arr = [`AliceBlue`,
  `AntiqueWhite`,
  `Aqua`,
  `Aquamarine`,
  `Azure`,
  `Beige`,
  `Bisque`,
  `Black`,
  `BlanchedAlmond`,
  `Blue`,
  `BlueViolet`,
  `Brown`,
  `BurlyWood`,
  `CadetBlue`,
  `Chartreuse`,
  `Chocolate`,
  `Coral`,
  `CornflowerBlue`,
  `Cornsilk`,
  `Crimson`,
  `Cyan`,
  `DarkBlue`,
  `DarkCyan`,
  `DarkGoldenRod`,
  `DarkGray`,
  `DarkGrey`,
  `DarkGreen`,
  `DarkKhaki`,
  `DarkMagenta`,
  `DarkOliveGreen`,
  `Darkorange`,
  `DarkOrchid`,
  `DarkRed`,
  `DarkSalmon`,
  `DarkSeaGreen`,
  `DarkSlateBlue`,
  `DarkSlateGray`,
  `DarkSlateGrey`,
  `DarkTurquoise`,
  `DarkViolet`,
  `DeepPink`,
  `DeepSkyBlue`,
  `DimGray`,
  `DimGrey`,
  `DodgerBlue`,
  `FireBrick`,
  `FloralWhite`,
  `ForestGreen`,
  `Fuchsia`,
  `Gainsboro`,
  `GhostWhite`,
  `Gold`,
  `GoldenRod`,
  `Gray`,
  `Grey`,
  `Green`,
  `GreenYellow`,
  `HoneyDew`,
  `HotPink`,
  `IndianRed`,
  `Indigo`,
  `Ivory`,
  `Khaki`,
  `Lavender`,
  `LavenderBlush`,
  `LawnGreen`,
  `LemonChiffon`,
  `LightBlue`,
  `LightCoral`,
  `LightCyan`,
  `LightGoldenRodYellow`,
  `LightGray`,
  `LightGrey`,
  `LightGreen`,
  `LightPink`,
  `LightSalmon`,
  `LightSeaGreen`,
  `LightSkyBlue`,
  `LightSlateGray`,
  `LightSlateGrey`,
  `LightSteelBlue`,
  `LightYellow`,
  `Lime`,
  `LimeGreen`,
  `Linen`,
  `Magenta`,
  `Maroon`,
  `MediumAquaMarine`,
  `MediumBlue`,
  `MediumOrchid`,
  `MediumPurple`,
  `MediumSeaGreen`,
  `MediumSlateBlue`,
  `MediumSpringGreen`,
  `MediumTurquoise`,
  `MediumVioletRed`,
  `MidnightBlue`,
  `MintCream`,
  `MistyRose`,
  `Moccasin`,
  `NavajoWhite`,
  `Navy`,
  `OldLace`,
  `Olive`,
  `OliveDrab`,
  `Orange`,
  `OrangeRed`,
  `Orchid`,
  `PaleGoldenRod`,
  `PaleGreen`,
  `PaleTurquoise`,
  `PaleVioletRed`,
  `PapayaWhip`,
  `PeachPuff`,
  `Peru`,
  `Pink`,
  `Plum`,
  `PowderBlue`,
  `Purple`,
  `Red`,
  `RosyBrown`,
  `RoyalBlue`,
  `SaddleBrown`,
  `Salmon`,
  `SandyBrown`,
  `SeaGreen`,
  `SeaShell`,
  `Sienna`,
  `Silver`,
  `SkyBlue`,
  `SlateBlue`,
  `SlateGray`,
  `SlateGrey`,
  `Snow`,
  `SpringGreen`,
  `SteelBlue`,
  `Tan`,
  `Teal`,
  `Thistle`,
  `Tomato`,
  `Turquoise`,
  `Violet`,
  `Wheat`,
  `White`,
  `WhiteSmoke`,
  `Yellow`,
  `YellowGreen`];
    var x = Math.floor(Math.random() * arr.length);
    var y = arr[x];
    container[0].style.backgroundColor = y;
    rows[0].style.backgroundColor = y;
}
let bgwhite = true;
function toggledisplay() {
    if (bgwhite) {
        reseting()
        screen.style.backgroundColor = "#1e1e1e";
        bgwhite = false;
    }
    else {
        screen.style.backgroundColor = "#FFF";
        bgwhite = true;
    }
}