"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var x=q(function(D,y){
var p=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(r,e,a,f,n,o,m){var u,v,s,t,i;if(r<=0)return NaN;for(v=f,s=m,i=0;i<r&&n[s]!==0;i++)v+=a,s+=o;if(i===r)return NaN;if(u=e[v],p(u))return u;for(i+=1,i;i<r;i++)if(v+=a,s+=o,!n[s]){if(t=e[v],p(t))return t;(t>u||t===u&&E(t))&&(u=t)}return u}y.exports=O
});var k=q(function(F,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),P=x();function Z(r,e,a,f,n){var o=j(r,a),m=j(r,n);return P(r,e,a,o,f,n,m)}d.exports=Z
});var _=q(function(G,R){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),h=x();g(l,"ndarray",h);R.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),c,b=z(w(__dirname,"./native.js"));A(b)?c=B:c=b;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
