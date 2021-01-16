const trace1 = {
  text: ['a', 'b', 'c', 'd', 'e'],
  x: [5, 3, 8, 9, 4],
  y: [1.2, 7.2, 4.2, 3.2, 8.2],
  z: [5.2, 3.4, 8.1, 9.2, 2.4],
  mode: 'markers',
  marker: {
    size: 8,
    color: 'rgba(17, 217, 217, 0.7)',
    line: {
      color: 'rgb(77, 77, 250)',
      width: 3,
    },
  },
  type: 'scatter3d',
};

const data = [trace1];

const layout = {
  title: 'Macronutrients',
  scene: {
    xaxis: {
      title: 'タンパク質',
    },
    yaxis: {
      title: '炭水化物',
    },
    zaxis: {
      title: '脂質',
    },
  },
};

Plotly.newPlot('app', data, layout);
