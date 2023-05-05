
import CustomGraph from './CustomGraph'
import data from  "../data/Wine-Data.json"

export default function Graph() {
  return (
    <div style={{marginTop: '40px'}}>
        <CustomGraph GraphObject={options}/>
        <CustomGraph GraphObject={options2}/>
    </div>
  )
}












 // option prop for line graph
const options = {
    // grid: { top: 20, right: 40, bottom: 20, left: 40 },

       title: {
      text: 'Line Chart For Flavnoids & Ash'
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },


    xAxis: {
      type: "category",
      name: 'Flavanoids',
     
    },
    yAxis: {
      type: "value",
      name: 'Ash',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
      {
        data: [1,2,3,4,5,6],
        type: 'line',
        // smooth: true
      }
    ],

  }


  
// option prop for bar graph
const options2 = {
  // grid: { top: 20, right: 40, bottom: 20, left: 40 },

     title: {
    text: 'Bar Chart For Alchol and Magnesium'
  },

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },


  xAxis: {
    type: "category",
    name: 'Alcohol',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
   
  },
  yAxis: {
    type: "value",
    name: 'Magnesium',
  },
  series: [
    {
      data: [],
      type: 'bar',
      smooth: true,
      showBackground: true,
             backgroundStyle: {
               color: 'rgba(180, 180, 180, 0.2)'
             }
    }
  ],

}


 // dynamic fill data in line chart
  function dynamicFillData({xAxis, yAxis, series}: {xAxis: any, yAxis: any, series: any}) {
    let xAxisarr = Array() 
    let yAxisarr = Array()
    data.map((item)=> {
      xAxisarr.push(item.Flavanoids)
      return yAxisarr.push(Number(item.Ash))
    })
    
    xAxis.data = xAxisarr
    yAxis.data = yAxisarr
    series[0].data = yAxisarr
    return;    
  }

 dynamicFillData(options)

// dynamic fill data in bar chart
 function dynamicFillDataBarGraph({xAxis, yAxis, series}: {xAxis: any, yAxis: any, series: any}){
  let xAxisarr = Array() 
  let yAxisarr = Array()
  data.map((item)=> {
    yAxisarr.push(item.Magnesium)
    if(!xAxisarr.includes(item.Alcohol)){
       xAxisarr.push(Number(item.Alcohol))
    }
  })
  xAxis.data = xAxisarr
  yAxis.data = yAxisarr
  series[0].data = yAxisarr
  
 }


dynamicFillDataBarGraph(options2)










