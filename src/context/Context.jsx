import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {
    const [input,setInput] = useState("")
    const [recentPrompt,setRecentPropmt] = useState("")
    const [prevPrompt,setPrevPrompt] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")

    const onSent = async(prompt) => {
      await  run(input);
    }
    
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPropmt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider