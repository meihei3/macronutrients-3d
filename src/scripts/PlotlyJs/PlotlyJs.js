import init from './init';
import { createAppendData, createDropData } from './wrapper';

const graphEl = document.getElementById('app');
const data_trace_index = 1; // 操作可能なデータのtraceのグラフに対するIndex

init(graphEl);

export const appendData = createAppendData(graphEl, data_trace_index);
export const dropData = createDropData(graphEl, data_trace_index);
