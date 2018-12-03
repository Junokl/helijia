import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

import Hfooter from '../../components/Hfooter.jsx';
import ListHeader from '../../pages/List/ListHeader.jsx';
class List extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (

            <div>
                <ListHeader></ListHeader>
                这是List
                <Hfooter></Hfooter>
            </div>
            
        );
    }
}
export default List;