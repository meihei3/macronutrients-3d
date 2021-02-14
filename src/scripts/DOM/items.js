// import getData from '../utils/parser';
import { appendData, dropData } from '../PlotlyJs/PlotlyJs';

// 外部からデータをロードしたい
const data = [
  {
    name: '７プレミアム セブンブレッド ６枚入',
    p: 6.0,
    f: 29.3,
    c: 3.2,
  },
  {
    name: 'リングビスケット３個入り',
    p: 4.2,
    f: 29.7,
    c: 7.2,
  },
  {
    name: 'フジ　焼きショコラ',
    p: 5.0,
    f: 48.3,
    c: 28.6,
  },
  {
    name: 'クロワッサン',
    p: 3.3,
    f: 19.7,
    c: 14.4,
  },
];

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

data.forEach((el) => {
  const a = document.createElement('a');
  a.classList.add('collection-item', 'waves-effect', 'waves-teal');
  a.innerText = el.name;

  a.addEventListener('click', createSwitchDisplayData(el));
  a.addEventListener('click', () => a.classList.toggle('active'));

  document.getElementById('items').appendChild(a);
});
