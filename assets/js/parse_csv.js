var data;

function cb(csvdata) {

	data = csvdata;


    
	console.log(data)
}
function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

parseData("/data/names.csv", cb);

function findEmailByName(name) {

    	// for(var i=0; i < csvdata.length; i++){    		
		//     if(csvdata[i][0] == name){
		//        return csvdata[i][1]; 
		//     }
		// }
	}
const email = findEmailByName('exampleName2');

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}