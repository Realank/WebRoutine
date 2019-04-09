import React, { Component } from 'react'
import { Upload, Icon, message, Button } from 'antd'
const Dragger = Upload.Dragger

class PathUploader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fileList: [],
      uploading: false
    }
  }

  handleUpload () {
    const { fileList } = this.state
    // const formData = new FormData();
    // fileList.forEach((file) => {
    //   formData.append('files[]', file);
    // });

    this.setState({
      uploading: true
    })

    setTimeout(() => {
      this.setState({
        fileList: [],
        uploading: false
      })
    }, 2000)
  }



  render () {
    const { uploading, fileList } = this.state
    const props = {
      // multiple: true,
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList
          }
        })
      },
      beforeUpload: (file) => {
        console.log('select file ' + file.type)
        if (file.type === 'application/json') {
          if (this.props.onSelectFile) {
            this.props.onSelectFile(file)
          }
          this.setState(state => ({
            fileList: [file]// [...state.fileList, file]
          }))
        }

        return false
      },
      fileList
    }

    return (
      <div style={{width: '50%'}}>
        <Dragger {...props} >
          <p className='ant-upload-drag-icon'>
            <Icon type='inbox' />
          </p>
          <p className='ant-upload-text'>选择路径JSON文件上传</p>
        </Dragger>
        {/* <Button */}
        {/* type='primary' */}
        {/* onClick={this.handleUpload} */}
        {/* disabled={fileList.length === 0} */}
        {/* loading={uploading} */}
        {/* style={{ marginTop: 16 }} */}
        {/* > */}
        {/* {uploading ? 'Uploading' : 'Start Upload' } */}
        {/* </Button> */}
      </div>

    )
  }
}

export default PathUploader
