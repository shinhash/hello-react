import React from "react";

const MyComponent = ({temp, children}) => {
    return <div>new component test! {temp} :: {children} </div>
    // return <div>new component test! {props.temp}</div>
}

MyComponent.defaultProps = {
    temp : '기본값!'
};

// 다른 파일에서 해당 파일을 불러올 수 있도록 설정
export default MyComponent;