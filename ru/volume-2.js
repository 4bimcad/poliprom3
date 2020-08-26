google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Унций Ag', { role: 'style' } ],
          ['2020', 1050113,'color: gray'],
          ['2021', 1100200,'color: gray' ],
          ['2022', 1300200,'color: gray']
        ]);

        var options = {
          chart: {
            title: 'Производительность компании',
            subtitle: 'Планируемая годовая добыча серебра: 2020-2022, (унций золота)',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }