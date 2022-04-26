import React from 'react'
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
const SearchComponent =({searchKey,onChange})=>{
    return  <Input size="large" value={searchKey} style={{marginTop:'10px',width:'40%',float:'right'}} onChange={(e)=>onChange(e.target.value)} placeholder="Search here" prefix={<SearchOutlined />} />
     

}
export default SearchComponent