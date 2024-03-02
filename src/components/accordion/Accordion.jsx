import React, { useState } from "react";
import data from "./data";
import  './style.css';
export default function Accordion(){
    const [selected,setSelected]=useState(null);
    const [enableMultiSelect,setEnableMultiSelect]=useState(false);
    const [multiple,setMultiple]=useState([]);
    function handlleSingleSelection(currentId){
        selected===currentId?
        setSelected(null)
        :setSelected(currentId);

    }
    function handleMultiSelection(currentId){
        let cpyMulti=[...multiple];
        const indexofCurrentId= cpyMulti.indexOf(currentId);
        if (cpyMulti.indexOf(currentId)===-1) cpyMulti.push(currentId);
        else cpyMulti.splice(indexofCurrentId,1);
        setMultiple(cpyMulti);
    }
    
    return(
        <div className="wrapper">
            <button className="multibutton" onClick={()=>{setEnableMultiSelect(!enableMultiSelect);setSelected(null);setMultiple([]);}}>MultiSelect Mode</button>
            {enableMultiSelect?<span>Here</span>:null}
            <div className="accordion">
                {
                    data && data.length>0?
                    data.map(dataItem=>
                        <div className="item" key={'itemkey'+dataItem.id}>
                            <div onClick={
                                enableMultiSelect?()=>handleMultiSelection(dataItem.id)
                                :()=>handlleSingleSelection(dataItem.id)
                            } className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                (selected === dataItem.id||multiple.indexOf(dataItem.id)!==-1)?
                                <div className="content">
                                    {dataItem.answer}
                                </div>
                                :null
                            }
                        </div>
                        )
                    :<div>No Data</div>
                }
            </div>
        </div>

    );
}