import React, { Component } from 'react'
import { Map as Amap, Markers, Polyline } from 'react-amap'
import { Switch } from 'antd'

class GaodeMap extends Component {
  constructor (props) {
    super(props)
    this.mapPlugins = ['Scale', 'ToolBar']
    this.state = {
      showPin: true,
      mapIns: null,
      zoomLevel: 0
    }
  }

  renderMarkerLayout (extData) {
    const style = {
      padding: '2px',
      backgroundColor: '#66666666',
      color: '#fff',
      fontSize: '8px'
      // border: '1px solid #fff',
      // borderRadius: '3px'
    }
    const style2 = {
      background: `url('http://icons.iconarchive.com/icons/icons-land/vista-map-markers/16/Map-Marker-Ball-Azure-icon.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '20px',
      height: '40px',
      color: '#000',
      textAlign: 'center',
      lineHeight: '40px',
      opacity: 0.6
    }
    let title = extData.position.longitude + ', ' + extData.position.latitude
    return <div style={style2} >{extData.index}</div>
  }

  onPinSwitchChange (checked) {
    this.setState({...this.state, showPin: checked})
  }

  render () {
    console.log('render map ')

    const events = {
      created: (ins) => { console.log(ins); this.setState({...this.state, mapIns: ins, zoomLevel: ins.getZoom()}) },
      zoomend: () => { this.setState({...this.state, zoomLevel: this.state.mapIns.getZoom()}) }
    }

    return (
      <div>
        <div style={{marginBottom: '10px'}}><Switch checked={this.state.showPin} onChange={(checked) => (this.onPinSwitchChange(checked))} /> 放大时显示坐标点</div>
        <div style={{ width: '95%', height: '800px' }}>
          <Amap amapkey={'0845071c891fcc8121b0afa0a26035e2'} plugins={this.mapPlugins}
            center={this.props.path ? this.props.path[0] : null} zoom={19} zooms={[3, 20]}
            expandZoomRange
            events={events}
          >
            <Polyline
              path={this.props.path}
              visible
              style={{strokeColor: 'red', strokeWeight: '10', strokeOpacity: 0.7, showDir: true}}
            />
            <Markers
              markers={this.props.path.map((pos, index) => { return {position: pos, index: index} })}
              render={this.renderMarkerLayout}
              visible={this.state.showPin && this.state.zoomLevel > 15}
            />
          </Amap>

        </div>

      </div>

    )
  }
}

export default GaodeMap
