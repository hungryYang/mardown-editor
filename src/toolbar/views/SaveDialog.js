import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Modal, Button, Input} from 'antd';
import {saveFile} from '../../actions.js'


class SaveDialog extends Component {
  constructor(){
    super(...arguments)

    this.state = {
        loading: false,
        visible: false,
        fileName:''
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    if(!this.state.fileName){
      alert("请输入文件名")
      return;
    }
      
    this.setState({ loading: true });
    var fileName = this.state.fileName
    this.props.onSave(fileName)

    this.setState({ 
        loading: false,
        visible: false,
        fileName:''
    });

  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  onInputChange = (e)=>{
    var fileName = e.target.value
    this.setState({
        fileName:fileName
    })
  }
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          SAVE
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[

            <Button key="back" size="large" onClick={this.handleCancel}>CANCEL</Button>,
            <Button key="submit"  type="primary" size="large" loading={loading} onClick={this.handleOk}>
              SAVE
            </Button>,
          ]}
        >
                <Input required placeholder="filename" value={this.state.fileName} onChange={this.onInputChange}></Input>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (fileName) => {
      dispatch(saveFile(fileName));
    }
  }
};

export default connect (null,mapDispatchToProps)(SaveDialog)
