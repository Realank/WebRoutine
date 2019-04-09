import React, { Component } from 'react'
import { Map as Amap, Markers, Polyline } from 'react-amap'
import { Switch } from 'antd'

class GaodeMap extends Component {
  constructor (props) {
    super(props)
    this.mapPlugins = ['Scale', 'ToolBar']
    this.state = {
      showPin: true
    }
  }

  renderMarkerLayout (extData) {
    const style = {
      padding: '2px',
      backgroundColor: '#000',
      color: '#fff',
      fontSize: '10px'
      // border: '1px solid #fff',
    }
    let title = extData.position.longitude + ', ' + extData.position.latitude
    return <div style={style} />
  }

  onPinSwitchChange (checked) {
    this.setState({...this.state, showPin: checked})
  }

  render () {
    console.log('render map ' + JSON.stringify(this.props.path))
    return (
      <div style={{ width: '90%', height: '600px' }}>
        <Amap amapkey={'0845071c891fcc8121b0afa0a26035e2'} plugins={this.mapPlugins}
          center={this.props.path ? this.props.path[0] : null} zoom={19} zooms={[3, 20]}
          expandZoomRange
        >
          <Polyline
            path={this.props.path}
            visible
            style={{strokeColor: 'red', strokeWeight: '10', strokeOpacity: 0.7, showDir: true}}
          />
          <Markers
            markers={this.props.path.map((pos, index) => { return {position: pos, index: index} })}
            // render={this.renderMarkerLayout}
            visible={this.state.showPin}
          />
        </Amap>
        <div><Switch checked={this.state.showPin} onChange={(checked) => (this.onPinSwitchChange(checked))} />显示坐标点</div>
      </div>
    )
  }
}

export default GaodeMap
