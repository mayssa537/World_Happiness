d3.csv("https://raw.githubusercontent.com/mayssa537/World_Happiness/master/CSVs/2018.csv", function(data) {
  data.forEach(function(d) {
    d["Happiness Score"] = +d["Happiness Score"];
  });

  var countryIndex = 0;
  function setColor(index) {
    if (index == -1) {
      return "#D3D3D3";
      
    } 

    if (data[index]["Happiness Score"] < 3.6) {
      return "#eff3ff";
    }
    else if (data[index]["Happiness Score"] < 4.3) {
      return "#c6dbef";
    }
    else if (data[index]["Happiness Score"] < 4.9) {
      return "#9ecae1";
    }
    else if (data[index]["Happiness Score"] < 5.6) {
      return "#6baed6";
    }
    else if (data[index]["Happiness Score"] < 6.3) {
      return "#4292c6";
    }  
    else if (data[index]["Happiness Score"] < 7.0) {
      return "#2171b5";
    }  
    return "#084594";
    
  }


  function getIndex(name) {
    for (i = 0; i < data.length; i++) {
      if(name == data[i].Country) {
        return i;
      }
    }
    
    return -1;
  } 

  L.geoJSON(countries, {
    style: function(feature) {
      countryIndex = getIndex(feature.properties.name);

      return {
        fillColor: setColor(countryIndex), // Default color of countries.
        fillOpacity: 1,
        stroke: true,
        color: "grey", // Lines in between countries.
        weight: 2
      };
    }
  }).bindPopup(function(layer) {
      countryIndex = getIndex(layer.feature.properties.name);
     if (countryIndex == -1) {
       return layer.feature.properties.name;
     }

     return `${layer.feature.properties.name} <br> Score: ${data[countryIndex]["Happiness Score"]}`;
  }).addTo(map);

  var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    var grades = [0, 3.6, 4.3, 4.9, 5.6, 6.3, 7.0];
    var colors = ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

 
});

