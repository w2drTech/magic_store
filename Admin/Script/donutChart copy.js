//donut chart

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Women Cloths',     24],
    ['Men Cloths',      21],
    ['Shoe',  6],
    ['Others', 5]
  ]);

  var options = {
    title: 'Order Statistics',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart.draw(data, options);
}