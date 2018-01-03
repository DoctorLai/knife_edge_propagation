var should = require('chai').should(),
    knife_edge = require('../index'),
    knife_edge_compute_v = knife_edge.knife_edge_compute_v,
    knife_edge_compute_pathloss = knife_edge.knife_edge_compute_pathloss,
    knife_edge_compute_pathloss_lee = knife_edge.knife_edge_compute_pathloss_lee, 
    knife_edge_compute_h = knife_edge.knife_edge_compute_h;

describe('knife_edge_compute_v', function() {
  it('knife_edge_compute_v', function() {
    knife_edge_compute_v(15, 25, 5, 0.002).should.be.closeTo(51.6397, 1e-2);
  }); 
});

describe('knife_edge_compute_pathloss', function() {
  it('knife_edge_compute_pathloss', function() {
    knife_edge_compute_pathloss(51.6397).should.be.closeTo(47.165, 1e-2);
  });
});

describe('knife_edge_compute_pathloss_lee', function() {
  it('knife_edge_compute_pathloss_lee', function() {
    knife_edge_compute_pathloss_lee(51.6397).should.be.closeTo(47.216, 1e-2);
  });
});

describe('knife_edge_compute_h', function() {
  it('knife_edge_compute_h', function() {
    knife_edge_compute_h(10, 100, 5, 60, 7).should.be.closeTo(54.818, 1e-2);
  });
});
