import React, { Component } from 'react'
import PathUploader from './PathUploader'
import './App.css'
import GaodeMap from './GaodeMap'
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
        path: json.data
      })
    }
  }
  render () {
    return (
      <div>
        <PathUploader onSelectFile={this.handleRead.bind(this)} />
        <GaodeMap path={this.state.path.map((node) => { return {latitude: node.lat, longitude: node.lon} })} />
      </div>

    )
  }
}

export default App
