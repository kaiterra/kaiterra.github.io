const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./createServer-DGzMgzLx.js","./rolldown-runtime-CNC7AqOf.js","./app-BJBOnTyW.js","./motion-BtDFqjAV.js","./drawer-DH2oymEx.js","./zod-C_8-g2jb.js","./slugify-bXvLWs_E.js","./constants-DezTRlnT.js","./OasProvider-Bs4OC4qT.js","./OperationList-bfnigBB8.js","./PlaygroundDialog-JShuyByh.js","./mutation-DKeOfJp5.js","./Popover-JhZdpPst.js","./Markdown-Cg2Y60Sz.js","./lib-DntQlSM5.js","./lib-Co4Medk2.js","./highlight-ChK-MHCU.js","./shiki-B6tPqSi2.js","./shiki-constants-Cbz7E3qi.js","./Typography-DZ3sbvwz.js","./Alert-tRbBQ38u.js","./useCopyToClipboard-BW4AQbrE.js","./Select-JY571Ftt.js","./Card-BtTjrp4A.js","./SyntaxHighlight-DML0q2P6.js","./CodeBlock-BM_bbMX-.js","./securityCredentialsStore-C38489-s.js","./Callout-Ca-OpS4z.js","./Heading-CUeZvcSH.js","./InlineCode-BlOOxv1o.js","./Badge-B7zKrzT-.js","./Pagination-C6l6HoJl.js","./Item-DF2pfSMV.js","./AiAssistantMenuItems-CuUeYyfB.js","./dist-JhRxQfAn.js","./SchemaView-C89poh2A.js","./useWarmupSchema-wa9aVpJN.js","./SchemaList-Bo8acQFt.js","./Toc-DWphwLxu.js","./SchemaInfo-D6Lz6ssN.js","./PlaygroundDialog-BavQMU1z.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{o as t,s as n}from"./motion-BtDFqjAV.js";import{Ar as r,Dr as i,En as a,Fr as o,Kn as s,Lr as c,Nr as l,Or as u,Tt as d,Un as f,wt as p,zr as m}from"./app-BJBOnTyW.js";var h,g={},_=e=>{if(e.errors?.[0])throw new p(e.errors[0].message,{developerHint:"Check your configuration value `apis.type` and `apis.input` in the Zudoku config."})},v=class{config;constructor(e){e.schemaImports&&Object.assign(g,e.schemaImports),this.config=e}#e=async()=>(h||=i(()=>import(`./createServer-DGzMgzLx.js`).then(e=>e.createServer({...this.config,schemaImports:g})),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),h);#t=async e=>this.config.server?fetch(this.config.server,e):(await this.#e()).fetch(`http://localhost/graphql`,e);fetch=async(e,t)=>{let n=e.match(/query (\w+)/)?.[1],r=await this.#t({method:`POST`,body:JSON.stringify({query:e,variables:t,operationName:n}),headers:{"Content-Type":`application/json`}});if(!r.ok)throw Error(`Network response was not ok`);let i=await r.json();return _(i),i.data}},y=e(n(),1),b=t(),x=(0,y.createContext)(void 0),S=({children:e,client:t})=>(0,b.jsx)(x.Provider,{value:t,children:e}),C=(e,t,...[n])=>({queryFn:()=>e.fetch(t,n),queryKey:[t.toString().replace(/\s+/g,` `).trim(),n]}),w=(e,...[t])=>{let n=(0,y.use)(x);if(n===void 0)throw Error(`useGraphQL must be used within a GraphQLProvider`);return C(n,e,...t===void 0?[]:[t])},T=class extends String{__apiType;value;__meta__;constructor(e,t){super(e),this.value=e,this.__meta__=t}toString(){return this.value}},E=new T(`
    fragment OperationsFragment on OperationItem {
  slug
  summary
  method
  description
  operationId
  contentTypes
  path
  deprecated
  extensions
  servers {
    url
    description
  }
  parameters {
    name
    in
    description
    required
    schema
    style
    explode
    allowReserved
    examples {
      name
      description
      externalValue
      value
      summary
    }
  }
  security {
    schemes {
      scopes
      scheme {
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
  }
  requestBody {
    content {
      mediaType
      encoding {
        name
      }
      examples {
        name
        description
        externalValue
        value
        summary
      }
      schema
    }
    description
    required
  }
  responses {
    statusCode
    links
    description
    content {
      examples {
        name
        description
        externalValue
        value
        summary
      }
      mediaType
      encoding {
        name
      }
      schema
    }
  }
}
    `,{fragmentName:`OperationsFragment`}),D={"\n  query ServersQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n":new T(`
    query ServersQuery($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    url
    servers {
      url
    }
  }
}
    `),"\n  fragment OperationsFragment on OperationItem {\n    slug\n    summary\n    method\n    description\n    operationId\n    contentTypes\n    path\n    deprecated\n    extensions\n    servers {\n      url\n      description\n    }\n    parameters {\n      name\n      in\n      description\n      required\n      schema\n      style\n      explode\n      allowReserved\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n    }\n    security {\n      schemes {\n        scopes\n        scheme {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n    requestBody {\n      content {\n        mediaType\n        encoding {\n          name\n        }\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        schema\n      }\n      description\n      required\n    }\n    responses {\n      statusCode\n      links\n      description\n      content {\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        mediaType\n        encoding {\n          name\n        }\n        schema\n      }\n    }\n  }\n":E,"\n  query OperationsForTag(\n    $input: JSON!\n    $type: SchemaType!\n    $tag: String\n    $untagged: Boolean\n  ) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n      }\n      description\n      summary\n      title\n      url\n      version\n      tag(slug: $tag, untagged: $untagged) {\n        name\n        description\n        operations {\n          slug\n          ...OperationsFragment\n        }\n        extensions\n        next {\n          name\n          slug\n          extensions\n        }\n        prev {\n          name\n          slug\n          extensions\n        }\n      }\n    }\n  }\n":new T(`
    query OperationsForTag($input: JSON!, $type: SchemaType!, $tag: String, $untagged: Boolean) {
  schema(input: $input, type: $type) {
    servers {
      url
    }
    description
    summary
    title
    url
    version
    tag(slug: $tag, untagged: $untagged) {
      name
      description
      operations {
        slug
        ...OperationsFragment
      }
      extensions
      next {
        name
        slug
        extensions
      }
      prev {
        name
        slug
        extensions
      }
    }
  }
}
    fragment OperationsFragment on OperationItem {
  slug
  summary
  method
  description
  operationId
  contentTypes
  path
  deprecated
  extensions
  servers {
    url
    description
  }
  parameters {
    name
    in
    description
    required
    schema
    style
    explode
    allowReserved
    examples {
      name
      description
      externalValue
      value
      summary
    }
  }
  security {
    schemes {
      scopes
      scheme {
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
  }
  requestBody {
    content {
      mediaType
      encoding {
        name
      }
      examples {
        name
        description
        externalValue
        value
        summary
      }
      schema
    }
    description
    required
  }
  responses {
    statusCode
    links
    description
    content {
      examples {
        name
        description
        externalValue
        value
        summary
      }
      mediaType
      encoding {
        name
      }
      schema
    }
  }
}`),"\n  query SchemaInfo($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n        description\n      }\n      license {\n        name\n        url\n        identifier\n      }\n      termsOfService\n      externalDocs {\n        description\n        url\n      }\n      contact {\n        name\n        url\n        email\n      }\n      description\n      summary\n      title\n      url\n      version\n      tags {\n        name\n        description\n        extensions\n      }\n      components {\n        securitySchemes {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n      webhooks {\n        name\n        method\n        summary\n        description\n      }\n    }\n  }\n":new T(`
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
    `),"\n  query GetSchemas($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      summary\n      components {\n        schemas {\n          name\n          schema\n          extensions\n        }\n      }\n    }\n  }\n":new T(`
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
    `),"\n  query getServerQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n":new T(`
    query getServerQuery($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    url
    servers {
      url
    }
  }
}
    `),"\n  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      extensions\n      description\n      tags {\n        slug\n        name\n        extensions\n        operations {\n          summary\n          slug\n          method\n          operationId\n          path\n        }\n      }\n      components {\n        schemas {\n          __typename\n        }\n      }\n    }\n  }\n":new T(`
    query GetNavigationOperations($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    extensions
    description
    tags {
      slug
      name
      extensions
      operations {
        summary
        slug
        method
        operationId
        path
      }
    }
    components {
      schemas {
        __typename
      }
    }
  }
}
    `),"\n  query SchemaWarmup($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      openapi\n    }\n  }\n":new T(`
    query SchemaWarmup($input: JSON!, $type: SchemaType!) {
  schema(input: $input, type: $type) {
    openapi
  }
}
    `)};function O(e){return D[e]??{}}var k=({tagCategories:e,tagGroups:t,expandAllTags:n})=>{let r=new Set,i=t.flatMap(t=>{let i=e.get(t.name),a=i?.type===`category`?i:void 0;a&&r.add(t.name);let o=t.tags.flatMap(n=>{if(n===t.name)return[];let i=e.get(n);return i?(r.add(n),i):[]});return!a&&o.length===0?[]:{...a,type:`category`,label:a?.label??t.name,items:[...a?.items??[],...o],collapsible:a?.collapsible??!0,collapsed:a?.collapsed??!n}}),a=Array.from(e.entries()).filter(([e])=>!r.has(e)).map(([,e])=>e);return[...i,...a]},A={get:`green`,post:`blue`,put:`yellow`,delete:`red`,patch:`purple`,options:`gray`,head:`gray`},j=({label:e,path:t,operations:n,collapsible:r,collapsed:i})=>({type:`category`,label:e,link:{type:`doc`,path:t,file:t,label:e},collapsible:r,collapsed:i,items:n.map(e=>({type:`link`,label:e.summary??e.path,to:`${t}#${e.slug}`,badge:{label:e.method,color:A[e.method.toLowerCase()],invert:!0}}))}),M=(0,y.createContext)(void 0),N=M.Provider,P=()=>{let e=(0,y.useContext)(M);if(!e)throw Error(`useOasConfig must be used within a OasConfigProvider`);return e.config},F=e=>({path:e.routePath,async lazy(){let{OasProvider:t}=await i(async()=>{let{OasProvider:e}=await import(`./OasProvider-Bs4OC4qT.js`);return{OasProvider:e}},__vite__mapDeps([8,1,3,2,4,5]),import.meta.url);return{element:(0,b.jsx)(t,{basePath:e.basePath,version:e.version,client:e.client,config:e.config})}},children:e.routes}),I=({path:e,tag:t,untagged:n})=>({path:e,async lazy(){let{OperationList:e}=await i(async()=>{let{OperationList:e}=await import(`./OperationList-bfnigBB8.js`);return{OperationList:e}},__vite__mapDeps([9,1,3,2,4,5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,6,7,36]),import.meta.url);return{element:(0,b.jsx)(e,{tag:t,untagged:n})}}}),L=({render:e,path:t})=>{let{type:n,input:i}=P(),{tag:a}=l(),c=r(),{data:{schema:d}}=s(w(K,{type:n,input:i})),f=d.tags.at(0);return!a&&f?.slug?(0,b.jsx)(u,{to:{pathname:o(t,{tag:f.slug}),search:c.search}}):a&&d.tags.some(e=>e.slug===a)?e(a):null},R=({path:e})=>({path:e,async lazy(){let{OperationList:t}=await i(async()=>{let{OperationList:e}=await import(`./OperationList-bfnigBB8.js`);return{OperationList:e}},__vite__mapDeps([9,1,3,2,4,5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,6,7,36]),import.meta.url);return{element:(0,b.jsx)(L,{path:e,render:e=>(0,b.jsx)(t,{tag:e})})}}}),z=({basePath:e,hasUntaggedOperations:t=!0})=>[...t?[I({path:f(e,q),untagged:!0})]:[],{path:f(e,`~schemas`),lazy:async()=>{let{SchemaList:e}=await i(async()=>{let{SchemaList:e}=await import(`./SchemaList-Bo8acQFt.js`);return{SchemaList:e}},__vite__mapDeps([37,3,1,2,4,5,28,38,29,6,32,21,33,22,35,13,14,15,16,17,18,19,30,7]),import.meta.url);return{element:(0,b.jsx)(e,{})}}}],B=({versionPath:e,tagPages:t,hasUntaggedOperations:n=!0,showInfoPage:r})=>{let a=t.at(0)??(n?`~endpoints`:void 0),o=a?f(e,a):void 0;return[r===!1?o?{index:!0,loader:()=>m(o)}:I({path:e}):{index:!0,path:e,lazy:async()=>{let{SchemaInfo:e}=await i(async()=>{let{SchemaInfo:e}=await import(`./SchemaInfo-D6Lz6ssN.js`);return{SchemaInfo:e}},__vite__mapDeps([39,3,1,2,4,5,12,13,14,15,16,17,18,19,30,6,32,28,21,33,22,23,36]),import.meta.url);return{element:(0,b.jsx)(e,{showInfoPage:r,redirectTo:o})}}},...t.map(t=>I({path:f(e,t),tag:t})),...z({basePath:e,hasUntaggedOperations:n})]},V=e=>e.type===`raw`||!Array.isArray(e.input)?{versions:[],versionMap:{}}:{versions:e.input.map(e=>e.path),versionMap:Object.fromEntries(e.input.map(e=>[e.path,{label:e.label??e.path,downloadUrl:e.downloadUrl,tagPages:e.tagPages}]))},H=(e,t)=>t&&(!e.tagPages||e.tagPages.includes(t))?f(e.path,t):e.path,U=({basePath:e,config:t,client:n})=>{let r=t.tagPages,{versions:i}=V(t),a=Array.isArray(t.input)?t.input:void 0;return(i.length>1?[void 0,...i]:[void 0]).map(i=>{let o=f(e,i),s=i?a?.find(e=>e.path===i):a?.[0],c=s?.hasUntaggedOperations??!0,l=s?.tagPages??r;return F({basePath:e,version:i,routePath:o,routes:l?B({versionPath:o,tagPages:l,hasUntaggedOperations:c,showInfoPage:t.options?.showInfoPage}):[R({path:`${o}/:tag?`}),...z({basePath:o,hasUntaggedOperations:c})],client:n,config:t})})},W=(e,t)=>e===!0||e!==!1&&t,G=(0,y.lazy)(()=>i(()=>import(`./PlaygroundDialog-BavQMU1z.js`).then(e=>({default:e.PlaygroundDialog})),__vite__mapDeps([40,10,1,3,2,4,5,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)),K=O(`
  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      extensions
      description
      tags {
        slug
        name
        extensions
        operations {
          summary
          slug
          method
          operationId
          path
        }
      }
      components {
        schemas {
          __typename
        }
      }
    }
  }
`),q=`~endpoints`,J=e=>{let t=f(e.path),n=new v(e);return{getHead:()=>{if(e.type===`url`&&!e.skipPreload)return(Array.isArray(e.input)?e.input.map(e=>e.input):[e.input]).map(e=>(0,b.jsx)(`link`,{href:e,rel:`preload`,as:`fetch`,crossOrigin:`anonymous`},e));if(e.server)return(0,b.jsx)(`link`,{rel:`preconnect`,href:e.server})},getMdxComponents:()=>({OpenPlaygroundButton:({server:e,method:t=`get`,url:n=`/`,children:r,...i})=>{if(!e)throw Error(`Server is required`);return(0,b.jsx)(y.Suspense,{children:(0,b.jsx)(G,{url:n,method:t,server:e,...i,children:(0,b.jsx)(d,{className:`gap-2 items-center`,variant:`outline`,children:r??(0,b.jsxs)(b.Fragment,{children:[`Open in Playground`,(0,b.jsx)(a,{size:16,"aria-hidden":`true`})]})})})})}}),getNavigation:async(r,i)=>{if(!c({path:t,end:!1},r))return[];try{let{versions:a}=V(e),o=a.find(e=>c({path:f(t,e),end:!1},r)),s=o??a.at(0),{type:l}=e,u=Array.isArray(e.input)?e.input.find(e=>e.path===s)?.input??e.input[0]?.input:e.input,d=C(n,K,{type:l,input:u}),p=await i.queryClient.ensureQueryData(d),m=k({tagCategories:new Map(p.schema.tags.filter(e=>e.name&&e.operations.length>0).map(n=>{if(!n.name)throw Error(`Tag ${n.slug} has no name`);let r=f(t,o,n.slug),i=n.extensions?.[`x-zudoku-collapsed`]??!e.options?.expandAllTags,a=n.extensions?.[`x-zudoku-collapsible`]??!0;return[n.name,j({label:n.extensions?.[`x-displayName`]??n.name,path:r,operations:n.operations,collapsed:i,collapsible:a})]})),tagGroups:p.schema.extensions?.[`x-tagGroups`]??[],expandAllTags:e.options?.expandAllTags});W(e.options?.showInfoPage,!!p.schema.description)&&m.unshift({type:`link`,to:f(t,o),label:`Information`});let h=p.schema.tags.find(e=>!e.name)?.operations;return h&&h.length>0&&m.push(j({label:m.length===0?`Endpoints`:`Other endpoints`,path:f(t,o,q),operations:h,collapsed:!e.options?.expandAllTags})),p.schema.components?.schemas?.length&&m.push({type:`link`,label:`Schemas`,to:f(t,o,`~schemas`)}),m}catch{return[]}},getRoutes:()=>U({basePath:t,config:e,client:n})}};export{V as a,O as c,H as i,w as l,J as n,N as o,W as r,P as s,q as t,S as u};