google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Tons Cu', { role: 'style' } ],
          ['2020', 8540,'color: green'],
          ['2021', 10100,'color: green' ],
          ['2022', 12500,'color: green']
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Planned Annual Production of the Copper: 2020-2022 (ton)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }