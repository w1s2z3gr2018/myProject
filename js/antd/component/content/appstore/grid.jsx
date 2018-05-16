import {Row,Col} from 'antd';

class GridList extends React.Component{
	render(){
		return(
			<div>
				<Row>
					<Col span={6} className='blue'>col-6</Col>
					<Col span={6} className='green'>col-6</Col>
					<Col span={6} className='blue'>col-6</Col>
					<Col span={6} className='green'>col-6</Col>
				</Row>
				<Row gutter={20} className="btnTop">
					<Col span={6} className='gutter-row'>
						<div className='gutter-box'>
							col-6
						</div>
					</Col>
					<Col span={6} className='gutter-row'>
						<div className='gutter-box'>
							col-6
						</div>
					</Col>
					<Col span={6} className='gutter-row'>
						<div className='gutter-box'>
							col-6
						</div>
					</Col>
					<Col span={6} className='gutter-row'>
						<div className='gutter-box'>
							col-6
						</div>
					</Col>
				</Row>
				<Row className="btnTop">
					<Col span={8} offset={2} className='green'>col-8</Col>
				</Row>
				<Row className="btnTop">
					<Col span={8} push={2} className='blue'>col-pull-8</Col>
					<Col span={8} push={3} className='blue'>col-pull-8</Col>
				</Row>
				<Row className="btnTop" type='flex' justify='center'>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
				</Row>
				<Row className="btnTop" type='flex' justify='space-between'>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
				</Row>
				<Row className="btnTop" type='flex' justify='space-around'>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
				</Row>
				<Row className="btnTop" type='flex' justify='end'>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
				</Row>
				<Row className="btnTop" type='flex' justify='start'>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
					<Col span={4} className='blue'>col-pull-8</Col>
					<Col span={4} className='green'>col-pull-8</Col>
				</Row>
			</div>
		)
	}
}
export default GridList;
