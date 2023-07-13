import React from "react";
import Select from "react-select";
import '../styles/ExchangeRate.css';
import LineChart from './LineChart';


const numToMonth ={
    1:'Jan',
    2:'Feb',
    3:'Mar',
    4:'Apr',
    5:'May',
    6:'Jun',
    7:'Jul',
    8:'Aug',
    9:'Sep',
    10:'Oct',
    11:'Nov',
    12:'Dec'
}   

export default function ExchangeRate({options,yearOpt}) {

    const [selectedOption, setSelectedOption] = React.useState("");
    const [showgraph, setshowgraph] = React.useState({
        show:false,
        data:[],
        label:[],
        comData:[],
    });

    const [peakRating, setPeakRating] = React.useState({
        maxrating : 0,
        maxdate:'',
        minrating : 0,
        mindate:'',
    });

    const [selectYear,setselectYear]=React.useState({
        yearX:'',
        yearY:'',
    });
    const [typeRender,settypeRender]=React.useState(1);

    
    
   
    function PopulateData(){
        
       const tempData=[];
       const allData=[];
       const tempLabel=[];
       const allLabel=[];
       const data=showgraph.comData;
        
       
        if(typeRender===1){
            for(let i=0;i<data.length;i++){
                allData.push(data[i].rate);
                allLabel.push(data[i].date+"-"+numToMonth[data[i].month]+"-"+data[i].year);
                if(i%7===0){
                    tempData.push(data[i].rate);
                    tempLabel.push(data[i].date+"-"+numToMonth[data[i].month]+"-"+data[i].year);
                }
            }
        }
        else if(typeRender===2){
            for(let i=0;i<data.length;i++){
                if(i%30===0){
                    tempData.push(data[i].rate);
                    tempLabel.push(data[i].date+"-"+numToMonth[data[i].month]+"-"+data[i].year);
                }
            }
        }
        else if(typeRender===3){
            for(let i=0;i<data.length;i++){
                if(i%90===0){
                    tempData.push(data[i].rate);
                    tempLabel.push(data[i].date+"-"+numToMonth[data[i].month]+"-"+data[i].year);
                }
            }
        }
        else if(typeRender===4){
            for(let i=0;i<data.length;i++){
                if(i%350===0){
                    tempData.push(data[i].rate);
                    tempLabel.push(data[i].date+"-"+numToMonth[data[i].month]+"-"+data[i].year);
                }
            }
        }
        
        setshowgraph((prev)=>{
            return {...prev,show:true,data:tempData,label:tempLabel}
        })

        const maxindex=allData.indexOf(Math.max(...allData));
        const minindex=allData.indexOf(Math.min(...allData));
        const maxrate=allData[maxindex];
        const minrate=allData[minindex];
        const maxdate=allLabel[maxindex];
        const mindate=allLabel[minindex];
        setPeakRating({
            maxrating:maxrate,
            maxdate:maxdate,
            minrating:minrate,
            mindate:mindate,
        })
        

    }
    

    return (
        <div className="exchangeRate">
            <div className="exchange_container">
                <div className="exc_cont1">
                    <div className="countryFirst">USD &nbsp;&nbsp; v/s </div>
                    <div className="countrySecond">
                        <Select className="selectdrp" options={options}  value={selectedOption} 
                        placeholder={selectedOption!=""?selectedOption:"Select"}  onChange={e=>{
                            // e.preverntDefault();
                            console.log(e.value);
                            setSelectedOption(e.value);
                            
                        }} />
                    </div>
                </div>
                
                <div className="exc_cont2">
                    {showgraph!=0&&<div className="parameter_div">
                        <button className="btn_new" onClick={()=>{
                            settypeRender(1);
                            PopulateData();
                        }}>Weekly</button>
                        <button className="btn_new" onClick={()=>{
                            settypeRender(2);
                            PopulateData();
                        }}>monthly</button>
                        <button className="btn_new" onClick={()=>{
                            settypeRender(3);
                            PopulateData();
                        }}>Quarterly</button>
                        <button className="btn_new" onClick={()=>{
                            settypeRender(4);
                            PopulateData();
                        }}>yearly</button>
                    </div>}
                   
                </div>

                   {selectedOption!="" && <div className="selectYear">
                      
                      <Select className="selectyr" options={yearOpt} onChange={(e)=>{
                        setselectYear(()=>{
                            return { ...selectYear,yearX:e.value}
                        })
                      }}/>
                      <p>to</p>
                      <Select className="selectyr" options={yearOpt}  onChange={(e)=>{
                        setselectYear(()=>{
                            return { ...selectYear,yearY:e.value}
                        })
                      }}/>
                      <button className="btn_sub" onClick={()=>{
                            
                            
                            const rawDATA=[]
                            
                            const yx=selectYear.yearX;
                            const yy=selectYear.yearY;
                            const Code=selectedOption;
                            //const sendingRequest = 
                            fetch(`http://localhost:3001/yearXtoY?X=${yx}&Y=${yy}&code=${Code}`).then(res=>res.json()).then(rawData=>{
                                rawData.forEach((data,index)=>{    
                                        rawDATA.push(data); 
                                     
                                })

                                console.log(rawDATA);
                                setshowgraph((prev)=>{
                                    return { ...prev,comData:rawDATA}
                                
                                });

                                PopulateData();
                            });

                          
                          
                      }}>show rate</button>
                 </div> }
            </div>

                     
            <div>
                 {showgraph.show!=false && <LineChart DATA={showgraph.data} LABELS={showgraph.label}/>}       
            </div>

            <div className="peakRating">
                 <div>Highest Rating : {peakRating.maxrating} Date:{peakRating.maxdate} </div> 
                 <div>Minimum Rating : {peakRating.minrating}  Date:{peakRating.mindate}</div> 
            </div>
        </div>
    );
}
