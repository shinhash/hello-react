import React, {useState} from 'react';
import bgImg from 'D:/my_react/hello-react/src/20171017_153238_HDR.jpg';


const Animal = props => {
    
    // 초기설정 후 추후 셋팅 메서드 설정
    const [message, setMessage] = useState('대기!!!');

    return (
        <div style={{backgroundColor: props.color}}>
            <div>
                <img 
                    style={{width: 300, height: 300}} 
                    src={bgImg} 
                    alt={"travlePicture"} 
                />
            </div>
            <button 
                onMouseOver={((event)=>{
                    setMessage("달려!!!!!");
                })}
                onMouseLeave={((event)=>{
                    setMessage("대기!!!");
                })}
            >버튼오버</button>
            <h1>이 동물의 이름은 {props.kind} 입니다.</h1>
            <div>bark : {message}</div>
        </div>
    );
};

export default Animal;