import { composeQueryParamValue, fetchBookData } from '@/lib/utils';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Book, CartItems, ShopItem } from 'types'

interface ShopContextProviderProps {
  children: ReactNode
}
export type ShopContextType = {
    addToCart: (item: ShopItem) => void;
    removeFromCart: (itemId: string) => void;
    updateCartItemCount: (itemId: string, amount: number) => void
    clearCart: () => void;
    cartItems: CartItems;
    setInventoryItems: React.Dispatch<React.SetStateAction<Book[]>>
    updateInventory: ({ startIndex, maxResults }: {
        startIndex?: number | undefined;
        maxResults?: number | undefined;
    }) => Promise<void>
    inventoryItems: Book[];
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    shopInventorySize: number
    setShopInventorySize: React.Dispatch<React.SetStateAction<number>>
    pageSize: number
    setPageSize: React.Dispatch<React.SetStateAction<number>>
}

export const ShopContext = createContext<ShopContextType | null>(null)


export const ShopContextProvider: FC<ShopContextProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItems>({})
    const [inventoryItems, setInventoryItems] = useState<Book[]>([])
    const [searchValue, setSearchValue] = useState<string>(composeQueryParamValue(''))
    const [shopInventorySize, setShopInventorySize] = useState<number>(0)
    const [pageSize, setPageSize] = useState(10)
    const updateInventory = async ({startIndex = 0, maxResults = 10}: {startIndex?: number, maxResults?: number}) => {
        const response = await fetchBookData({searchValue, startIndex, maxResults, useDummyData: false})
        setInventoryItems(response.items)
        setShopInventorySize(response.totalItems)
        
    }
    useEffect(() => {
        updateInventory({startIndex: 0, maxResults: pageSize})
        setCartItems(JSON.parse(localStorage.getItem('cartData') ?? '{}'))
    }, [searchValue])
    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(cartItems))
    }, [cartItems])

    
    
    const addToCart = (item: ShopItem) => {
        setCartItems((prevState: CartItems) => {
            if (!(item.id in prevState) || prevState[item.id].amount === 0) {
                return {...prevState, [item.id]: {...item, amount: 1 }}
            }
            const newAmount = prevState[item.id].amount + 1
            return {...prevState, [item.id]: {...item, amount: newAmount }}
        })}

    const removeFromCart = (itemId: string) => {
        setCartItems((prevState: CartItems) => {
            if (!(itemId in prevState)) {
                return prevState
            }
            if (prevState[itemId].amount === 1) {
                return Object.fromEntries(Object.entries(prevState).filter(([key, ]) => key !== itemId))
            }
            return {...prevState, [itemId]: {...prevState[itemId], amount: prevState[itemId].amount -1}}
        })}

    const updateCartItemCount = (itemId: string, amount: number) => {
        setCartItems((prevState) => {
            if (!(itemId in prevState)) return prevState
            if (amount <= 0) {
                return Object.fromEntries(Object.entries(prevState).filter(([key, ]) => key !== itemId))
            }
            return {...prevState, [itemId]: {...prevState[itemId], amount}}
        })
    }

    const clearCart = () => {
        setCartItems({})
    }
    
    const contextValue = {addToCart, removeFromCart, clearCart, cartItems, inventoryItems, setInventoryItems, updateInventory,  searchValue, setSearchValue, shopInventorySize, setShopInventorySize, updateCartItemCount, pageSize, setPageSize}
    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}


export const useShopContext = () => {
    const context = useContext(ShopContext)
    if (context === undefined) {
        throw new Error("useShopContext must be used within ShopContextProvider")
    }
    return context
}