Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function a(){var e=isNaN(arguments[0])?1:Number(arguments[0]);return e?Array.prototype.reduce.call(this,function(r,t){return Array.isArray(t)?r.push.apply(r,a.call(t,e-1)):r.push(t),r},[]):Array.prototype.slice.call(this)},writable:!0}),Array.prototype.flatMap||Object.defineProperty(Array.prototype,"flatMap",{configurable:!0,value:function(a){return Array.prototype.map.apply(this,arguments).flat()},writable:!0});export default null;