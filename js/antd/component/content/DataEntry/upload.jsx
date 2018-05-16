import { Card, Upload, Button, Icon, message, Modal } from 'antd';
const Dragger = Upload.Dragger;

class PicturesWall extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			previewVisible: false,
			previewImage: '',
			fileList: [{
				uid: -1,
				name: 'xxx.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}],
		}
	}
	handleCancel() {
		this.setState({
			previewVisible: false
		})
	}
	handlePreview(file) {
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true,
		});
	}
	handleChange({
		fileList
	}) {
		console.log(fileList);
		this.setState({
			fileList
		})
	}
	render() {
		const {
			previewVisible,
			previewImage,
			fileList
		} = this.state;
		const uploadButton = (
			<div>
	       	    <Icon type="plus" />
	            <div className="ant-upload-text">Upload</div>
	        </div>
		);
		return(
			<div className="clearfix">
		        <Upload
		          action="//jsonplaceholder.typicode.com/posts/"
		          listType="picture-card"
		          fileList={fileList}
		          onPreview={this.handlePreview.bind(this)}
		          onChange={this.handleChange.bind(this)}
		        >
		          {fileList.length >= 3 ? null : uploadButton}
		        </Upload>
		        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
		          <img alt="example" style={{ width: '100%' }} src={previewImage} />
		        </Modal>
		     </div>
		);
	}
}

export default class UploadList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}
	uploadChange(info) {
		console.log(info)
		if(info.file.status !== 'uploading') {
			console.log(info.file, info.fileList)
		}
		if(info.file.status === 'done') {
			message.success(`${info.file.name}上传成功!`)
		} else if(info.file.status === 'error') {
			message.error(`${info.file.name} 上传失败!`)
		}
	}
	render() {
		const props = {
			name: 'file',
			multiple: true,
			action: '//jsonplaceholder.typicode.com/posts/',
			onChange(info) {
				const status = info.file.status;
				if(status !== 'uploading') {
					console.log(info.file, info.fileList);
				}
				if(status === 'done') {
					message.success(`${info.file.name} file uploaded successfully.`);
				} else if(status === 'error') {
					message.error(`${info.file.name} file upload failed.`);
				}
			},
		};
		return(
			<div>
				<Card title="上传">
					<Upload
						name='file'
						action='json/data/past'
						onChange={this.uploadChange.bind(this)}
					>
						<Button><Icon type="upload" />上传</Button>
					</Upload>
				</Card>
				<Card title='图片上传'>
					<PicturesWall />
				</Card>
				<Card title = '区块上传'>
					<Dragger {...props} style={{padding:20 }}>
						<p className="ant-upload-drag-icon" >
					      <Icon type="inbox" />
					    </p>
					    <p className="ant-upload-text">点击这个区域上传</p>
					    <p  className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
					</Dragger>
				</Card>
			</div>
		)
	}
}