const color_palette = {
  p: '#F88',
  c: '#8F8',
  f: '#FF8',
};

const hovertemplate =
  '<b>%{text}</b><br><br>' +
  `<span style="color:${color_palette.p}">Protein: %{x} g</span><br>` +
  `<span style="color:${color_palette.c}">Carbohydrates: %{y} g</span><br>` +
  `<span style="color:${color_palette.f}">Fat: %{z} g</span>`;

const trace1 = {
  text: ['a', 'b', 'c', 'd', 'e'],
  x: [5, 3, 8, 9, 4],
  y: [1.2, 7.2, 4.2, 3.2, 8.2],
  z: [5.2, 0, 8.1, 9.2, 2.4],
  mode: 'markers',
  opacity: 0.5,
  hovertemplate: hovertemplate,
  type: 'scatter3d',
};

const data = [trace1];

const layout = {
  title: 'Macronutrients',
  scene: {
    xaxis: {
      title: 'Protein',
      titlefont: {
        color: color_palette.p,
      },
      zerolinecolor: color_palette.p,
      rangemode: 'tozero',
      autorange: true,
    },
    yaxis: {
      title: 'Carbohydrates',
      titlefont: {
        color: color_palette.c,
      },
      zerolinecolor: color_palette.c,
      rangemode: 'tozero',
      autorange: true,
    },
    zaxis: {
      title: 'Fat',
      titlefont: {
        color: color_palette.f,
      },
      zerolinecolor: color_palette.f,
      rangemode: 'tozero',
      autorange: true,
    },
  },

  hoverlabel: {
    bgcolor: '#999',
    font: {
      color: '#FFF',
    },
  },
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0,
  },
};

const config = {
  responsive: true,
};

/**
 * @param {HTMLElement} graphEl
 */
const init = (graphEl) => {
  Plotly.newPlot(graphEl, data, layout, config);
};

export default init;
