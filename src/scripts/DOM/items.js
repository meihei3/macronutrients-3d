// import getData from '../utils/parser';
import { appendData, dropData } from '../PlotlyJs/PlotlyJs';

// 外部からデータをロードしたい
const data = [{ name: 'test', x: 5, y: 5, z: 5 }];

const createSwitchDisplayData = (el) => {
  let flg = true;
  return () => {
    if (flg) {
      appendData(el.name, el.x, el.y, el.z);
    } else {
      dropData(el.name);
    }
    flg = !flg;
  };
};

data.forEach((el) => {
  const a = document.createElement('a');
  a.classList.add('card', 'horizontal', 'link-card', 'blue-grey-text');
  a.innerText = el.name;

  const div = document.createElement('div');
  div.classList.add('col', 's12', 'm4');
  div.appendChild(a);
  div.addEventListener('click', createSwitchDisplayData(el));

  document.getElementById('items').appendChild(div);
});
