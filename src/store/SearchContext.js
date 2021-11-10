import { createContext, useState } from 'react'

export const SearchContext = createContext();

export function SearchProvider(props) {
    const [searchText, setSearchText] = useState([])

    return (
        <SearchContext.Provider value={[searchText, setSearchText]}>
            {props.children}
        </SearchContext.Provider>
    )
}
