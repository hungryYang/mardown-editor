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
      <div className="tool">
         <svg className="icon" aria-hidden="true"  onClick={this.showModal}>
            <use xlinkHref="#icon-wenjianjia"></use>
        </svg>
        <Modal
          title="File List"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
              <Button key="back" size="large" type="primary" onClick={this.handleCancel}>OK</Button>
          ]}
        >
          <FileLists onClick={this.handleCancel}></FileLists>
        </Modal>
      </div>
    );
  }
}

export default ShowFiles