import { useState } from "react";
import data from "../db.json";

export default function Home(data) {
  
  let [open, setOpen] = useState("close");

  return (
    <div>
      <div className="wrap">
      {data.List.map((item) => (
        <div className="wrap_map">
          <p>{item.Question}</p>
          <textarea className="textbox"></textarea>
          <button className="answer" onClick={()=>{open==="open" ? setOpen("close") : setOpen("open")}}>答え</button>
          <div className={open}>
          {item.Anser1.split('\n').map((line)=>{
            return (<p className="true">{line}<br/></p>)
          })}
          <p className="true">{item.Anser2}</p>
          <br/>
          </div>
        </div>
      ))}
      </div>
      <style jsx>{`
        .wrap{
          padding: 20px;
        }
        .wrap_map{
          display: flex;
          flex-direction: column;
        }
        .answer{
          margin: 10px 10px 0 0;
          width: 70px;
        }
        .true{
          color: gray;
        }
        .close{
          display: none;
        }
        .textbox{
          width: 80%;
          height: 80px;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: data,
  };
}
