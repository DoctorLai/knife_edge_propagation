var knife_edge = require('knife_edge_propagation'),
	knife_edge_compute_v = knife_edge.knife_edge_compute_v,
	knife_edge_compute_pathloss = knife_edge.knife_edge_compute_pathloss,
	knife_edge_compute_pathloss_lee = knife_edge.knife_edge_compute_pathloss_lee,	
	knife_edge_compute_h = knife_edge.knife_edge_compute_h;
	
var d1 = 15;
var d2 = 25;
var h = 5;
var r = 0.002;
var v = knife_edge_compute_v(d1, d2, h, r);
var p1 = knife_edge_compute_pathloss(v);
var p2 = knife_edge_compute_pathloss_lee(v);

console.log(v);
console.log(p1);
console.log(p2);

console.log(knife_edge_compute_h(10, 100, 5, 60, 7));