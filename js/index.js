// set up text to print, each item in array is new line
var aText = new Array(
    "lapeyron"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

var is_typing = false;

function typewriter() {
    is_typing = true;
    sContents = 'C';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementsByClassName("logo-c")[0];

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);

        }
        else {
            //destination.innerHTML = 'C';
            is_typing = false;
            iIndex = 0;
        }
    } else {
        setTimeout("typewriter()", iSpeed);

    }

}

typewriter();

document.addEventListener('click', function (e) {
    if (!is_typing) {
        typewriter();
    }
});

var logo_i = document.getElementsByClassName("logo-i")[0];
var color_tick = true;

setInterval(function () {
    if (color_tick) {
        logo_i.style.color = "#aaa";
        color_tick = false;
    }
    else {
        logo_i.style.color = "#ffa500";
        color_tick = true;
    }
}, 500)