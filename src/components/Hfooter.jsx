import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Hfooter extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.props = props;
        console.log(props);
        this.state = {
            nav: 0,
            navs: [
                { title: "凡客", href: "/home/", channel: "", imgsrc: '../imgs/index/Footer-home.png' },
                { title: "分类", href: "/list/", channel: "", imgsrc: '../imgs/index/Footer-fenlei.png' },
                { title: "频道", href: "/pindao/", channel: "", imgsrc: '../imgs/index/Footer-pindao.png' },
                { title: "购物车", href: "/car/", channel: "", imgsrc: '../imgs/index/Footer-car.png' },
                { title: "我的", href: "/my/", channel: "", imgsrc: '../imgs/index/Footer-my.png' }
            ]
        }
    }
    gotopath(index, e) {
        console.log(index);
        this.setState({
            nav: index
        })
        this.props.dispatch.push(this.state.navs[index].href)
    }
    render() {
        return (
            <div id="nav" className="nav clear">
                {
                    (() => {
                        return this.state.navs.map((item, index) => {
                            return (
                                <Link to={{ pathname: `${item.href}` }} replace key={index}
                                    onClick={this.gotopath.bind(this, index)}
                                >
                                    <span id="nav-item" className="nav-item-active">
                                        <img src={item.imgsrc} alt="1" />
                                        <span className='f-title'>{item.title}</span>
                                    </span>
                                </Link>
                            )
                        })
                    })()
                }


            </div>
        )
    }
}
export default connect((state) => {
    console.log(state)
    return state;
}, (dispatch) => {
    return {
        add() {
            dispatch({
                isShow: this
            })
        }
    }
})(Hfooter);