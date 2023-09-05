import { FC } from 'react'
import { Input, InputProps } from "@/components/ui/input"


interface SearchBarProps extends InputProps {} 


const SearchBar: FC<SearchBarProps> = (props) => {
  return <Input type="search" placeholder="Search..." {...props}/>
}

export default SearchBar