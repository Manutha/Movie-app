import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
import MovieList from '../movieComponents/MovieList';
import SearchComponent from '../movieComponents/SearchComponent';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
    const [searchKey,setSearchKey]=useState("") 
    const onChange=(e)=>{
        setSearchKey(e)
    }

    return  <Layout className="layout">
    <Header>
      <div className="logo" />
      
      <SearchComponent searchKey={searchKey} onChange={(e)=>onChange(e)} />
       
      <Menu 
        mode="horizontal"
        theme='dark'  
       defaultSelectedKeys={'1'}
      ><Menu.Item key='1'>My List
          </Menu.Item></Menu>
    </Header>
    <Content style={{ padding: '20px 50px' }}> 
      <div className="site-layout-content"><MovieList searchKey={searchKey}/></div>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
}
 

export default LayoutComponent