import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import Main from '~/component/main';
import ButtonList from '~/component/content/General/button';
import IconList from '~/component/content/General/icon';
import GridList from '~/component/content/appstore/grid';
import LayoutList from '~/component/content/appstore/layout';
import LayoutMenu from '~/component/content/appstore/layoutMenu';
import Affix from '~/component/content/Navigation/Affix';
import MenuCont from '~/component/content/Navigation/menuCont';
import Paginations from '~/component/content/Navigation/pagination';
import AutoCompletes from '~/component/content/DataEntry/AutoComplete';
import DatePickers from '~/component/content/DataEntry/DatePicker';
import Forms from '~/component/content/DataEntry/form';
import Login from '~/component/login/login';
import FormModule from '~/component/content/DataEntry/formModule';
import InputList from '~/component/content/DataEntry/inputList';
import SelectList from '~/component/content/DataEntry/selectList';
import SlideList from '~/component/content/DataEntry/slide';
import TreeSelectList from '~/component/content/DataEntry/treeSelect';
import UploadList from '~/component/content/DataEntry/upload';
import AvatarList from '~/component/content/dataDisplay/avatar';
import CarouselList from '~/component/content/dataDisplay/carousel';
import TableList from '~/component/content/dataDisplay/table';
import TabsList from '~/component/content/dataDisplay/tabs';
import TreeList from '~/component/content/dataDisplay/tree';
import AlertList from '~/component/content/feedback/alert';
import ProgressList from '~/component/content/feedback/progress';
import PopconfirmList from '~/component/content/feedback/popconfirm';
import AnchorList from '~/component/content/other/anchor';

class Routes extends React.Component {
	render() {
		return(
			<Router history={hashHistory}>
				<Route path='/index' component={Login} />
				<Route path='/' component={Main} >
					<Route path='button' component={ButtonList} />
					<Route path='icon' component={IconList}/>
					<Route path='grid' component={GridList}/>
					<Route path='layout' component={LayoutList}/>
					<Route path='layoutMenu' component={LayoutMenu}/>
					<Route path='affix' component={Affix}/>
					<Route path='menuCon' component={MenuCont}/>
					<Route path='paginations' component={Paginations}/>
					<Route path='autoCompletes' component={AutoCompletes}/>
					<Route path='DatePickers' component={DatePickers}/>
					<Route path='forms' component={Forms}/>
					<Route path='formModule' component={FormModule}/>
					<Route path='inputList' component={InputList}/>
					<Route path='selectList' component={SelectList}/>
					<Route path='slideList' component={SlideList}/>
					<Route path='treeSelectList' component={TreeSelectList}/>
					<Route path='uploadList' component={UploadList}/>
					<Route path='avatarList' component={AvatarList}/>
					<Route path='carousel' component={CarouselList}/>
					<Route path='tableList' component={TableList}/>
					<Route path='tabs' component={TabsList}/>
					<Route path='tree' component={TreeList}/>
					<Route path='alert' component={AlertList}/>
					<Route path='progress' component={ProgressList}/>
					<Route path='popConfirm' component={PopconfirmList}/>
					<Route path='anchor' component={AnchorList}/>
					
				</Route>
			</Router>
		)
	}
}

export default Routes;