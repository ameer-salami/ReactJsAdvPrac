import { useState } from 'react'
import './App.css'
import SearchComponent from './components/SearchComponent'
import { TitleText } from './components/TitleText'

function App() {

  const [searchFor, setSearchFor] = useState("")
  const [userIsTyping, setUserIsTyping] = useState(false)
  const [blankSearchData, setBlankSearchData] = useState(false)

  const updateView = (data:string, isBlank:boolean) :void => {
    if(data === "typing") {
      setUserIsTyping(true)
      setBlankSearchData(isBlank)
    } else {
      setUserIsTyping(false)

      setSearchFor(data)
    }
  }

  return (
    <>
        <TitleText color='#000'/>
        <hr />
        <SearchComponent onAction={updateView} />
        {userIsTyping && !blankSearchData && <h3>Typing. . .</h3>}
        {userIsTyping === false && searchFor && <h3>Searching for {searchFor} . . .</h3>}
    </>
  )
}

export default App
