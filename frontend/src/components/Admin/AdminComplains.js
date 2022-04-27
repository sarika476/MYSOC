import { Col, Row, Table, Button, Input, Tag ,Modal} from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import ViewDetail from "./ViewDetail";
import Column from 'antd/lib/table/Column';

const { Search } = Input;
let cols = [
    {
        title: 'Sr. No.',
        dataIndex: 'key',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: '',
        dataIndex: 'details',
    },
];

let comp = [
  {
    key: '1',
    category: 'leakage',
    date: "08/04/2022",
    status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
    details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
  },
  {
    key: '2',
    category: 'parking issue',
    date: "01/04/2022",
    status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
    details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
  },
  {
    key: '3',
    category: 'leakage',
    date: "08/04/2022",
    status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
    details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
  },
];

export default class AdminComplains extends Component {

  editFormRef = React.createRef();
  constructor(props){
    super(props);
    this.showmodal = this.showmodal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.editModalForm = this.editModalForm.bind(this);
  }

  hideModal = () => {
    this.setState({ show: false });
  };
  showmodal = (r) => {
    this.setState({ show: true });
    //this.setState({ modal_data: r})
  };
  editModalForm = () => {
    // let record = this.state.modal_data;
    this.editFormRef.current.setFieldsValue({
      category:1,
      date:"Electrical",
      description:"hello",
      images:"hey images"
    });
    // this.fetchApi();
  };
  state = {
    columns: [],
    complains: [],
    selected: {},
  };

  componentDidMount = () => {
    this.setState({complains: comp, columns: cols})
  }

  // details = (values, e) => {
  //   console.log(e.key())
  // }

  render(){   
    const { columns, complains } = this.state;

    return(
      <Layout style={{minHeight: '100vh'}}>
        <Content style={{height: '100%'}}>
           <h3 style={{padding:'20px',textAlign:'center'}}>User Complaints</h3>
         <Table style={{paddingLeft:'100px',paddingRight:'100px'}} dataSource={complains} >

                <Column key="id" dataIndex={"columns"} title="Flat no" />
                <Column key ="Name" dataIndex={"columns"} title="Name"/>
                <Column dataIndex={"columns"} title="Contact No."/>
                <Column key="action" title="Action" render={(r) => {
                  return(
                    <div>
                        <Button type='primary' onClick={() => this.showmodal(r)}>Details</Button>
                    </div>
                  )
                }}></Column>

         </Table>
                </Content>
          <Modal
                visible={this.state.show}
                footer={null}
                >
                <ViewDetail {...this} {...this.state}></ViewDetail>
          </Modal>
      </Layout>
      
    
    )
  }
}