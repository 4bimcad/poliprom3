google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Унций Au', { role: 'style' }],
          ['2020', 11575, 'color: gold'],
          ['2021', 13000, 'color: gold' ],
          ['2022', 15575, 'color: gold']
        ]);

        var options = {
          chart: {
            title: 'Производительность компании',
            subtitle: 'Планируемая годовая добыча золота: 2020-2022, (унций золота)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }