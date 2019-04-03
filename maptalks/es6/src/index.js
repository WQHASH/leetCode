
// import * as maptalks from 'maptalks';
// import {ClusterLayer} from 'maptalks.markercluster';


import * as maptalks from 'maptalks';
//plugin's classes should be imported directly like
import { ThreeLayer } from 'maptalks.three';

const map = new maptalks.Map("map", {
  center : [0, 0],
  zoom : 1
});

const layer = new ThreeLayer('three');
console.log(maptalks,"maptalks");
console.log(ClusterLayer,"ClusterLayer");