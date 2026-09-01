import{qn as e}from"./app-BJBOnTyW.js";import{c as t,l as n,s as r}from"./openapi-C_W_DB0s.js";var i=t(`
  query SchemaWarmup($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      openapi
    }
  }
`),a=()=>{let{input:t,type:a}=r();e({...n(i,{input:t,type:a}),enabled:typeof window<`u`,notifyOnChangeProps:[]})};export{a as t};