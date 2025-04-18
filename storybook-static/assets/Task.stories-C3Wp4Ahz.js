import{f as o}from"./index-DwI7NVpQ.js";import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";function A({task:{id:e,title:i,state:n},onArchiveTask:_,onPinTask:v}){return a.jsxs("div",{className:`list-item ${n}`,children:[a.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:n==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>_(e)})]}),a.jsx("label",{htmlFor:`title-${e}`,"aria-label":i,className:"title",children:a.jsx("input",{type:"text",value:i,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>v(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}A.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    id: string;
    title: string;
    state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'",elements:[{name:"literal",value:"'TASK_ARCHIVED'"},{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"}],required:!0}}]}},description:"Composition of the task"},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to archived"},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to pinned"}}};const h={onArchiveTask:o(),onPinTask:o()},S={component:A,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...h}},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...t.args.task,state:"TASK_PINNED"}}},r={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var k,T,g;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const N=["ActionsData","Default","Pinned","Archived"],x=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:h,Archived:r,Default:t,Pinned:s,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{t as D,A as T,x as a};
