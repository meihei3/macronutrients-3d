const color_palette = {
  p: '#F00',
  c: '#0F0',
  f: '#FF0',
};

const hovertemplate =
  '<b>%{text}</b><br><br>' +
  `<span>Protein: %{x} g</span><br>` +
  `<span>Carbohydrates: %{y} g</span><br>` +
  `<span>Fat: %{z} g</span>`;

const trace1 = {
  text: [],
  x: [],
  y: [],
  z: [],
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
    bgcolor: '#FFF',
    font: {
      color: '#555',
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
