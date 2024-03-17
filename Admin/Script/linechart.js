//Line chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Incomes', 'Expenses'],
    ['Jan',  100,      200],
    ['Feb',  170,      160],
    ['March',  500,    370],
    ['April',  400,    380],
    ['May',  430,      400]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}