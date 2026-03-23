import { memo} from "react"
import { type ChildInfo } from "./utils/types"

export const Child = memo( ({userInf, nameChangeEventHandler} : {userInf:ChildInfo, nameChangeEventHandler:React.ChangeEventHandler<HTMLInputElement>}) => {
// export const Child = memo( ({userInf} : {userInf:ChildInfo}) => {
    // const [name, setName] = useState(userInf.name)
    console.log("Child component rendered.")
    return (
        <>
            <h3>child name:</h3>
            Change name to force re render Child 
            <br />
            <input type="text" value={userInf.name} onChange={nameChangeEventHandler} />
            {/* <input type="text" value={userInf.name} /> */}
        </>
    )
})