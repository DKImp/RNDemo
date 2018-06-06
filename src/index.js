import 'semantic-ui-css/semantic.min.css';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CommentBox from './comment/CommentBox';
import CommentList from './comment/CommentList';
import CommentFrom from './comment/CommentFrom';
import Comment from './comment/Comment';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">itpose</h1>
                    </header>
                    <div className="ui secondary pointing menu">
                        <Link to="/home" className="item">首页</Link>
                        <Link to="/other" className="item">评论页</Link>
                    </div>
                    <Route path="/home" component={Home} />
                    <Route path="/other" component={Other} />
                </div>
            </Router>
        )
    }
}

class Home extends Component{
    render(){
        return (
            //<div className="ui info message">this a Home page</div>
            <div>welcome to React World</div>
        )
    }
}
class Other extends Component{
    render(){
        return (

            <div>
            <CommentBox url="/comments.json"/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
