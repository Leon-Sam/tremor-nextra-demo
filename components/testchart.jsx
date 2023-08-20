

import { Card, Text, Metric } from "@tremor/react";



export default () => (
    
    <>

    <div className="w-40 h-40 bg-red-500 text-white flex justify-center items-center">
      Red Box made in .jsx with tailwind classnames
    </div>

    <br/><br/><br/><br/><br/>
    <Card className="max-w-xs mx-auto">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>   
   </>

);