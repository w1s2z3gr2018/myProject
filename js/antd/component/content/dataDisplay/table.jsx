import { Table, Spin, message, Card, Tooltip, Button, Icon, Input } from 'antd';

export default class TableList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			tableData: [],
			searchText:'',
			selectedRowKeys: [],
			pagination: {
				defaultCurrent: 1,
				defaultPageSize: 10,
				showQuickJumper: true,
				pageSize: 10,
				onChange: function(page) {
					this.loadData(page);
				}.bind(this),
				showTotal: function(total) {
					return '共' + total + '条数据';
				}
			},
			
		}
		this.loadData = this.loadData.bind(this);
	}
	onSearch(){
		const {
			searchText
		} = this.state;
		const reg = new RegExp(searchText, 'gi');
		this.setState({
			filterDropdownVisible: false,
			filtered: !!searchText,
			data: data.map((record) => {
				const match = record.name.match(reg);
				if(!match) {
					return null;
				}
				return {
					//...record,
					name: (
						<span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
					),
				};
			}).filter(record => !!record),
		});
	}
	onInputChange(e) {
		this.setState({
			searchText: e.target.value
		});
	}
	onSearch(e) {
		console.log(this.state.searchText);
	}
	loadData() {
		this.setState({
			loading: true
		})
		axios('http://www.shuju.com')
			.then(data => {
				message.success('数据接收成功!');
				console.log(data);
				this.setState({
					tableData: data.data.tableData,
					loading: false
				});
			})
	}
	componentWillMount() {
		this.loadData();
	}
	render() {
		//单选
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(selectedRowKeys.splice(-1))
				selectedRowKeys: this.state.selectedRowKeys,
					this.setState({
						selectedRowKeys: selectedRowKeys.slice(-1),
						selectedRows: selectedRows.slice(-1)
					})
			},
			getCheckboxProps: record => ({
				disabled: record.name === 'Joe Black', //禁止勾选特定选项
				name: record.name,
			}),
		}
		const selState = this.state.selectedRowKeys.length > 0;
		const columns=[{
					title: '姓名',
					key: 'name',
					dataIndex: 'name',
					sorter: (a, b) => {
						return a.name.length - b.name.length
					},
					filterDropdown: (
						<div className="custom-filter-dropdown">
				          <Input
				            ref={ele => this.searchInput = ele}
				            placeholder="Search name"
				            style={{width:'60%',marginRight:5}}
				            value={this.state.searchText}
				            onChange={(e)=>{this.setState({searchText:e.target.value})}}
				          />
				          <Button type="primary" onClick={this.onSearch.bind(this)}>Search</Button>
				        </div>
					),
					filterIcon: < Icon type = "smile-o"/>,
				},
				{
					title: '年龄',
					key: 'age',
					dataIndex: 'age'
				},
				{
					title: '性别',
					key: 'sex',
					dataIndex: 'sex'
				},
				{
					title: '地址',
					dataIndex: 'address',
					key: 'address',
					render: (text, record) => {
						return <div>
									<Tooltip title={text}>
										<span>{text&&text.length>5?text.substr(0,5)+'…':text}</span>
									</Tooltip>
								</div>
					}
				}
			]
		
		return(
			<div>
				<Card>
					<Button type="danger" style={{margin:'10px'}}
	                       			 disabled={!selState} 
	                       		 >删除<Icon type="minus" /></Button>
					<Spin spinning={this.state.loading}>
						<Table
							columns={columns}
							dataSource={this.state.tableData}
							rowSelection={rowSelection}
							align='center'
							pagination = {this.state.pagination}
							onRowClick={(record)=>{console.log(record)}}
						/>
					</Spin>
				</Card>
			</div>
		)
	}
}