export function createAppendData(graphEl, trace_idx) {
  return (text, x, y, z) => {
    graphEl.data[trace_idx].text.push(text);
    graphEl.data[trace_idx].x.push(x);
    graphEl.data[trace_idx].y.push(y);
    graphEl.data[trace_idx].z.push(z);

    Plotly.redraw(graphEl);
  };
}

export function createDropData(graphEl, trace_idx) {
  return (text) => {
    const index = graphEl.data[trace_idx].text.indexOf(text);
    if (index >= 0) {
      graphEl.data[trace_idx].text.splice(index, 1);
      graphEl.data[trace_idx].x.splice(index, 1);
      graphEl.data[trace_idx].y.splice(index, 1);
      graphEl.data[trace_idx].z.splice(index, 1);

      Plotly.redraw(graphEl);
    }
  };
}
