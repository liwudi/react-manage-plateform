import React, { PureComponent  } from 'react';


let state = {
    list: [1,2,3]
}

function connect(fun1) {
    let obj = fun1(state);
    return function (Com) {
        return class AAA extends PureComponent{
            render() {
                return (<Com {...obj}></Com>)
            }
        }
    }
}

class Bpp extends PureComponent{
    render() {
        return (
            <div>
                123, {this.props.aaa}
            </div>
        )
    }
}

export default connect((state) => {
    return {
        aaa: state.list
    }
})(Bpp)