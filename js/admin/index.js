import React from "react";
import ReactDOM from "react-dom";
import './css/public.css';
import '../../css/base.less'
import { Router, Route,hashHistory, Link ,IndexRoute} from 'react-router';
import Main from "./main/main";

ReactDOM.render(	
	<Router history={hashHistory}>
		<Route path="/" component={Main} />
	</Router>,
    document.getElementById("root")
)
