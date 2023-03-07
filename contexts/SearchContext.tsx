import { createContext, useContext, useState } from "react";

interface Context {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<Context>({
    search: '',
    setSearch: () => {}
})
interface Props {
    children: JSX.Element
}
const SearchContextProvider:React.FC<Props> = ({children}) => {
    const [search, setSearch] = useState('')
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchContextProvider
export const useSearch = () => useContext(SearchContext)