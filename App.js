import axios from "axios";
import {usestae} from "react";

export default function App(){
  return(
    <>
    MyChatApp
    </>
  );

}

function  MyChatApp(){
  const parent ="container-fluid";
  const header=" row bg-secondary text-light";
  const headstyle ="d-flex align-item-center p-3";
  const inputField="row mt-2";
  const chatStyle1="alert alert-secondary border-secondary text-dark";
  const chatStyle2=" text-end alert alert-secondary border-secondary text-dark";
  const studentNmae="akshay shende";
  const studnetId="210940520009";

  const [list,steList]=useStae([]);
  const [text,setText]=useState("");
  const getText=(e)=>{
    let newText=e.target.value;
    setText(newText);
  };

  const sending=()=>{
    if (text!==""){
      let newList=[...list,text];
      steList(newList);
    }
  };
  return (
    <div className={parent}>
      <div className={header}>
        <div className={headstyale}>
          <h2> MyChatApp</h2> 
          <h6 className="m-0 ms-2">
            by{studentName}/{studentId}
          </h6>
          </div>
      </div>
     <div className={inputField}>
    <div> <input  className="w-75 p-4" 
     style={{"border-radius":"10px", width:"130px"}}
     type="text" 
     placeholder="lets chat here"
     onChange={getTExt}/>

     <input className="p-4 ms-2" 
     type="button"
     style={{"border-radius":"10px", width:"130px"}}
     value="send"
     onClick={sendMsg}
     
      />
      </div>
      <div>
        {list.map((item,index)=>{
          if (index % 2 ==0){
            return(
              <div key={index} className={chatstyle1}>{item}
              </div>
            );
          }
            else{
              return(
                <div key={index} className={chatStyle2}>{item}
                </div>
              )
            }
          
        })}
      </div>

</div>

    </div>
  
  )
}