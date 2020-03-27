google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Tons Zn', { role: 'style' } ],
          ['2020', 14700,'color: #1f1e1b'],
          ['2021', 16000,'color: #1f1e1b' ],
          ['2022', 18750,'color: #1f1e1b']
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Planned Annual Production of the Zinc: 2020-2022 (ton)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }