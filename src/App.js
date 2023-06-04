import { useState } from 'react';
import './App.css';


function App() {  

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>

      <button onClick={()=>{
        let sort = [...글제목];
        sort.sort();
        글제목변경(sort);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy =[...글제목];
        copy[0] ='코트 안추천';
        글제목변경(copy);
      }}>글수정</button>

      {
        글제목.map((a,i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[i] } 
              <span onClick={(e)=>{ 
                e.stopPropagation();
                let ddabong = [...따봉];
                ddabong[i]= ddabong[i]+1;
                따봉변경(ddabong);
                }}>💪</span> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
            </div>)
        })
      }

      <input type="text" onChange={(e)=>{
          입력값변경(e.target.value);
          console.log(입력값);
      }}></input>
      <button onClick={()=>{
        
      }}></button>

      {
        modal === true ? <Modal color={'yellow'} 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }


    </div>
  );
}



function Modal(props){
  return (
    <div className='modal' style={{background:props.color}}>
    <h4>{props.글제목[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
  </div>
  );
}

export default App;
