"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[540],{5540:(S,c,s)=>{s.r(c),s.d(c,{PlanetsModule:()=>Z});var o=s(6895),l=s(3060),t=s(4650),g=s(6590),d=s(8298),u=s(6271),m=s(4859),h=s(4850),f=s(7048),i=s(3546);function v(e,p){if(1&e&&(t.ynx(0),t.TgZ(1,"div",4)(2,"mat-card",5)(3,"mat-card-header")(4,"mat-card-title"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-content"),t._UZ(7,"mat-divider"),t._uU(8),t._UZ(9,"mat-divider"),t.qZA(),t.TgZ(10,"mat-card-actions")(11,"button",6),t._uU(12,"VIEW"),t.qZA()()()(),t.BQk()),2&e){const n=p.$implicit;t.xp6(5),t.Oqu(n.name),t.xp6(3),t.hij(" ",n.terrain," ")}}function x(e,p){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2),t.YNc(2,v,13,2,"ng-container",3),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.results.results)}}const P=[{path:"",component:(()=>{class e{constructor(){this.apiService=(0,t.f3M)(g.s),this.results=null,this.count=0,this.pageSize=u.I}ngAfterViewInit(){(new Map).set("format","json"),this.apiService.executeGet({url:d.J.planets}).subscribe({next:a=>{this.count=a.count,this.results=a}})}getDirect(n){this.apiService.getDirect(n).subscribe({next:a=>{this.results=a}})}onPageChange(n){(n?.previousPageIndex||0==n?.previousPageIndex)&&n.previousPageIndex<n.pageIndex?this.results.next&&this.getDirect(this.results.next):n?.previousPageIndex&&n.previousPageIndex>n.pageIndex&&this.results.previous&&this.getDirect(this.results.previous)}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-planets"]],decls:2,vars:3,consts:[["aria-label","Select Planet Page",3,"length","pageSize","page"],[4,"ngIf"],[1,"responsive-grid"],[4,"ngFor","ngForOf"],[2,"padding-right","1rem","padding-left","1rem"],[1,"example-card"],["mat-stroked-button","","color","primary"]],template:function(a,r){1&a&&(t.TgZ(0,"mat-paginator",0),t.NdJ("page",function(y){return r.onPageChange(y)}),t.qZA(),t.YNc(1,x,3,1,"ng-container",1)),2&a&&(t.Q6J("length",r.count)("pageSize",r.pageSize),t.xp6(1),t.Q6J("ngIf",r.results))},dependencies:[o.sg,o.O5,m.lW,h.d,f.NW,i.a8,i.hq,i.dn,i.dk,i.n5],styles:["mat-card{width:100%;padding:12px}.responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:2rem}"]})}return e})()}];let C=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(P),l.Bz]})}return e})();var I=s(9272);let Z=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[o.ez,C,I._]})}return e})()}}]);