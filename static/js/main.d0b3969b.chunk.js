(this["webpackJsonpmaximus-calculator"]=this["webpackJsonpmaximus-calculator"]||[]).push([[0],{82:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),c=a(11),s=a.n(c),r=a(29),o=a(33),h=a(49),l=a(109),j=a(119),d=a(122),b=a(114),u=a(120),O=a(121),g=a(115),v=a(116),f=a(112),x=a(113),D=a(85),m=a(117),p=a(118),C=a(110),M=a(111),y=a(56),I=a.n(y),F=a(2),k=Object(l.a)((function(t){return{root:{width:"100%"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}}));var R=function(t){var e=k(),a=t.attack;return Object(F.jsxs)(p.a,{className:e.heading,children:[Object(F.jsx)(C.a,{expandIcon:Object(F.jsx)(I.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(F.jsxs)(D.a,{children:["Damage Total: ",a.TotalDamage]})}),Object(F.jsx)(M.a,{children:Object(F.jsxs)("div",{children:[Object(F.jsxs)(D.a,{children:["Bludgeoning: ",a.Bludgeoning]}),a.Force>0&&Object(F.jsxs)(D.a,{children:["Force: ",a.Force]}),a.Radiant>0&&Object(F.jsxs)(D.a,{children:["Radiant: ",a.Radiant]})]})})]})},T=Object(l.a)((function(t){return{strike:{textDecorationStyle:"linethrough"}}}));var G=function(t){T();var e=t.attack;return null===e?Object(F.jsx)(F.Fragment,{}):Object(F.jsx)(m.a,{width:"20%",children:Object(F.jsx)(f.a,{variant:"outlined",children:Object(F.jsxs)(x.a,{children:[Object(F.jsxs)(D.a,{children:["To hit (",e.AttackDice[0]," ",e.AttackDice[1]>0&&Object(F.jsxs)("span",{children:[",",Object(F.jsx)("span",{style:{textDecoration:"line-through"},children:e.AttackDice[1]})]})," + ",e.TO_HIT,"): ",e.ToHit,e.IsCrit&&Object(F.jsx)("span",{style:{fontWeight:"bold"},children:" CRITICAL HIT!"}),e.IsFail&&Object(F.jsx)("span",{style:{fontWeight:"bold"},children:" CRITICAL MISS!"})]}),!e.IsFail&&Object(F.jsx)(R,{attack:e})]})})})},A=a(57),P=a(58),_=a(13),w=a(14),B="norm";function N(t){return Math.floor(Math.random()*t+1)}function E(){return N(4)}function S(){return N(6)}function H(){return N(8)}function U(){return N(20)}var W=Object(w.a)("CalcToHit"),J=Object(w.a)("CalcFistDamage"),L=Object(w.a)("CalcDivineFuryDamage"),V=Object(w.a)("CalcGiantsMightDamage"),Y=Object(w.a)("CalcPotionOfGrowthDamage"),z=Object(w.a)("CalcEldritchMaulDamage"),q=Object(w.a)("CalcRageDamage"),K=Object(w.a)("CalcRadiantConsumption");function Q(){var t=-1;if(this.state.advantage===B)t=U(),this.AttackDice[0]=t;else{var e=[U(),U()];"adv"===this.state.advantage?(t=Math.max.apply(Math,e),e.sort((function(t,e){return e-t}))):(t=Math.min.apply(Math,e),e.sort((function(t,e){return t-e}))),this.AttackDice=e}20===t?this.IsCrit=!0:1===t&&(this.IsFail=!0),this.ToHit=t+this.TO_HIT}function X(){var t=H();if(this.FistDice[0]=t,this.Bludgeoning+=t,this.IsCrit){var e=H();this.FistDice[1]=e,this.Bludgeoning+=e}this.Bludgeoning+=this.TO_DMG}function Z(){if(this.state.divineFury){var t=S();if(this.DivineFuryDice[0]=t,this.Radiant+=t,this.IsCrit){var e=S();this.DivineFuryDice[1]=e,this.Radiant+=e}this.Radiant+=this.DIVINE_FURY_DMG}}function $(){if(this.state.giantsMight){var t=S();if(this.GiantsMightDice[0]=t,this.Bludgeoning+=t,this.IsCrit){var e=S();this.GiantsMightDice[1]=e,this.Bludgeoning+=e}}}function tt(){if(this.state.potionOfGrowth){var t=E();if(this.PotionOfGrowthDice[0]=t,this.Bludgeoning+=t,this.IsCrit){var e=E();this.PotionOfGrowthDice[1]=e,this.Bludgeoning+=e}}}function et(){if(this.state.eldritchMaul){var t=S();if(this.EldritchMaulDice[0]=t,this.Force+=t,this.IsCrit){var e=S();this.EldritchMaulDice[1]=e,this.Force+=e}}}function at(){this.state.rage&&(this.Bludgeoning+=this.RAGE_DMG)}function it(){this.state.radiantConsumption&&(this.Radiant+=this.RADIANT_CONSUMPTION_DMG)}var nt=function(){function t(e){Object(A.a)(this,t),Object.defineProperty(this,K,{value:it}),Object.defineProperty(this,q,{value:at}),Object.defineProperty(this,z,{value:et}),Object.defineProperty(this,Y,{value:tt}),Object.defineProperty(this,V,{value:$}),Object.defineProperty(this,L,{value:Z}),Object.defineProperty(this,J,{value:X}),Object.defineProperty(this,W,{value:Q}),this.state=e,this.TO_HIT=13,this.TO_DMG=9,this.DIVINE_FURY_DMG=4,this.RAGE_DMG=2,this.RADIANT_CONSUMPTION_DMG=11,this.IsCrit=!1,this.IsFail=!1,this.ToHit=0,this.TotalDamage=0,this.Bludgeoning=0,this.Force=0,this.Radiant=0,this.AttackDice=[0,0],this.FistDice=[0,0],this.GiantsMightDice=[0,0],this.PotionOfGrowthDice=[0,0],this.EldritchMaulDice=[0,0],this.DivineFuryDice=[0,0]}return Object(P.a)(t,[{key:"doAttack",value:function(){Object(_.a)(this,W)[W](),Object(_.a)(this,J)[J](),Object(_.a)(this,q)[q](),Object(_.a)(this,z)[z](),Object(_.a)(this,Y)[Y](),Object(_.a)(this,L)[L](),Object(_.a)(this,V)[V](),Object(_.a)(this,K)[K](),this.TotalDamage=this.Bludgeoning+this.Radiant+this.Force}}]),t}(),ct={advantage:B,divineFury:!1,rage:!1,giantsMight:!1,eldritchMaul:!1,radiantConsumption:!1,potionOfGrowth:!1},st=Object(l.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));var rt=function(){var t=n.a.useState(null),e=Object(h.a)(t,2),a=e[0],i=e[1],c=st(),s=n.a.useState(ct),l=Object(h.a)(s,2),f=l[0],x=l[1],D=function(t){x(Object(o.a)(Object(o.a)({},f),{},Object(r.a)({},t.target.name,t.target.checked)))};return Object(F.jsxs)("div",{className:c.root,children:[Object(F.jsx)("div",{className:c.root,children:Object(F.jsxs)(u.a,{component:"fieldset",children:[Object(F.jsx)(O.a,{component:"legend",children:"Advantage / Disadvantage"}),Object(F.jsxs)(d.a,{"aria-label":"Advantage",name:"Advantage",value:f.advantage,onChange:function(t){x(Object(o.a)(Object(o.a)({},f),{},Object(r.a)({},t.target.name,t.target.value)))},children:[Object(F.jsx)(b.a,{value:B,control:Object(F.jsx)(j.a,{}),name:"advantage",label:"None"}),Object(F.jsx)(b.a,{value:"adv",control:Object(F.jsx)(j.a,{}),name:"advantage",label:"Advantage"}),Object(F.jsx)(b.a,{value:"disadv",control:Object(F.jsx)(j.a,{}),name:"advantage",label:"Disadvantage"})]}),Object(F.jsx)("br",{}),Object(F.jsx)(O.a,{component:"legend",children:"Modifiers"}),Object(F.jsx)("br",{}),Object(F.jsx)(O.a,{component:"legend",children:"Every hit"}),Object(F.jsx)(b.a,{control:Object(F.jsx)(g.a,{checked:f.rage,onChange:D,name:"rage"}),label:"Rage (+2 bludgeoning)"}),Object(F.jsx)(b.a,{control:Object(F.jsx)(g.a,{checked:f.eldritchMaul,onChange:D,name:"eldritchMaul"}),label:"Eldritch Maul (+1d6 force)"}),Object(F.jsx)(b.a,{control:Object(F.jsx)(g.a,{checked:f.potionOfGrowth,onChange:D,name:"potionOfGrowth"}),label:"Potion of Growth (+1d4 bludegoning)"}),Object(F.jsx)("br",{}),Object(F.jsx)(O.a,{component:"legend",children:"Once per turn"}),Object(F.jsx)(b.a,{control:Object(F.jsx)(g.a,{checked:f.divineFury,onChange:D,name:"divineFury"}),label:"Divine Fury (+1d6+4 radiant)"}),Object(F.jsx)(b.a,{control:Object(F.jsx)(g.a,{checked:f.giantsMight,onChange:D,name:"giantsMight"}),label:"Giants Might (+1d6 bludgeoning)"}),Object(F.jsx)(b.a,{control:Object(F.jsx)(g.a,{checked:f.radiantConsumption,onChange:D,name:"radiantConsumption"}),label:"Radiant Consumption (+11 radiant)"}),Object(F.jsx)("br",{}),Object(F.jsxs)("div",{className:c.root,children:[Object(F.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){var t=new nt(f);t.doAttack(),i(t)},children:"Roll"}),Object(F.jsx)(v.a,{variant:"contained",onClick:function(){x(ct),i(null)},children:"Reset"})]})]})}),Object(F.jsx)("div",{children:Object(F.jsx)(G,{attack:a})})]})};var ot=function(){return Object(F.jsx)("div",{children:Object(F.jsx)(rt,{})})};a(81);s.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(ot,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d0b3969b.chunk.js.map