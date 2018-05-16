import { Card, Anchor, BackTop, Button, Radio, LocaleProvider, List } from 'antd';
const {
	Link
} = Anchor;
import { FormattedMessage } from 'react-intl';

export default class AnchorList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			name: 'Eric',
			unreadCount: 1000,
		}
	}
	changeLocale(e) {
		const localeValue = e.target.value;
		this.setState({
			locale: localeValue
		});

	}
	render() {
		const data = [
			'Racing car sprays burning fuel into crowd.',
			'Japanese princess to wed commoner.',
			'Australian walks 100km after outback crash.',
			'Man charged over missing wedding girl.',
			'Los Angeles battles huge wildfires.',
		];
		const {
			name,
			unreadCount
		} = this.state;
		return(
			<div>
				<Card title='锚点'>
					<Anchor affix={false}>
						<Link href="#api" title='API' />
					</Anchor>
				</Card>
				<Card title="分割线" className="btnTop">
					<p>这是一段文字!</p>
					<p>这是一段文字!</p>
				</Card>
				<Card title="国际化" className="btnTop">
					<p>
		                <FormattedMessage
		                    id="welcome"
		                    defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
		                      one {message}
		                      other {messages}
		                    }`}
		                    values={{name: <b>{name}</b>, unreadCount}}
		                />
		            </p>
				</Card>
				<Card title="列表" className="btnTop">
					<List
				      size="small"
				      header={<div>Header</div>}
				      footer={<div>Footer</div>}
				      bordered
				      dataSource={data}
				      renderItem={item => (<List.Item>{item}</List.Item>)}
				    />
				</Card>
			</div>
		)
	}
}