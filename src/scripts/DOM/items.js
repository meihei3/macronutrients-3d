import getData from '../utils/parser';
import { appendData, dropData } from '../PlotlyJs/PlotlyJs';

/**
 * グラフに表示・非表示を行う関数を生成する
 *
 * @param {HTMLElement} el
 */
const createSwitchDisplayData = (el) => {
  let flg = true;
  return () => {
    if (flg) {
      appendData(el.foodName, el.prot, el.fat, el.chocdf);
    } else {
      dropData(el.foodName);
    }
    flg = !flg;
  };
};

/**
 * データからアイテムリストのDOM生成する
 *
 * @param {Array} data
 * @param {String} parent_id
 */
const createItems = (data, parent_id) => {
  data.forEach((el) => {
    const a = document.createElement('a');
    a.classList.add('collection-item', 'waves-effect', 'waves-teal');
    a.innerText = el.foodName;

    a.addEventListener('click', createSwitchDisplayData(el));
    a.addEventListener('click', () => a.classList.toggle('active'));

    const parent = document.getElementById(parent_id);
    parent.classList.add('collection');
    parent.appendChild(a);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  // 現状問題ないが、念の為、親となるDOMのロードを待つ
  setTimeout(() => {
    for (let i = 1; i < 19; i++) {
      getData(
        `https://raw.githubusercontent.com/yameholo/macronutrients-3d/master/dist/data-min/group${i}.json`
      )
        .then((data) => createItems(data, `food-group-${i}`))
        .catch((err) => console.log(err));
    }
  }, 10);
});
