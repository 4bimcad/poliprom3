google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Ounces Au', { role: 'style' }],
          ['2020', 11575, 'color: gold'],
          ['2021', 13000, 'color: gold' ],
          ['2022', 15575, 'color: gold']
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Planned Annual Production of the Gold: 2020-2022',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }