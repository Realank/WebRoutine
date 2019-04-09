import React, { Component } from 'react'

import ReactEcharts from 'echarts-for-react'

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
    return (<ReactEcharts
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
