google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Тонн Cu', { role: 'style' } ],
          ['2020', 8540,'color: green'],
          ['2021', 10100,'color: green' ],
          ['2022', 12500,'color: green']
        ]);

        var options = {
          chart: {
            title: 'Производительность компании',
            subtitle: 'Планируемая годовая добыча меди: 2020-2022, (тонн меди)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }