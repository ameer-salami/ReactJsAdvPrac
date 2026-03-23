import { type ChangeEventHandler, useCallback, useMemo, useState } from "react"
import { Child } from "./Child"
import type { ChildInfo, TextColor } from "./utils/types"
import { Counter } from "./Counter"

export const TitleText = ({color} : TextColor) => {

    const [title, setTitle] = useState("")
    const [counter, setCounter] = useState(1)
    const [currentColor, setCurrentColor] = useState(color)
    const [workerName, setWorkerName] = useState("Malala")

    const colorStyle: React.CSSProperties = {
        backgroundColor: currentColor
    }

    const handleTextInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)

        console.log(title);
    }

    const handleNumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const hexVals:string[] = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        setCounter(+e.target.value);

        let newColor:string = '#' + hexVals[Math.floor(Math.random()*16)]
        newColor+=hexVals[Math.floor(Math.random()*16)]
        newColor+=hexVals[Math.floor(Math.random()*16)]
        newColor+=hexVals[Math.floor(Math.random()*16)]
        newColor+=hexVals[Math.floor(Math.random()*16)]
        newColor+=hexVals[Math.floor(Math.random()*16)]

        setCurrentColor(newColor)

    }

    const handleChildNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("child name : ", e.target.value);
        setWorkerName(e.target.value)
    }

    const handleChildNameChangeCB = useCallback<ChangeEventHandler<HTMLInputElement>>(handleChildNameChange, [color])

    // const workerInfo = useMemo(() => {name:"Malala"}, [])
    const workerInfo = useMemo<ChildInfo>(():ChildInfo => ({name:workerName}) , [workerName,counter])
    // setCounter(1);
    return (
        <>
            {/* <Child name='Asgar' /> */}
            <br />
            -- See console --
            <br />
            <br />
            counter: {counter}
            <br />
            change counter value to (change color) and force re render Child : <Counter count={counter} changeEventHandler={handleNumberChange} />
            <br />
            text color: {currentColor} &nbsp;&nbsp;&nbsp;<span style={colorStyle} >&nbsp;&nbsp;&nbsp;</span>
            <br />
            <Child userInf={workerInfo} nameChangeEventHandler={handleChildNameChangeCB} />
            {/* <Child userInf={workerInfo} /> */}
            <br />
            <br />
            Title: &nbsp;
            <input type="text" value={title} placeholder="type title" onChange={handleTextInput} />
            <h3>title: {title} </h3>
        </>
    )
}