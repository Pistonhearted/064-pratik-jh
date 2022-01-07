
import { useState } from "react";
export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const parent = "container-fluid";
  const header = "row bg-secondary text-light";
  const headerstyle = "d-flex align-items-center p-2";
  const inputField = "row mt-2";
  const person1 = "alert alert-secondary border-secondary text-light";
  const person2 = "text-end alert alert-secondary border-secondary text-dark";

  const studName = "Pratik Bankar";
  const studId = "2100940520064";


  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const getText = (e) => {
    let newText = e.target.value;
    setText(newText);
  };

  const sendMsg = () => {
    if (text !== "") {
      let newList = [...list, text];
      setList(newList);
    }
  };
  

  return (
    <div>

      <div className={parent}>
        <div className={header}>
          <div className={headerstyle}>
            <h2>MyChat App</h2>
            <h6 className="m-0 ms-2">
              by {studName}/{studId}
            </h6>
          </div>
        </div>
      
    
        <input
          className="w-70 p-3"
          style={{ "border-radius": "10px" }}
          type="text"
          placeholder="Lets chat here..."
          value={msg}
          onchange={getText}
        />
     
        <input className="p-4 ms-2"
          style={{ "border-radius": "10px", width: "130px" }}
          type="button" value="SEND" onClick={sendMsg} />
      </div>
      <div>
        {list.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className={person1}> {item} </div>
            );
          } else {
            return (
              <div key={index} className={person2}> {item} </div>
            );
}
      })}
    </div>
    </div >
      
        );
}