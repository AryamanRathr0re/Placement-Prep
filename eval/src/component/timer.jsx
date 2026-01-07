import { useEffect, useState } from "react"

const DEFAULT_TIME=500

function timer(){
    const[time,setTime]=useState(DEFAULT_TIME)
    const [isRunning,setIsRunning]=useState(false)

    const [isEditing,setIsEditing]=useState(false)
    const [inputValue,setInputValue]=useState("")


   useEffect(()=>{
    if(!isRunning||isEditing||time===0) return 

    const intervalid=setInterval(()=>{
        setTime((prev)=>{
            if(prev<=1){
                setIsRunning(false)
                return 0
            }
            return prev-1
        })
    },1000)

    return ()=>clearInterval(intervalid)
   },[isRunning,isEditing,time])



   const fomatTime=(seconds)=>{
    const min=String(Math.floor(seconds/60)).padStart(2,"0")
        const sec=String(seconds%60).padStart(2,"0")
        return `${min}:${sec}`
    
   }

   const confrimEdit=()=>{
    const newTime=Number(inputValue)
    if(!isNaN(newTime)&&newTime>=0){
        setTime(newTime)
    }
    setIsEditing(false)
   }
}