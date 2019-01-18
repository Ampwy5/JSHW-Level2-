// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

function buildTable (data) {
    tbody.html("")
    data.forEach((dataRow)=> {
        var row = tbody.append("tr")
        Object.values(dataRow).forEach(function(value) {
            var cell = row.append("td")
            cell.text(value) 

    });
        
  
}); 
}  
buildTable(tableData); 

var filterButton = d3.select("#filter-btn") 

filterButton.on("click", function() {
    d3.event.preventDefault()
    var date = d3.select("#datetime").property("value") 
    var city = d3.select("#cityname").property("value")
    var shape = d3.select("#shape").property("value")
    var country = d3.select("#country").property("value")
    var state = d3.select("#statename").property("value")
    var filterData = tableData 
    if (date) {
        filterData = filterData.filter(row => row.datetime === date) 

    }

    if (city) {
        filterData = filterData.filter(row => row.city === city)

    }

    if (shape) {
        filterData = filterData.filter(row => row.shape === shape)
    
    }

    if (country) {
        filterData = filterData.filter(row => row.country === country)
   
    }

    if (state) {
        filterData = filterData.filter(row => row.state === state)
    }




    buildTable(filterData);
 
}); 

