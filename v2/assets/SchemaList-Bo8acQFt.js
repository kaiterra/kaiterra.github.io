import{o as e}from"./motion-BtDFqjAV.js";import{Fn as t,Kn as n,Tt as r,c as i,gt as a,l as o,s}from"./app-BJBOnTyW.js";import{c,l,s as u}from"./openapi-C_W_DB0s.js";import{t as d}from"./Heading-CUeZvcSH.js";import{t as f}from"./Toc-DWphwLxu.js";import{t as p}from"./slugify-bXvLWs_E.js";import{c as m,l as h}from"./Item-DF2pfSMV.js";import{t as g}from"./SchemaView-C89poh2A.js";var _=e(),v=c(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function y(){let{input:e,type:c,versions:y,version:b,options:x}=u(),{data:S}=n(l(v,{input:e,type:c})),C=S.schema.title,w=S.schema.components?.schemas??[],T=Object.entries(y).length>1,E=x?.showVersionSelect===`always`||T&&x?.showVersionSelect!==`hide`;return w.length?(0,_.jsxs)(`div`,{className:`grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,_.jsx)(h,{name:`category`,children:C}),(0,_.jsxs)(a,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),(0,_.jsxs)(`div`,{className:`pt-(--padding-content-top) pb-(--padding-content-bottom)`,children:[(0,_.jsx)(m,{title:C,heading:`Schemas`}),(0,_.jsx)(`hr`,{className:`my-8`}),(0,_.jsx)(`div`,{className:`flex flex-col gap-y-5`,children:w.map(e=>(0,_.jsxs)(s,{className:`group`,defaultOpen:!0,children:[(0,_.jsxs)(d,{registerNavigationAnchor:!0,level:2,className:`flex items-center gap-1 justify-between w-fit`,id:p(e.name),children:[e.name,` `,(0,_.jsx)(o,{asChild:!0,children:(0,_.jsx)(r,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,_.jsx)(t,{size:16,className:`group-data-[state=open]:rotate-90 transition cursor-pointer`})})})]}),(0,_.jsx)(i,{className:`mt-4 CollapsibleContent`,children:(0,_.jsx)(g,{schema:e.schema,hideRootRef:!0})})]},e.name))})]}),(0,_.jsx)(f,{entries:w.map(e=>({id:p(e.name),text:e.name,depth:1}))})]}):(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(a,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),`No schemas found`]})}export{y as SchemaList};