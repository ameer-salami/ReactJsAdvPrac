import type { CounterInputArgs } from "./utils/types"

export const Counter = ({count, changeEventHandler} : CounterInputArgs) => {
    
    const style : React.CSSProperties = {
        height:"25px"
    }

    return <input type="number" style={style} min={1} onChange={changeEventHandler} value={count}/>
}