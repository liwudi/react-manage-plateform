/**
 * Created by mapbar_front on 2019-03-23.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { addNumber, delNumber,addList } from '../../actions';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import { getData } from '../../services/AppService';

class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }
    componentDidMount() {
        let { dispatch } = this.props;
        getData({
            start: 1,
            city: '北京',
            count: 5
        }).then(res => {
            console.log(res);
            let list  = res.subjects;
            //this.props.dispatch(addList(list));
            this.props.addList(list);
        })
    }
    addHandleClick () {
        // let { dispatch } = this.props;
        // let action = actionCreators.addNumber(3);
        // dispatch(action);

        this.props.addNumber(1);
    }
    decHandleClick() {
        //this.props.dispatch(actionCreators.delNumber(3))
        this.props.delNumber(1);
    }
    testClick () {
        this.props.delNumber(1);
    }
    render() {
        // const { addHandleClick,decHandleClick } = this.props;
        return (
            <div>
                <h1>Login</h1>
                <h1>{this.props.count}</h1>
                <ul>
                    {
                        this.props.list.map(item => {
                            return <li key={item.title}>{item.title}</li>
                        })
                    }
                </ul>
                <Button className='margin10' type="primary" onClick={ this.addHandleClick.bind(this) }>add</Button>
                <Button className='margin10' type="primary" onClick={ this.decHandleClick.bind(this) }>dec</Button>
                <Button type="primary" onClick={ this.testClick.bind(this) }>dec</Button>

                {/*<Button className='margin10' type="primary" onClick={ addHandleClick }>add</Button>*/}
                {/*<Button type="primary" onClick={ decHandleClick }>dec</Button>*/}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.number,
        list: state.list
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addHandleClick: ()=> dispatch(addNumber(1)),
//         decHandleClick: ()=> dispatch(delNumber(1)),
//     }
// }

const mapDispatchToProps = (dispatch)=> {
    console.log('mapDispatchToProps',bindActionCreators(actionCreators,dispatch));
    // return bindActionCreators(actionCreators,dispatch)

    return {
        //dispatch: dispatch,
        ...bindActionCreators(actionCreators,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
