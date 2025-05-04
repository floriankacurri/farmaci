const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Konsulta', 'Recetat', 'Vaksinat', 'Të Tjera'],
    datasets: [{
      label: 'Numri i Shërbimeve te ofruara kete muaj',
      data: [120, 90, 60, 30],
      backgroundColor: [
        '#2d8f85',
        '#4db6ac',
        '#80cbc4',
        '#b2dfdb'
      ],
      borderColor: '#256f6c',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


