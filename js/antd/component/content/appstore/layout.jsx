import { Layout,Breadcrumb,Menu } from 'antd';
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;

class LayoutList extends React.Component {
	render() {
		return(
			<div>
				<Layout className="layout">
				    <Header>
				      <div className="logo" />
				      <Menu
				        theme="dark"
				        mode="horizontal"
				        defaultSelectedKeys={['2']}
				        style={{ lineHeight: '64px' }}
				      >
				        <Menu.Item key="1">用户中心</Menu.Item>
				        <Menu.Item key="2">权限设置</Menu.Item>
				        <Menu.Item key="3">系统中心</Menu.Item>
				      </Menu>
				    </Header>
				    <Content style={{ padding: '0 50px' }}>
				      <Breadcrumb style={{ margin: '16px 0' }}>
				        <Breadcrumb.Item>Home</Breadcrumb.Item>
				        <Breadcrumb.Item>List</Breadcrumb.Item>
				        <Breadcrumb.Item>App</Breadcrumb.Item>
				      </Breadcrumb>
				      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
				    </Content>
				    <Footer style={{ textAlign: 'center' }}>
				      Ant Design ©2016 Created by Ant UED
				    </Footer>
				</Layout>
			</div>
		)
	}
}
export default LayoutList;