import getData from '../utils/parser';
import { appendData, dropData } from '../PlotlyJs/PlotlyJs';

// 外部からデータをロードしたい
const data_json_url =
  'https://raw.githubusercontent.com/yameholo/macronutrients-3d/master/dist/data.json';

const createSwitchDisplayData = (el) => {
  let flg = true;
  return () => {
    if (flg) {
      appendData(el.name, el.p, el.f, el.c);
    } else {
      dropData(el.name);
    }
    flg = !flg;
  };
};

const createItems = (data) => {
  data.forEach((el) => {
    console.log(el);
    const a = document.createElement('a');
    a.classList.add('collection-item', 'waves-effect', 'waves-teal');
    a.innerText = el.name;

    a.addEventListener('click', createSwitchDisplayData(el));
    a.addEventListener('click', () => a.classList.toggle('active'));

    document.getElementById('items').appendChild(a);
  });
};

getData(data_json_url)
  .then((data) => createItems(data))
  .catch((err) => console.log(err));
