import React, { Component } from 'react';
import {connect} from 'react-redux';
class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="searchHead">
                    <a href="index" className="icon-lt icon-back"> </a>
                    <a href="index" className="icon-lt icon-close" style={{display:"none"}}> </a>
                    <input type="hidden" value="0" className="closeButton" />

                        <a href="index1" className="icon-rt icon-home"> </a>
                        <a href="index" className="icon-rt btn-qx" style={{display:"none"}}>取消</a>

                        <div className="iptbox">
                            <form action="/search/setkeyword" method="get">
                                <input type="search" placeholder="请输入关键字搜索" id="search" name="search"   />
                            </form>
                </div>
                        </div>
                        <div className="search_result" style={{display:"none"}}></div>
                        <div className="search_history">
                            <section className="shBox">
                                <h3 className="search_history1">热门搜索</h3>
                                <ul>
                                </ul>
                            </section>
                            <div className="search_historyHr"></div>
                            <section className="shBox shBoxhistory">
                                <h3 className="search_history2">最近搜索</h3>
                                <ul></ul></section>
                            <div className="btn-clear">清空搜索历史</div>
                        </div>
            </div>
            )
                }
            }
export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        add2(){
            dispatch({
                type:'add2',
                
            })
        }
    }
})(ListHeader);