google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Tons Pb', { role: 'style' } ],
          ['2020', 12250,'color: brown'],
          ['2021', 13000,'color: brown' ],
          ['2022', 13750,'color: brown']
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Planned Annual Production of the Lead: 2020-2022, (ton)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }