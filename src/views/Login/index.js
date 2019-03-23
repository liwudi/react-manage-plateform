/**
 * Created by mapbar_front on 2019-03-23.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumber, addList } from '../../actions'
import { getData } from '../../services/AppService';
class Login extends Component{
    componentDidMount() {
        getData({
            start: 1,
            city: '北京',
            count: 5
        }).then(res => {
            console.log(res);
            let list  = res.subjects;
            this.props.dispatch(addList(list));
        })
    }
    click () {
        this.props.dispatch(addNumber(3))
    }
    render() {
        return (
            <div>
                Login
                <div>{this.props.count}</div>
                <div>
                    {
                        this.props.list.map(item => {
                            return <p key={item.title}>{item.title}</p>
                        })
                    }
                </div>
                <button onClick={this.click.bind(this)}>add</button>
            </div>
        )
    }
}

export default connect((state) => {
    console.log(state);
    return {
        count: state.number,
        list: state.list
    }
})(Login);
