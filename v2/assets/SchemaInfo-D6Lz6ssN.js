import{o as e}from"./motion-BtDFqjAV.js";import{Ar as t,Et as n,I as r,Kn as i,Lt as a,Or as o,Tt as s,Ut as c,a as l,an as u,dn as d,fn as f,gt as p,hn as m,jt as h,rn as g,wr as _}from"./app-BJBOnTyW.js";import{c as v,l as y,r as b,s as x}from"./openapi-C_W_DB0s.js";import{n as S,r as C,t as w}from"./Popover-JhZdpPst.js";import{t as T}from"./Markdown-Cg2Y60Sz.js";import{t as E}from"./Badge-B7zKrzT-.js";import{t as D}from"./slugify-bXvLWs_E.js";import{c as O,i as k,l as A,n as j,r as M,s as N,t as P}from"./Item-DF2pfSMV.js";import{n as F,t as I}from"./Card-BtTjrp4A.js";import{t as L}from"./useWarmupSchema-wa9aVpJN.js";var R=e(),z=v(`
  query SchemaInfo($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      servers {
        url
        description
      }
      license {
        name
        url
        identifier
      }
      termsOfService
      externalDocs {
        description
        url
      }
      contact {
        name
        url
        email
      }
      description
      summary
      title
      url
      version
      tags {
        name
        description
        extensions
      }
      components {
        securitySchemes {
          name
          type
          description
          in
          paramName
          scheme
          bearerFormat
          openIdConnectUrl
          flows {
            implicit {
              authorizationUrl
              scopes {
                name
                description
              }
            }
            password {
              tokenUrl
              scopes {
                name
                description
              }
            }
            clientCredentials {
              tokenUrl
              scopes {
                name
                description
              }
            }
            authorizationCode {
              authorizationUrl
              tokenUrl
              scopes {
                name
                description
              }
            }
          }
        }
      }
      webhooks {
        name
        method
        summary
        description
      }
    }
  }
`),B=({href:e,icon:t,children:n})=>(0,R.jsxs)(`a`,{href:e,className:`inline-flex items-center gap-2 opacity-65 hover:opacity-100 [&_svg]:shrink-0 [&_svg]:size-3.5`,target:`_blank`,rel:`noopener noreferrer`,children:[t,(0,R.jsx)(`span`,{className:`truncate grow-0`,children:n})]}),V=({schema:e})=>{let t=!!(e.license||e.termsOfService||e.externalDocs),n=!!(e.contact?.name||e.contact?.email||e.contact?.url),i=e.servers.length>0;return(0,R.jsxs)(F,{className:`flex flex-col gap-3 text-sm`,children:[t&&(0,R.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[e.license&&(0,R.jsx)(B,{href:e.license.url??void 0,children:e.license.name}),e.termsOfService&&(0,R.jsx)(B,{href:e.termsOfService,children:`Terms of Service`}),e.externalDocs&&(0,R.jsx)(B,{href:e.externalDocs.url,children:e.externalDocs.description??`Documentation`})]}),t&&(n||i)&&(0,R.jsx)(r,{}),n&&(0,R.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,R.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Contact`}),e.contact?.name&&(0,R.jsx)(`span`,{children:e.contact.name}),e.contact?.email&&(0,R.jsx)(B,{href:`mailto:${e.contact.email}`,icon:(0,R.jsx)(g,{}),children:e.contact.email}),e.contact?.url&&(0,R.jsx)(B,{href:e.contact.url,icon:(0,R.jsx)(m,{}),children:e.contact.url})]}),n&&i&&(0,R.jsx)(r,{}),i&&(0,R.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,R.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Servers`}),e.servers.map(e=>(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`code`,{className:`text-xs select-all break-all`,children:e.url}),e.description&&(0,R.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:e.description})]},e.url))]})]})},H=e=>{switch(e){case`apiKey`:return(0,R.jsx)(d,{size:14});case`http`:return(0,R.jsx)(u,{size:14});case`oauth2`:return(0,R.jsx)(c,{size:14});case`openIdConnect`:return(0,R.jsx)(c,{size:14});case`mutualTLS`:return(0,R.jsx)(u,{size:14})}},U=e=>{switch(e.type){case`apiKey`:return`API Key in ${e.in??`header`} (${e.paramName??`key`})`;case`http`:return e.scheme===`bearer`?`Bearer token${e.bearerFormat?` (${e.bearerFormat})`:``}`:`HTTP ${e.scheme??`authentication`}`;case`oauth2`:return`OAuth 2.0 authorization`;case`openIdConnect`:return`OpenID Connect`;case`mutualTLS`:return`Mutual TLS authentication`}},W=({showInfoPage:e,redirectTo:r}={})=>{let{input:c,type:d,options:m}=x(),g=t(),{data:{schema:v}}=i(y(z,{input:c,type:d})),{title:F,description:B}=v,W=l(e=>e.isCollapsed);if(L(),!b(e,!!B)&&r)return(0,R.jsx)(o,{to:{pathname:r,search:g.search},replace:!0});let G=!!(v.contact?.name||v.contact?.email||v.contact?.url||v.servers.length>0||v.license||v.termsOfService||v.externalDocs),K=v.tags.flatMap(({name:e,description:t,extensions:n})=>e?{name:e,description:t,extensions:n}:[]);return(0,R.jsxs)(`div`,{className:`pt-(--padding-content-top)`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,R.jsx)(A,{name:`category`,children:F}),(0,R.jsxs)(p,{children:[F&&(0,R.jsx)(`title`,{children:F}),B&&(0,R.jsx)(`meta`,{name:`description`,content:B})]}),(0,R.jsxs)(`div`,{className:`mb-8 flex flex-col gap-4`,children:[(0,R.jsx)(O,{heading:F}),(0,R.jsxs)(`div`,{className:`grid grid-cols-1 xl:grid-cols-[1fr_minmax(250px,380px)] gap-8`,children:[G&&(0,R.jsx)(`div`,{className:`xl:hidden sticky top-(--top-nav-height) lg:top-(--scroll-padding) z-10 row-start-1 col-start-1 justify-self-end self-start`,children:(0,R.jsxs)(w,{children:[(0,R.jsx)(C,{asChild:!0,children:(0,R.jsx)(s,{variant:`outline`,size:`icon`,className:`shadow-sm rounded-full`,children:(0,R.jsx)(f,{})})}),(0,R.jsx)(S,{align:`end`,className:`xl:hidden w-full max-w-full md:max-w-sm`,children:(0,R.jsx)(V,{schema:v})})]})}),(0,R.jsxs)(`div`,{className:`flex flex-col gap-6 row-start-1 col-start-1`,children:[v.summary&&(0,R.jsx)(`p`,{className:`text-lg text-muted-foreground`,children:v.summary}),v.description&&(0,R.jsx)(T,{className:n(`prose-img:max-w-prose prose-sm max-w-full`,W?`lg:max-w-4xl`:`lg:max-w-2xl`),content:v.description}),K.length>1&&(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,R.jsx)(a,{size:14}),`Tags`]}),(0,R.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:K.map(e=>(0,R.jsx)(P,{variant:`outline`,asChild:!0,children:(0,R.jsx)(_,{to:D(e.name),children:(0,R.jsxs)(M,{children:[(0,R.jsx)(N,{children:e.extensions?.[`x-displayName`]??e.name}),e.description&&(0,R.jsx)(k,{asChild:!0,children:(0,R.jsx)(T,{components:{p:({children:e})=>e,a:e=>(0,R.jsx)(`span`,{...e})},content:e.description,className:`prose-sm text-pretty`})})]})})},e.name))})]}),!m?.disableSecurity&&(v.components?.securitySchemes?.length??0)>0&&(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,R.jsx)(u,{size:14}),`Security Schemes`]}),(0,R.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:v.components?.securitySchemes?.map(e=>(0,R.jsxs)(P,{variant:`outline`,children:[(0,R.jsxs)(M,{children:[(0,R.jsxs)(N,{className:`flex items-center gap-2`,children:[H(e.type),e.name]}),(0,R.jsx)(k,{asChild:!0,children:(0,R.jsx)(T,{content:e.description??U(e),className:`prose-sm text-pretty`,components:{p:({children:e})=>e,a:e=>(0,R.jsx)(`span`,{...e})}})})]}),(0,R.jsx)(j,{children:(0,R.jsx)(E,{variant:`muted`,className:`text-[10px] font-mono`,children:e.type})})]},e.name))})]}),v.webhooks.length>0&&(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,R.jsx)(h,{size:14}),`Webhooks`]}),(0,R.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:v.webhooks.map(e=>(0,R.jsxs)(P,{variant:`outline`,children:[(0,R.jsxs)(M,{children:[(0,R.jsx)(N,{children:e.name}),(e.summary||e.description)&&(0,R.jsx)(k,{children:e.summary??e.description})]}),(0,R.jsx)(j,{children:(0,R.jsx)(E,{variant:`muted`,className:`text-[10px] font-mono`,children:e.method})})]},`${e.name}-${e.method}`))})]})]}),G&&(0,R.jsx)(`div`,{className:`hidden xl:block`,children:(0,R.jsx)(I,{className:`sticky top-(--scroll-padding)`,children:(0,R.jsx)(V,{schema:v})})})]})]})]})};export{W as SchemaInfo};