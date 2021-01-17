export function createAppendData(graphEl, trace_idx) {
  return (text, x, y, z) => {
    graphEl.data[trace_idx].text.push(text);
    graphEl.data[trace_idx].x.push(x);
    graphEl.data[trace_idx].y.push(y);
    graphEl.data[trace_idx].z.push(z);

    Plotly.redraw(graphEl);
  };
}
