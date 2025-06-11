import dynamic from 'next/dynamic'


const DynamicComponentWithNoSSR = dynamic(
  () => import("./create/page"),
  { ssr: false } // <-- not including this component on server-side
 
)
export default DynamicComponentWithNoSSR