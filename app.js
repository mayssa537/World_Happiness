var url="/db/countries.sql"


function buildPlot() {
  d3.json(url).then(function(response) {

    console.log(response);
    var trace = {
      type: "bar",
      mode: "lines",
      name: "Score by Region",
      x: response.map(data => data.region),
      y: response.map(data => data['Average Score']),
      line: {
        color: "#17BECF"
      }
    };

//     var data = [trace];

//     var layout = {
//       title: "Bigfoot Sightings Per Year",
//       xaxis: {
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);
//   });
// }

// buildPlot();