import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

import Hfooter from '../../components/Hfooter.jsx';
import Hsearch from '../Home/Hsearch.jsx';
class Index extends Component{
    constructor(props){

        super(props);
        this.props = props;
        console.log(props);
        this.state = {
            history:""
        }
    }
    aaa(){
        this.setState({
            history:this.props.history
        })
    }

    render(){
        return (
            <div>
                这是Home
                <Hsearch></Hsearch>
                <Hfooter ss={this.state.history}></Hfooter>
            </div>
        );
    }
    componentWillMount(){
        this.aaa()
    }
}
export default Index;