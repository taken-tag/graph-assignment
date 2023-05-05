import React from 'react'
import ReactEcharts from "echarts-for-react"
import "../Graph.css"
export default function CustomGraph({GraphObject}: CustomGraphProps) {
  
  return (
     <div className='customChart'>
     <ReactEcharts  option={GraphObject} />
     </div>
    
  )
}
// props
interface CustomGraphProps{
  GraphObject: Object;
}
