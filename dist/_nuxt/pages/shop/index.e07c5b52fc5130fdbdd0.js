webpackJsonp([2],{"59tJ":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("cASu"),a=e("m2DC"),o=!1;var s=function(t){o||e("yx70")},r=e("VU/8")(n.a,a.a,!1,s,null,null);r.options.__file="pages/shop/index.vue",i.default=r.exports},cASu:function(t,i,e){"use strict";i.a={data:function(){return{containerWidth:null}},methods:{updateWidth:function(){this.$refs.imgContainer[0]&&(console.log("123"),this.containerWidth=this.$refs.imgContainer[0].clientWidth)}},mounted:function(){this.updateWidth();var t=this;window.addEventListener("resize",function(){t.updateWidth()})}}},hmDK:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".shop-container{min-height:400px}.img-container{width:100%;padding-bottom:100%;margin-bottom:30px;position:relative;overflow:hidden}.img-container:hover .overlay{display:block;opacity:1}.img-container:hover .overlay-info{display:block;cursor:pointer;opacity:1}.img-thumb{width:100%}.overlay{background-color:rgba(0,0,0,.3);padding-bottom:100%;z-index:11}.overlay,.overlay-info{opacity:0;width:100%;position:absolute;-webkit-transition:width 2s;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.overlay-info{z-index:12}.item-title-main{letter-spacing:4px;font-style:italic;text-transform:uppercase;color:#fff;font-weight:600;font-size:40px}.item-price-main{color:#fff;font-size:30px}.img-container-child{position:absolute;width:100%;z-index:-10}",""])},m2DC:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row font-custom"},t._l(t.$store.state.shopItems,function(i){return e("div",{key:i.itemName,staticClass:"col-md-4"},[e("transition",{attrs:{name:"fade",appear:""}},[i.visible?e("div",{ref:"imgContainer",refInFor:!0,staticClass:"img-container"},[e("nuxt-link",{attrs:{to:i.url}},[e("div",{staticClass:"overlay-info text-center d-flex align-items-center",style:{height:t.containerWidth+"px"}},[e("div",{staticClass:"w-100 text-center"},[e("span",{staticClass:"item-title-main"},[t._v(t._s(i.itemName))]),e("br"),e("span",{staticClass:"item-price-main"},[t._v(t._s(i.price))])])]),e("div",{staticClass:"overlay"}),e("div",{staticClass:"img-container-child"},[e("img",{staticClass:"img-thumb",attrs:{src:i.itemImg,alt:""}})])])],1):t._e()])],1)}))])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},yx70:function(t,i,e){var n=e("hmDK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("7695155e",n,!1,{sourceMap:!1})}});