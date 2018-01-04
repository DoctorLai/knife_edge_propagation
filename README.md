# knife_edge_propagation
Basic Knife Edge Propagation Engine based on http://www.mike-willis.com/Tutorial/PF7.htm

## Installation
```
npm install knife_edge_propagation
```

## Usage
```
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
```

Output:
```
51.63977794943222
47.16508524476248
47.21603696049556
54.81818181818182
```

## Tests
```
npm test
```

## Online Tool
You may also like [this tool: Free Space Path Loss Calculator with API](https://propagationtools.com/wireless/free-space-path-loss-calculator-with-api/).

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Author
* © Released under the [MIT License](http://spdx.org/licenses/MIT.html).
* Authored and maintained by [@justyy](https://steemit.com/@justyy) with help from contributors ([list](https://www.npmjs.com/package/knife_edge_propagation/access)).
    * Email: dr.zhihua.lai@gmail.com
    * Github: [github.com/doctorlai](https://github.com/doctorlai)
    * Twitter: [doctorzlai](https://twitter.com/doctorzlai)
    * Blog: [helloacm](https://helloacm.com)
    * Blog: [codingforspeed](https://codingforspeed.com)
    * Blog: [justyy](https://justyy.com)
    * Others: [weibomiaopai](https://weibomiaopai.com)
    * Others: [rot47](https://rot47.net)
    * Others: [uploadbeta](https://uploadbeta.com)
    * Others: [isvbscriptdead](https://isvbscriptdead.com)
    * Others: [happyukgo](https://happyukgo.com)
    * Others: [propagationtools](https://propagationtools.com)
    * Others: [steakovercooked](https://steakovercooked.com)
    