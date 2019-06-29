console.log(data);
// YOUR CODE HERE
var trace1 = {
    x: data.map(row => row.Region),
    y: data.map(row => row.Avg2015_2018),
    // text: data.map(row => row.greekName),
    name: "Average",
    type: "bar"
  };


  
  // Combining both traces
  var data = [trace1];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Average Happiness",
    barmode: ""
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);