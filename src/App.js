import React, {Component} from 'react'
import './App.css'
import {Calendar} from 'antd';
import 'antd/dist/antd.css'
import moment from 'moment'

class App extends Component {
    constructor(props) {
        super(props)
        let m = moment()
        this.state = {
            foldCalendar: true,
            activeItem: 4,
            activeRemindItem: 0,
            date: m.format('YYYY-MM-DD'),
            backtoday: m,
        }
    }

    handleToggleFold = (e) => {
        let close = !this.state.foldCalendar
        // 日历折叠
        this.setState({
            foldCalendar: close,
        })
    }

    handleToggleHighlight = (index) => {
        // 底部栏目点击高亮
        this.setState({
            activeItem: index,
        })
    }

    RemindHighlight = (index) => {
        // 提醒栏目点击高亮
        this.setState({
            activeRemindItem: index,
        })
    }

    onCalendarChange = (m) => {
        // 点击选择时间，并显示在顶部中间
        let s = m.format('YYYY-MM-DD')
        this.setState({
            date: s,
        })
    }

    onChangeValue = () => {
        // 点击"今天"回到当前日期
        let m = moment()
        this.setState({
            backtoday: m,
            date: m.format('YYYY-MM-DD'),
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
        let backtoday = this.state.backtoday
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
                              onClick={this.onChangeValue}
                        >今天</span>
                    </div>
                </div>
                { /*展开与收起栏目*/}
                <div className={`fold ${cls}`}>
                    <Calendar
                        value={backtoday}
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

// 把 App 这个组件导出
export default App
