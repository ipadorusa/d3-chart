// util helper
import * as d3 from "d3";
const log = console.log;
const log2 = console.table;

const svgCheck = {
	'status' : !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect)
};
const d3Remove = target => d3.select(target).select("svg").remove();
const makecomma = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const sumTotal = (d, data) => {
	const total = d3.sum(data.map(dataItem => dataItem.value));
	const percent = Math.round(1e3 * d.data.value / total) / 10;
	return percent + '%';
}
// export
export {
	d3Remove,
	log,
	log2,
	makecomma,
	sumTotal,
	d3,
	svgCheck
}
