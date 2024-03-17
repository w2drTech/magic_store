//bar column

google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Days", "NOs", { role: "style" } ],
    ["1", 10, "blue"],
    ["2", 8, "green"],
    ["3", 15, "blue"],
    ["4", 25, "green"],
    ["5", 30, "blue"],
    ["6", 28, "green"],
    ["7", 50, "blue"],
    ["8", 55, "green"],
    ["9", 70, "blue"],
    ["10", 80, "green"],
    ["11", 65, "blue"],
    ["12", 60, "green"],
    ["13", 52, "blue"],
    ["14", 40, "green"],
    ["15", 50, "blue"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Customers engaged per day",
    
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}