// import { Component } from 'react' 是把 import 语法和解包结合在一起
import React, {Component} from 'react'
import './App.css'

import {Calendar} from 'antd';
import 'antd/dist/antd.css'

class App extends Component {
    constructor(props) {
        super(props)
        // react 的操作思路是通过修改 this.state 这个变量来改变页面的 UI
        this.state = {
            foldCalendar: true,
            activeItem: 4,
            activeRemindItem:0,
            date:'2019-7-13'
        }
    }

    handleToggleFold = (e) => {
        // 日历折叠
        let close = !this.state.foldCalendar
        this.setState({
            foldCalendar: close,
        })
    }

    handleToggleHighlight = (index) => {
        // 点击高亮
        this.setState({
            activeItem: index,
        })
    }

    RemindHighlight = (index) => {
        // "提醒栏目"点击高亮
        this.setState({
            activeRemindItem: index,
        })
    }

    onCalendarChange = (moment) => {
        // 点击选择时间，并且显示在顶部上方
        let s = moment.format('YYYY-MM-DD')
        this.setState({
            date: s,
        })
    }

    onPanelChange = (value, mode) => {
        console.log(value, mode);
    }

    render() {
        let cls = this.state.foldCalendar ? 'close' : ''
        let cls1 = this.state.foldCalendar ? '' : 'up'
        let activeItem = this.state.activeItem
        let activeRemindItem = this.state.activeRemindItem
        let date = this.state.date

        let items = [
            {
                className: 'icon-shandian',
                title: '工作',
            },
            {
                className: 'icon-jiaose',
                title: '角色',
            },
            {
                className: 'icon-quan',
                title: '事项圈',
            },
            {
                className: 'icon-tongshi',
                title: '同事',
            },
            {
                className: 'icon-rili',
                title: '日历',
            },
        ]

        let remindItems = [
            {
                className: 'first',
                title: '已设置提醒',
            },
            {
                className: 'first',
                title: '创建时间',
            },
            {
                className: 'last',
                title: '最后发言时间',
            },
        ]

        return (
            <div className="App">
                {/*顶部的黑色框*/}
                <div id="id-head">
                    <div className="left">
                        <span className="signal iconfont icon-xinhao2"></span>
                        <span className="moblie">中国移动</span>
                        <span className="wifi iconfont icon-WIFIwofi"></span>
                    </div>
                    <div className="middle">
                        <span className="date">{date}</span>
                    </div>
                    <div className="right">
                        <span className="electric iconfont icon-electric-quantity-80-copy-copy"></span>
                        <span className="today">今天</span>
                    </div>
                </div>

                { /*展开与收起栏目*/}
                <div className={`fold ${cls}`}>
                    <Calendar
                        fullscreen={false}
                        onPanelChange={this.onPanelChange}
                        onChange={this.onCalendarChange}
                    />
                </div>
                <div id="up-down">
                    <span
                        className={`upanddown iconfont icon-zhankaiyushouqi ${cls1}`}
                        onClick={this.handleToggleFold}
                    ></span>
                </div>
                {/*工作提醒栏目*/}
                <div id="id-remind">
                    {
                        remindItems.map((each, index) => {
                            let isActive = activeRemindItem === index
                            let highlight = isActive ? 'highlight' : ''
                            let handleFunc = () => this.RemindHighlight(index)
                            return (
                                <span
                                    key={index}
                                    className={`remind ${each.className} ${highlight}`}
                                    onClick={handleFunc}
                                >{each.title}</span>
                            )
                        })
                    }
                </div>
                {/*中间的内容*/}
                {/*内容1*/}
                <div id="id-content">
                    <div className="contentleft">
                        <div className="title">227市场</div>
                        <div className="content">定价依据客户谈判</div>
                        <div className="roleone">我的角色：经办人</div>
                    </div>
                    <div className="contentright">
                        <span className="time">17:00</span>
                        <span className="cssfortime iconfont icon-diandiandian"></span>
                    </div>
                </div>
                {/*内容2*/}
                <div id="id-contentcopy">
                    <div className="contentleftcopy">
                        <div className="title">新软件</div>
                        <div className="content">成立体验小组，测试软件</div>
                        <div className="roletwo">我的角色：交办人</div>
                    </div>
                    <div className="contentrightcopy">
                        <span className="time">18:00</span>
                        <span className="cssfortime iconfont icon-diandiandian"></span>
                    </div>
                </div>
                <div id="work-platform">
                    <div className="cssforiterms">
                        {
                            items.map((icon, index) => {
                                let isActive = activeItem === index
                                let cls = isActive ? 'active' : ''
                                let handleFunc = () => this.handleToggleHighlight(index)
                                return (
                                    <span
                                        key={index}
                                        className={`icon iconfont ${icon.className} ${cls}`}
                                        onClick={handleFunc}
                                    >
                                        <span className="eachitem">{icon.title}</span>
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// 把 App 这个组件导出, 这样就可以在其他文件 (比如 index.js) 里通过 import 的方式引入
export default App

// import { Component } from 'react' 是把 import 语法和解包结合在一起
import React, {Component} from 'react'
import './App.css'

import {Calendar} from 'antd';
import 'antd/dist/antd.css'
import moment from 'moment'



// React 里定义一个组件 (组件通常是一个类) 的方式
// extends 的意思是继承, 也就是说 App 这个组件继承 Component 组件
class App extends Component {
    // constructor 传入了一个 props 参数, 这是一个固定套路写法
    constructor(props) {
        // super(props) 也是一个固定套路
        super(props)
        // react 的操作思路是通过修改 this.state 这个变量来改变页面的 UI
        this.state = {
            foldCalendar: true,
            activeItem: 4,
            activeRemindItem:0,
            date:'2019-7-13'
        }
    }

    handleToggleFold = (e) => {
        let close = !this.state.foldCalendar
        // 直接通过 this.setState 的方式更改 state
        this.setState({
            foldCalendar: close,
        })
    }

    handleToggleHighlight = (index) => {
        // 直接通过 this.setState 的方式更改 state
        this.setState({
            activeItem: index,
        })
    }

    RemindHighlight = (index) => {
        // 直接通过 this.setState 的方式更改 state
        this.setState({
            activeRemindItem: index,
        })
    }

    onCalendarChange = (moment) => {
        let s = moment.format('YYYY-MM-DD')
        this.setState({
            date: s,
        })
    }

    onChangeValue = (moment) => {
        let s = moment.format('YYYY-MM-DD')
        this.setState({
            date: s,
        })
    }

    onPanelChange = (value, mode) => {
        console.log(value, mode);
    }

    // render 方法对于大多数组件来说都是必要的
    // return 的内容会被渲染到页面中
    render() {
        let cls = this.state.foldCalendar ? 'close' : ''
        let cls1 = this.state.foldCalendar ? '' : 'up'
        let activeItem = this.state.activeItem
        let activeRemindItem = this.state.activeRemindItem
        let date = this.state.date

        let items = [
            {
                className: 'icon-shandian',
                title: '工作',
            },
            {
                className: 'icon-jiaose',
                title: '角色',
            },
            {
                className: 'icon-quan',
                title: '事项圈',
            },
            {
                className: 'icon-tongshi',
                title: '同事',
            },
            {
                className: 'icon-rili',
                title: '日历',
            },
        ]

        let remindItems = [
            {
                className: 'first',
                title: '已设置提醒',
            },
            {
                className: 'first',
                title: '创建时间',
            },
            {
                className: 'last',
                title: '最后发言时间',
            },
        ]

        return (
            <div className="App">
                {/*顶部的黑色框*/}
                <div id="id-head">
                    <div className="left">
                        <span className="signal iconfont icon-xinhao2"></span>
                        <span className="moblie">中国移动</span>
                        <span className="wifi iconfont icon-WIFIwofi"></span>
                    </div>
                    <div className="middle">
                        <span className="date">{date}</span>
                    </div>
                    <div className="right">
                        <span className="electric iconfont icon-electric-quantity-80-copy-copy"></span>
                        <span className="today"
                        >今天</span>
                    </div>
                </div>

                { /*展开与收起栏目*/}
                <div className={`fold ${cls}`}>
                    <Calendar
                        value={date}
                        fullscreen={false}
                        onPanelChange={this.onPanelChange}
                        onChange={this.onCalendarChange}
                    />
                </div>
                <div id="up-down">
                    <span
                        className={`upanddown iconfont icon-zhankaiyushouqi ${cls1}`}
                        onClick={this.handleToggleFold}
                    ></span>
                </div>

                {/*工作提醒栏目*/}
                <div id="id-remind">
                    {
                        remindItems.map((each, index) => {
                            let isActive = activeRemindItem === index
                            let highlight = isActive ? 'highlight' : ''
                            let handleFunc = () => this.RemindHighlight(index)
                            return (
                                <span
                                    key={index}
                                    className={`remind ${each.className} ${highlight}`}
                                    onClick={handleFunc}
                                >{each.title}</span>
                            )
                        })
                    }
                </div>

                {/*中间的内容*/}
                {/*内容1*/}
                <div id="id-content">
                    <div className="contentleft">
                        <div className="title">227市场</div>
                        <div className="content">定价依据客户谈判</div>
                        <div className="roleone">我的角色：经办人</div>
                    </div>
                    <div className="contentright">
                        <span className="time">17:00</span>
                        <span className="cssfortime iconfont icon-diandiandian"></span>
                    </div>
                </div>
                {/*内容2*/}
                <div id="id-contentcopy">
                    <div className="contentleftcopy">
                        <div className="title">新软件</div>
                        <div className="content">成立体验小组，测试软件</div>
                        <div className="roletwo">我的角色：交办人</div>
                    </div>
                    <div className="contentrightcopy">
                        <span className="time">18:00</span>
                        <span className="cssfortime iconfont icon-diandiandian"></span>
                    </div>
                </div>

                {/*底部的工具栏*/}
                <div id="work-platform">
                    <div className="cssforiterms">
                        {
                            items.map((icon, index) => {
                                let isActive = activeItem === index
                                let cls = isActive ? 'active' : ''
                                let handleFunc = () => this.handleToggleHighlight(index)
                                return (
                                    <span
                                        key={index}
                                        className={`icon iconfont ${icon.className} ${cls}`}
                                        onClick={handleFunc}
                                    >
                                        <span className="eachitem">{icon.title}</span>
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// 把 App 这个组件导出, 这样就可以在其他文件 (比如 index.js) 里通过 import 的方式引入
export default App


