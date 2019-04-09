import React, { Component } from 'react'

import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class NodesChart extends Component {
  render () {
    let opt = {
      title: { text: this.props.title },
      tooltip: {},
      xAxis: {
        data: this.props.nodes.map((node, index) => { return '' + index })
      },
      yAxis: {},
      series: [{
        // name: '销量',
        type: 'line',
        data: this.props.nodes
      }]
    }
    return (<ReactEchartsCore
      echarts={echarts}
      option={opt}
      // notMerge={true}
      // lazyUpdate={true}
      // theme={"theme_name"}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      // opts={}
    />)
  }
}

export default NodesChart
