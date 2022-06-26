function populateTimeZones()
{
    var min = -12, 
    max = +12,
    select = document.getElementById("timezone_select");
    
    for (var i = min; i<=max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = "UTC" + (i<0?"":"+") + i;
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
        var orig_start_time = parseInt(element.getAttribute("data-start"));
        var orig_end_time = parseInt(element.getAttribute("data-end"));
        
        console.log(orig_date + " " + orig_start_time);
        
        var new_time = orig_start_time + timeZone;
        var new_date = orig_date;
        
        var new_end_date = orig_date;
        var new_end_time = orig_end_time + timeZone;
        
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
        
        if (new_end_time < 0)
        {
            new_end_date--;
            new_end_time += 24;
        }
        if (new_end_time >= 24)
        {
            new_end_date++;
            new_end_time -= 24;
        }
        
        new_html = new_time + ":00 - ";
        // if (new_end_date != new_date)
        // {
        //     new_html += "December " + new_end_date + ", ";
        // }
        new_html += new_end_time + ":00";
        
        
        // new_html += '&nbsp;&nbsp;<span style="font-size: small;">(Selected time zone: UTC' + (timeZone<0?"":"+") + timeZone + ')</span>';
        
        element.innerHTML = new_html;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateTimeZones();
    setTimeZone();
    adaptTime();
    });
