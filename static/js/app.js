var url="/graphs"


function buildPlot() {
  d3.json(url, function(error, response) {

    console.log(response);
    var trace = {
      type: "bar",
      mode: "lines",
      name: "Scores",
      x: response.map(data => data.x),
      y: response.map(data => data.y),
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace];

    var layout = {
      title: "Happiness Score by Region"
    };

    Plotly.newPlot("plot", data, layout);
  });
}


buildPlot();