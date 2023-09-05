import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { Book } from 'types'

interface InventoryContextProviderProps {
  children: ReactNode
}
export type InventoryContextType = {
    setInventoryItems: React.Dispatch<React.SetStateAction<Book[]>>
    inventoryItems: Book[];
}

export const InventoryContext = createContext<InventoryContextType | null>(null)


export const InventoryContextProvider: FC<InventoryContextProviderProps> = ({children}) => {
    const [inventoryItems, setInventoryItems] = useState<Book[]>([])
    const contextValue = {inventoryItems, setInventoryItems}
    return <InventoryContext.Provider value={contextValue}>{children}</InventoryContext.Provider>
}


export const useInventoryContext = () => {
    const context = useContext(InventoryContext)
    if (context === undefined) {
        throw new Error("useInventoryContext must be used within InventoryContextProvider")
    }
    return context
}