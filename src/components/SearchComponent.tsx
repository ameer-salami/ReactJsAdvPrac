import React, { useEffect, useState } from "react"
import useDebounce from "./utils/useDebounce"
import type { ChildProps } from "./utils/types"

const SearchComponent:React.FC<ChildProps> = ({onAction}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        if(debouncedSearchTerm) {
            console.log("Fetching data for ", debouncedSearchTerm)
            onAction(debouncedSearchTerm, false)
        }
    }, [debouncedSearchTerm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
        onAction("typing", event.target.value === "" ? true:false)
    }

    return (
        <input type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={handleInputChange}
        />
    )
}

export default SearchComponent