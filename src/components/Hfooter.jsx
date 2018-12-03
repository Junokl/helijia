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
                { title: "首页", href: "/home/", channel: "", imgsrc: 'https://img.miyabaobei.com/d1/p4/2016/09/18/fb/a0/fba006d51eb091cf3b63299c59d5e38c813134250.png' },
                { title: "分类", href: "/list/", channel: "", imgsrc: 'https://img.miyabaobei.com/d1/p5/2016/09/18/90/f1/90f1f82889b47a8de835621452eed22e790295573.png' },
                { title: "购物车", href: "/car/", channel: "", imgsrc: 'https://img.miyabaobei.com/d1/p4/2016/09/18/88/4e/884e4655e40f2c8e0ad9463a52de7546790508785.png' },
                { title: "我的", href: "/my/", channel: "", imgsrc: 'https://img.miyabaobei.com/d1/p5/2016/09/18/83/b5/83b56a7715f4c3184b5fc141a6a66435790687263.png' }
            ]
        }
    }
    gotopath(index, e) {
        console.log(index);
        this.setState({
            nav: index
        })
        // this.props.dispatch.push(this.state.navs[index].href)
    }
    render() {
        return (
            <div className="footerNav">
                <ul className="tab5">
                    {
                        (() => {
                            return this.state.navs.map((item, index) => {
                                return (

                                    <li className="cur">
                                        <Link to={{ pathname: `${item.href}` }} replace key={index}
                                            onClick={this.gotopath.bind(this, index)}>
                                            <img src={item.imgsrc} cursrc={item.imgsrc} alt='' />
                                            <span className='f-title'>{item.title}</span>
                                        </Link>
                                    </li>

                                )

                            })
                        })()
                    }

                </ul>
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