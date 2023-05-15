import React from "react";
// import logo from "./logo.svg";
import "./App.css";
//import MyComponent from './MyComponent';
//import Counter from './Counter';
import Animal from './Animal';



const App = () => {
  
  return <Animal kind="고양이" color="#3FFF00">고양이</Animal>
}





// const App = () => {
  
//   // return <MyComponent temp='Youtube'/> 
//   // return <MyComponent temp='ttt'>tmp1,test1sdcsdc</MyComponent> 
//   return <Counter/>
// }

// function App(){
//   return <MyComponent />
// }


// function App() {
//   const temp = "test";
//   const nullchk = undefined;

//   // return nullchk || 'this value is undifinded';

//   return (
//     <div>
//       /* 주석 테스트 1 */
//       {/* 주석 테스트 2 */}
//       {temp === "react" ? <div>is react!!</div> : <div>not react!!</div>}
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       This is React test
//     //       <br/>
//     //       I am 신하승
//     //     </p>
//     //     <a href="https://youtube.com"
//     //        className="App-link"
//     //        target="_blank"
//     //        rel="noopener noreferrer">
//     //       GO youtube
//     //     </a>
//     //     <div className="logo-div">
//     //       <img src={logo} className="App-logo logo-left" alt="logo" />
//     //       <img src={logo} className="App-logo logo-right" alt="logo" />
//     //     </div>
//     //   </header>
//     //   <div>
//     //     <p>
//     //       <span className="qa">다들 저녁식사는 하셨나요?</span>
//     //       <br/>
//     //       <span className="ans">저는 짜글이 먹었습니다. ㅎㅎ</span>
//     //     </p>
//     //   </div>
//     // </div>
//   );
// }

export default App;
