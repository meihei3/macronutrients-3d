/**
 * appendData関数を生成する．
 *
 * @param {HTMLElement} graphEl グラフのElement
 * @param {Int} trace_idx 対象traceのindex
 */
export function createAppendData(graphEl, trace_idx) {
  /**
   * グラフに要素を追加する．
   *
   * @function appendData
   * @param {String} text 対象のテキスト
   * @param {Float} x タンパク質
   * @param {Float} y 炭水化物
   * @param {Float} z 脂質
   */
  const f = (text, x, y, z) => {
    graphEl.data[trace_idx].text.push(text);
    graphEl.data[trace_idx].x.push(x);
    graphEl.data[trace_idx].y.push(y);
    graphEl.data[trace_idx].z.push(z);

    Plotly.redraw(graphEl);
  };

  return f;
}

/**
 * dropData関数を生成する．
 *
 * @param {HTMLElement} graphEl グラフのElement
 * @param {Int} trace_idx 対象traceのindex
 */
export function createDropData(graphEl, trace_idx) {
  /**
   * グラフから要素を削除する．textが重複する場合上手く動作しないと思われる．
   *
   * @function dropData
   * @param {String} text 対象のテキスト
   */
  const dropData = (text) => {
    const index = graphEl.data[trace_idx].text.indexOf(text);
    if (index >= 0) {
      graphEl.data[trace_idx].text.splice(index, 1);
      graphEl.data[trace_idx].x.splice(index, 1);
      graphEl.data[trace_idx].y.splice(index, 1);
      graphEl.data[trace_idx].z.splice(index, 1);

      Plotly.redraw(graphEl);
    }
  };

  return dropData;
}
