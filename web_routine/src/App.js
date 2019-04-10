import React, { Component } from 'react'
import PathUploader from './PathUploader'
import './App.css'
import GaodeMap from './GaodeMap'
import NodesChart from './NodesChart'
import { Layout, Row, Col } from 'antd'

const {
  Header, Footer, Sider, Content
} = Layout

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      path: []
    }
  }
  handleRead (file) {
    var reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      let json = JSON.parse(reader.result)
      console.log(json)
      this.setState({
        ...this.state,
        path: json.data.map((node) => { return {latitude: node.lat, longitude: node.lon, altitude: node.altitude, speed: node.speed, time: node.time} })
      })
    }
  }
  render () {
    return (
      <div>
        <Layout>
          <Header style={{color: 'white', fontSize: '25px' }}>路径展示</Header>
          <Layout>
            <Sider>
              <PathUploader onSelectFile={this.handleRead.bind(this)} />
            </Sider>
            <Content style={{padding: '10px'}}>
              <Row>
                <Col span={12}> <GaodeMap path={this.state.path} /></Col>
                <Col span={12}>
                  <Row><NodesChart nodes={this.state.path.map((node) => { return node.altitude })} title={'高度'} /></Row>
                  <Row><NodesChart nodes={this.state.path.map((node) => { return node.speed })} title={'速度'} /></Row>
                </Col>
              </Row>

            </Content>
          </Layout>

          <Footer>Realank</Footer>
        </Layout>

      </div>

    )
  }
}

export default App
