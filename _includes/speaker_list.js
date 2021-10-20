const speakerUrl = "https://mritogether.github.io/data/speaker_list.json";
const vipUrl = "https://mritogether.github.io/data/vip_list.json";

const N_OTHER_SPEAKERS = 5;
const REFRESH_INTERVAL = 10000;

var speakerList = [];
var vipList = [];

var randomElementList = []

function deduplicate(list)
{
    function isInList(l, element)
    {
        let output = false;
        if (element["name"].trim() == "") // remove empty elements
            return true
        l.forEach( function(el) {
            //console.log(el["name"], element["name"]);
            if (el["name"] == element["name"])
                output=true;
        });
        return output;
    }
    
    var outputList = [];
    list.forEach( function( originalElement ) {
        //console.log(originalElement["name"])
        if (!isInList(outputList, originalElement))
        {
            //console.log(originalElement);
            outputList.push(originalElement);
        }
    });
    //console.log(outputList);
    return outputList;
}
    

function loadSpeakerLists()
{
    $.getJSON(speakerUrl, function(data) {
        speakerList = deduplicate(data["speakers"]);
    }).done(function() {
        $.getJSON(vipUrl, function(data) {
            vipList = deduplicate(data["speakers"]);
        }).done(function() {
            updateSpeakerList();
            setInterval(updateSpeakerList, REFRESH_INTERVAL);
        });
    });
}

function getRandomElement(list)
{
    var randomElement;
    do
    {
       randomElement = Math.floor(Math.random()*list.length);
    } while (randomElementList.includes(randomElement))
    randomElementList.push(randomElement)
    return list[randomElement];
}

function createSpeakerText(element)
{
    return "<li><strong>" + element["name"] + "</strong> - " + element["affiliation"] + "</li>";
}

function updateSpeakerList()
{
    $("#speakerList").fadeOut( function() {
        $(this).empty();
        // VIP speaker
        $(this).append(createSpeakerText(getRandomElement(vipList)));
        randomElementList = []
        for (let i = 0; i < N_OTHER_SPEAKERS; i++)
        {
            $(this).append(createSpeakerText(getRandomElement(speakerList)));
        }
        $(this).fadeIn();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loadSpeakerLists();
    }); 
