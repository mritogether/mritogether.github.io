function populateTimeZones()
{
    var min = -12, 
    max = +12,
    select = document.getElementById("timezone_select");
    
    for (var i = min; i<=max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = "GMT" + (i<0?"":"+") + i;
        select.appendChild(opt);
    }
}

function setTimeZone()
{
    var optionBox = document.getElementById("timezone_select");
    var date = new Date();
    var offset = date.getTimezoneOffset();
    console.log(offset);
    optionBox.value = Math.round(-offset/60);
}

function adaptTime()
{
    var optionBox = document.getElementById("timezone_select");
    var timeZone = parseInt(optionBox.value);
    console.log("Time zone value: " + timeZone);
    
    Array.from(document.getElementsByClassName("timezone_adapt")).forEach(function (element) {
        var orig_date = parseInt(element.getAttribute("data-date"));
        var orig_time = parseInt(element.getAttribute("data-time"));
        
        console.log(orig_date + " " + orig_time);
        
        var new_time = orig_time + timeZone;
        var new_date = orig_date;
        if (new_time < 0)
        {
            new_date--;
            new_time += 24;
        }
        if (new_time >= 24)
        {
            new_date++;
            new_time -= 24;
        }
        
        element.innerHTML = "December " + new_date + ", " + new_time + ":00";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateTimeZones();
    setTimeZone();
    adaptTime();
    });
