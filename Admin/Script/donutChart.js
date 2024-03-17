//donut chart

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Orders', 'Deliveries per Week'],
    ['On Delivery',     20],
   
    ['Cancelled',  6],
     ['Delivered',      30]
  ]);

  var options = {
    title: 'Order Summary',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}