google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Тонн Zn', { role: 'style' } ],
          ['2020', 14700,'color: #1f1e1b'],
          ['2021', 16000,'color: #1f1e1b' ],
          ['2022', 18750,'color: #1f1e1b']
        ]);

        var options = {
          chart: {
            title: 'Производительность компании',
            subtitle: 'Планируемая годовая добыча цинка: 2020-2022, (тонн цинка)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }