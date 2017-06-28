import React,{Component} from 'react'
import { Modal, Button } from 'antd';
import FileLists from './FileLists.js'
class ShowFiles extends Component {
  constructor(){
      super(...arguments)

      this.state={ 
          visible: false 
      }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
              <Button key="back" size="large" type="primary" onClick={this.handleCancel}>OK</Button>
          ]}
        >
          <FileLists></FileLists>
        </Modal>
      </div>
    );
  }
}

export default ShowFiles