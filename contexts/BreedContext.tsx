import axios from "axios"
import { createContext, useContext } from "react"
import useSWR from 'swr'
interface Context {
    breed: []
    isLoadingBreed: boolean
}

const BreedContext = createContext<Context>({
    breed : [],
    isLoadingBreed: false
})

interface Props {
    children: JSX.Element
}

const BreedContextProvider:React.FC<Props> = ({children}) => {
    const fetcher = (url:string) => axios.get(url).then(res=>res.data)
    const {data,error,isLoading} = useSWR('https://api.thecatapi.com/v1/breeds',fetcher)
    return (
        <BreedContext.Provider value={{breed:data, isLoadingBreed: isLoading}}>
            {children}
        </BreedContext.Provider>
    )
}

export default BreedContextProvider
export const useBreed = () => useContext(BreedContext)
