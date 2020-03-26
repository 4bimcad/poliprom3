google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Ounces Ag', { role: 'style' } ],
          ['2020', 1050113,'color: gray'],
          ['2021', 1100200,'color: gray' ],
          ['2022', 1300200,'color: gray']
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Planned Annual Production of the Silver: 2020-2022',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }