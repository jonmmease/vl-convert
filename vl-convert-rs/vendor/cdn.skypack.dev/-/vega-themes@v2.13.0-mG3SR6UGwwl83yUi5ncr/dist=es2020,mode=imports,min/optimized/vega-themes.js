var G="vega-themes",I="2.13.0",M="Themes for stylized Vega and Vega-Lite visualizations.",J=["vega","vega-lite","themes","style"],O="BSD-3-Clause",U={name:"UW Interactive Data Lab",url:"https://idl.cs.washington.edu"},V=[{name:"Emily Gu",url:"https://github.com/emilygu"},{name:"Arvind Satyanarayan",url:"http://arvindsatya.com"},{name:"Jeffrey Heer",url:"https://idl.cs.washington.edu"},{name:"Dominik Moritz",url:"https://www.domoritz.de"}],_="build/vega-themes.js",H="build/vega-themes.module.js",Q="build/vega-themes.min.js",R="build/vega-themes.min.js",K="build/vega-themes.module.d.ts",N={type:"git",url:"https://github.com/vega/vega-themes.git"},Z=["src","build"],ee={prebuild:"yarn clean",build:"rollup -c",clean:"rimraf build && rimraf examples/build","copy:data":"rsync -r node_modules/vega-datasets/data/* examples/data","copy:build":"rsync -r build/* examples/build","deploy:gh":"yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples",preversion:"yarn lint",serve:"browser-sync start -s -f build examples --serveStatic examples",start:"yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",format:"eslint . --fix",lint:"eslint .",release:"release-it"},te={"@babel/core":"^7.21.4","@babel/plugin-transform-runtime":"^7.21.4","@babel/preset-env":"^7.21.4","@babel/preset-typescript":"^7.21.4","@release-it/conventional-changelog":"^5.1.1","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.2","@rollup/plugin-terser":"^0.4.1","@typescript-eslint/eslint-plugin":"^5.59.0","@typescript-eslint/parser":"^5.59.0","browser-sync":"^2.29.1",concurrently:"^8.0.1",eslint:"^8.38.0","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier":"^4.2.1","gh-pages":"^5.0.0",prettier:"^2.8.7","release-it":"^15.10.1",rollup:"^3.20.6","rollup-plugin-bundle-size":"^1.0.3","rollup-plugin-ts":"^3.2.0",typescript:"^5.0.4",vega:"^5.24.0","vega-lite":"^5.7.1"},le={vega:"*","vega-lite":"*"},oe={},ie={name:G,version:I,description:M,keywords:J,license:O,author:U,contributors:V,main:_,module:H,unpkg:Q,jsdelivr:R,types:K,repository:N,files:Z,scripts:ee,devDependencies:te,peerDependencies:le,dependencies:oe};const d="#fff",y="#888",ae={background:"#333",view:{stroke:y},title:{color:d,subtitleColor:d},style:{"guide-label":{fill:d},"guide-title":{fill:d}},axis:{domainColor:d,gridColor:y,tickColor:d}},l="#4572a7",re={background:"#fff",arc:{fill:l},area:{fill:l},line:{stroke:l,strokeWidth:2},path:{stroke:l},rect:{fill:l},shape:{stroke:l},symbol:{fill:l,strokeWidth:1.5,size:50},axis:{bandPosition:.5,grid:!0,gridColor:"#000000",gridOpacity:1,gridWidth:.5,labelPadding:10,tickSize:5,tickWidth:.5},axisBand:{grid:!1,tickExtra:!0},legend:{labelBaseline:"middle",labelFontSize:11,symbolSize:50,symbolType:"square"},range:{category:["#4572a7","#aa4643","#8aa453","#71598e","#4598ae","#d98445","#94aace","#d09393","#b9cc98","#a99cbc"]}},o="#30a2da",m="#cbcbcb",se="#999",ne="#333",v="#f0f0f0",z="#333",de={arc:{fill:o},area:{fill:o},axis:{domainColor:m,grid:!0,gridColor:m,gridWidth:1,labelColor:se,labelFontSize:10,titleColor:ne,tickColor:m,tickSize:10,titleFontSize:14,titlePadding:10,labelPadding:4},axisBand:{grid:!1},background:v,group:{fill:v},legend:{labelColor:z,labelFontSize:11,padding:1,symbolSize:30,symbolType:"square",titleColor:z,titleFontSize:14,titlePadding:10},line:{stroke:o,strokeWidth:2},path:{stroke:o,strokeWidth:.5},rect:{fill:o},range:{category:["#30a2da","#fc4f30","#e5ae38","#6d904f","#8b8b8b","#b96db8","#ff9e27","#56cc60","#52d2ca","#52689e","#545454","#9fe4f8"],diverging:["#cc0020","#e77866","#f6e7e1","#d6e8ed","#91bfd9","#1d78b5"],heatmap:["#d6e8ed","#cee0e5","#91bfd9","#549cc6","#1d78b5"]},point:{filled:!0,shape:"circle"},shape:{stroke:o},bar:{binSpacing:2,fill:o,stroke:null},title:{anchor:"start",fontSize:24,fontWeight:600,offset:20}},i="#000",ce={group:{fill:"#e5e5e5"},arc:{fill:i},area:{fill:i},line:{stroke:i},path:{stroke:i},rect:{fill:i},shape:{stroke:i},symbol:{fill:i,size:40},axis:{domain:!1,grid:!0,gridColor:"#FFFFFF",gridOpacity:1,labelColor:"#7F7F7F",labelPadding:4,tickColor:"#7F7F7F",tickSize:5.67,titleFontSize:16,titleFontWeight:"normal"},legend:{labelBaseline:"middle",labelFontSize:11,symbolSize:40},range:{category:["#000000","#7F7F7F","#1A1A1A","#999999","#333333","#B0B0B0","#4D4D4D","#C9C9C9","#666666","#DCDCDC"]}},fe=22,ge="normal",D="Benton Gothic, sans-serif",S=11.5,be="normal",a="#82c6df",C="Benton Gothic Bold, sans-serif",x="normal",B=13,c={"category-6":["#ec8431","#829eb1","#c89d29","#3580b1","#adc839","#ab7fb4"],"fire-7":["#fbf2c7","#f9e39c","#f8d36e","#f4bb6a","#e68a4f","#d15a40","#ab4232"],"fireandice-6":["#e68a4f","#f4bb6a","#f9e39c","#dadfe2","#a6b7c6","#849eae"],"ice-7":["#edefee","#dadfe2","#c4ccd2","#a6b7c6","#849eae","#607785","#47525d"]},pe={background:"#ffffff",title:{anchor:"start",color:"#000000",font:C,fontSize:fe,fontWeight:ge},arc:{fill:a},area:{fill:a},line:{stroke:a,strokeWidth:2},path:{stroke:a},rect:{fill:a},shape:{stroke:a},symbol:{fill:a,size:30},axis:{labelFont:D,labelFontSize:S,labelFontWeight:be,titleFont:C,titleFontSize:B,titleFontWeight:x},axisX:{labelAngle:0,labelPadding:4,tickSize:3},axisY:{labelBaseline:"middle",maxExtent:45,minExtent:45,tickSize:2,titleAlign:"left",titleAngle:0,titleX:-45,titleY:-11},legend:{labelFont:D,labelFontSize:S,symbolType:"square",titleFont:C,titleFontSize:B,titleFontWeight:x},range:{category:c["category-6"],diverging:c["fireandice-6"],heatmap:c["fire-7"],ordinal:c["fire-7"],ramp:c["fire-7"]}},r="#ab5787",p="#979797",ue={background:"#f9f9f9",arc:{fill:r},area:{fill:r},line:{stroke:r},path:{stroke:r},rect:{fill:r},shape:{stroke:r},symbol:{fill:r,size:30},axis:{domainColor:p,domainWidth:.5,gridWidth:.2,labelColor:p,tickColor:p,tickWidth:.2,titleColor:p},axisBand:{grid:!1},axisX:{grid:!0,tickSize:10},axisY:{domain:!1,grid:!0,tickSize:0},legend:{labelFontSize:11,padding:1,symbolSize:30,symbolType:"square"},range:{category:["#ab5787","#51b2e5","#703c5c","#168dd9","#d190b6","#00609f","#d365ba","#154866","#666666","#c4c4c4"]}},s="#3e5c69",he={background:"#fff",arc:{fill:s},area:{fill:s},line:{stroke:s},path:{stroke:s},rect:{fill:s},shape:{stroke:s},symbol:{fill:s},axis:{domainWidth:.5,grid:!0,labelPadding:2,tickSize:5,tickWidth:.5,titleFontWeight:"normal"},axisBand:{grid:!1},axisX:{gridWidth:.2},axisY:{gridDash:[3],gridWidth:.4},legend:{labelFontSize:11,padding:1,symbolType:"square"},range:{category:["#3e5c69","#6793a6","#182429","#0570b0","#3690c0","#74a9cf","#a6bddb","#e2ddf2"]}},e="#1696d2",E="#000000",me="#FFFFFF",u="Lato",F="Lato",Ce="Lato",Fe="#DEDDDD",ke=18,f={"main-colors":["#1696d2","#d2d2d2","#000000","#fdbf11","#ec008b","#55b748","#5c5859","#db2b27"],"shades-blue":["#CFE8F3","#A2D4EC","#73BFE2","#46ABDB","#1696D2","#12719E","#0A4C6A","#062635"],"shades-gray":["#F5F5F5","#ECECEC","#E3E3E3","#DCDBDB","#D2D2D2","#9D9D9D","#696969","#353535"],"shades-yellow":["#FFF2CF","#FCE39E","#FDD870","#FCCB41","#FDBF11","#E88E2D","#CA5800","#843215"],"shades-magenta":["#F5CBDF","#EB99C2","#E46AA7","#E54096","#EC008B","#AF1F6B","#761548","#351123"],"shades-green":["#DCEDD9","#BCDEB4","#98CF90","#78C26D","#55B748","#408941","#2C5C2D","#1A2E19"],"shades-black":["#D5D5D4","#ADABAC","#848081","#5C5859","#332D2F","#262223","#1A1717","#0E0C0D"],"shades-red":["#F8D5D4","#F1AAA9","#E9807D","#E25552","#DB2B27","#A4201D","#6E1614","#370B0A"],"one-group":["#1696d2","#000000"],"two-groups-cat-1":["#1696d2","#000000"],"two-groups-cat-2":["#1696d2","#fdbf11"],"two-groups-cat-3":["#1696d2","#db2b27"],"two-groups-seq":["#a2d4ec","#1696d2"],"three-groups-cat":["#1696d2","#fdbf11","#000000"],"three-groups-seq":["#a2d4ec","#1696d2","#0a4c6a"],"four-groups-cat-1":["#000000","#d2d2d2","#fdbf11","#1696d2"],"four-groups-cat-2":["#1696d2","#ec0008b","#fdbf11","#5c5859"],"four-groups-seq":["#cfe8f3","#73bf42","#1696d2","#0a4c6a"],"five-groups-cat-1":["#1696d2","#fdbf11","#d2d2d2","#ec008b","#000000"],"five-groups-cat-2":["#1696d2","#0a4c6a","#d2d2d2","#fdbf11","#332d2f"],"five-groups-seq":["#cfe8f3","#73bf42","#1696d2","#0a4c6a","#000000"],"six-groups-cat-1":["#1696d2","#ec008b","#fdbf11","#000000","#d2d2d2","#55b748"],"six-groups-cat-2":["#1696d2","#d2d2d2","#ec008b","#fdbf11","#332d2f","#0a4c6a"],"six-groups-seq":["#cfe8f3","#a2d4ec","#73bfe2","#46abdb","#1696d2","#12719e"],"diverging-colors":["#ca5800","#fdbf11","#fdd870","#fff2cf","#cfe8f3","#73bfe2","#1696d2","#0a4c6a"]},ye={background:me,title:{anchor:"start",fontSize:ke,font:u},axisX:{domain:!0,domainColor:E,domainWidth:1,grid:!1,labelFontSize:12,labelFont:F,labelAngle:0,tickColor:E,tickSize:5,titleFontSize:12,titlePadding:10,titleFont:u},axisY:{domain:!1,domainWidth:1,grid:!0,gridColor:Fe,gridWidth:1,labelFontSize:12,labelFont:F,labelPadding:8,ticks:!1,titleFontSize:12,titlePadding:10,titleFont:u,titleAngle:0,titleY:-10,titleX:18},legend:{labelFontSize:12,labelFont:F,symbolSize:100,titleFontSize:12,titlePadding:10,titleFont:u,orient:"right",offset:10},view:{stroke:"transparent"},range:{category:f["six-groups-cat-1"],diverging:f["diverging-colors"],heatmap:f["diverging-colors"],ordinal:f["six-groups-seq"],ramp:f["shades-blue"]},area:{fill:e},rect:{fill:e},line:{color:e,stroke:e,strokeWidth:5},trail:{color:e,stroke:e,strokeWidth:0,size:1},path:{stroke:e,strokeWidth:.5},point:{filled:!0},text:{font:Ce,color:e,fontSize:11,align:"center",fontWeight:400,size:11},style:{bar:{fill:e,stroke:null}},arc:{fill:e},shape:{stroke:e},symbol:{fill:e,size:30}},n="#3366CC",W="#ccc",h="Arial, sans-serif",ve={arc:{fill:n},area:{fill:n},path:{stroke:n},rect:{fill:n},shape:{stroke:n},symbol:{stroke:n},circle:{fill:n},background:"#fff",padding:{top:10,right:10,bottom:10,left:10},style:{"guide-label":{font:h,fontSize:12},"guide-title":{font:h,fontSize:12},"group-title":{font:h,fontSize:12}},title:{font:h,fontSize:14,fontWeight:"bold",dy:-3,anchor:"start"},axis:{gridColor:W,tickColor:W,domain:!1,grid:!0},range:{category:["#4285F4","#DB4437","#F4B400","#0F9D58","#AB47BC","#00ACC1","#FF7043","#9E9D24","#5C6BC0","#F06292","#00796B","#C2185B"],heatmap:["#c6dafc","#5e97f6","#2a56c6"]}},k=Y=>Y*(1/3+1),A=k(9),T=k(10),w=k(12),g="Segoe UI",P="wf_standard-font, helvetica, arial, sans-serif",$="#252423",b="#605E5C",q="transparent",ze="#C8C6C4",t="#118DFF",De="#12239E",Se="#E66C37",xe="#6B007B",Be="#E044A7",Ee="#744EC2",We="#D9B300",Ae="#D64550",L=t,j="#DEEFFF",X=[j,L],Te=[j,"#c7e4ff","#b0d9ff","#9aceff","#83c3ff","#6cb9ff","#55aeff","#3fa3ff","#2898ff",L],we={view:{stroke:q},background:q,font:g,header:{titleFont:P,titleFontSize:w,titleColor:$,labelFont:g,labelFontSize:T,labelColor:b},axis:{ticks:!1,grid:!1,domain:!1,labelColor:b,labelFontSize:A,titleFont:P,titleColor:$,titleFontSize:w,titleFontWeight:"normal"},axisQuantitative:{tickCount:3,grid:!0,gridColor:ze,gridDash:[1,5],labelFlush:!1},axisBand:{tickExtra:!0},axisX:{labelPadding:5},axisY:{labelPadding:10},bar:{fill:t},line:{stroke:t,strokeWidth:3,strokeCap:"round",strokeJoin:"round"},text:{font:g,fontSize:A,fill:b},arc:{fill:t},area:{fill:t,line:!0,opacity:.6},path:{stroke:t},rect:{fill:t},point:{fill:t,filled:!0,size:75},shape:{stroke:t},symbol:{fill:t,strokeWidth:1.5,size:50},legend:{titleFont:g,titleFontWeight:"bold",titleColor:b,labelFont:g,labelFontSize:T,labelColor:b,symbolType:"circle",symbolSize:75},range:{category:[t,De,Se,xe,Be,Ee,We,Ae],diverging:X,heatmap:X,ordinal:Te}},Pe=ie.version;export{ae as dark,re as excel,de as fivethirtyeight,ce as ggplot2,ve as googlecharts,pe as latimes,we as powerbi,ue as quartz,ye as urbaninstitute,Pe as version,he as vox};export default null;