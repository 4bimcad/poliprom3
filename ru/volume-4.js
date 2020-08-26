google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Тонн Pb', { role: 'style' } ],
          ['2020', 12250,'color: brown'],
          ['2021', 13000,'color: brown' ],
          ['2022', 13750,'color: brown']
        ]);

        var options = {
          chart: {
            title: 'Производительность компании',
            subtitle: 'Планируемая годовая добыча свинца: 2020-2022, (тонн свинца)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }