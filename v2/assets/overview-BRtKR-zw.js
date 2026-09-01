import{o as e}from"./motion-BtDFqjAV.js";import{n as t}from"./lib-DntQlSM5.js";var n=e(),r=`The Kaiterra API allows your programs to access the air quality data reported by your Sensedge, Sensedge Mini, or other device.`,i=[],a={title:`Overview`,description:`Get started with the Kaiterra API, which gives your programs access to the air quality data reported by your Kaiterra devices.`,lastModifiedTime:`2026-08-12T23:53:24.332Z`},o=`pages/overview.mdx`;function s(e){let r={a:`a`,code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[`The Kaiterra API allows your programs to access the air quality data reported by your `,(0,n.jsx)(r.a,{href:`https://www.kaiterra.com/sensedge`,children:`Sensedge`}),`, `,(0,n.jsx)(r.a,{href:`https://www.kaiterra.com/sensedge-mini`,children:`Sensedge Mini`}),`, or other device.`]}),`
`,(0,n.jsx)(r.p,{children:`How to get started:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[`Get your API key at `,(0,n.jsx)(r.a,{href:`https://app.kaiterra.com`,children:`app.kaiterra.com`}),`. Once you've created an account, go to your `,(0,n.jsx)(r.a,{href:`https://app.kaiterra.com/me/account/personal`,children:`Account Settings`}),` and click `,(0,n.jsx)(r.strong,{children:`API Keys`}),`. Finally, click `,(0,n.jsx)(r.strong,{children:`Generate API Key`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[`If you're a Postman user, you can try out our API using our public `,(0,n.jsx)(r.a,{href:`https://www.postman.com/kaiterra/workspace/demo`,children:`Demo workspace`}),`. Note that you'll need to `,(0,n.jsx)(r.a,{href:`https://learning.postman.com/docs/sending-requests/environments/managing-environments/`,children:`create a Postman environment`}),` with a variable called `,(0,n.jsx)(r.code,{inline:`true`,children:`api-key`}),` (set to your Kaiterra API key) to try the examples in the collection.`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Find the Unique Device IDs (UDIDs) for your Kaiterra devices in the device's settings (Sensedge) or in the Kaiterra mobile app.`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`Don't have any Kaiterra devices yet? Feel free to use our test devices from this documentation -- the ones with IDs beginning with "00000000-" -- to get familiar with the API:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{inline:`true`,children:`00000000-0031-0101-0000-00007e57c0de`}),` is a test Sensedge`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{inline:`true`,children:`00000000-0001-0101-0000-00007e57c0de`}),` is a test Laser Egg`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function c(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{o as __filepath,c as default,r as excerpt,a as frontmatter,i as tableOfContents};