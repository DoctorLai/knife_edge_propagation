'use strict';

const knife_edge_compute_v = (d1, d2, h, r) => {
	return h * Math.sqrt(2 * (d1 + d2) / (r * d1 * d2));
}

const knife_edge_compute_pathloss = (v) => {
	if (v >= -0.7) {
		let t = Math.pow(v - 0.1, 2) + 1;
		return 6.9 + 20 * Math.log10(Math.sqrt(t + 1) + v - 0.1);
	}
	return 0;
}

const knife_edge_compute_pathloss_lee = (v) => {
	if (v > 2.4) return -20 * Math.log10(0.225 / v);
	if (v > 1.0) return -20 * Math.log10(0.4 - Math.sqrt(0.1184 - Math.pow(0.38 - 0.1 * v, 2)));
	if (v > 0) return -20 * Math.log10(0.5 * Math.exp(-0.95 * v));
	if (v > -0.8) return -20 * Math.log10(0.5 - 0.62 * v);
	return 0;
}

const knife_edge_compute_h = (d1, d2, h1, h2, h3) => {
	return h2 - h3 - (h1 - h3) * d2 / (d1 + d2);
}

module.exports = {
	knife_edge_compute_v, knife_edge_compute_pathloss, knife_edge_compute_pathloss_lee, knife_edge_compute_h
}
