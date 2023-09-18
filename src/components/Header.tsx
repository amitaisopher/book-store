"use client";

// import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { ShopContextType, useShopContext } from '@/context/ShopContextProvider'
import { useEffect, useState } from "react";
import SearchBar from "./ui/SearchBar";
import { composeQueryParamValue } from "@/lib/utils";
import Cart from "@/components/ui/Cart";

const Header = () => {
  const { clearCart, setSearchValue } = useShopContext() as ShopContextType
  const [userSearchString, setUserSearchString] = useState('')
  useEffect(() => {
    const debounceInterval = 500
    if (userSearchString.length > 0) {
      const timerId = setTimeout(() => {
        setSearchValue(composeQueryParamValue(userSearchString))
      }, debounceInterval)
      return () => {clearTimeout(timerId)}
    }
  }, [userSearchString])

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setUserSearchString(e.target.value)
  }
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b mb-5">
      <Container>
        <div className="flex-col h-[140px] md:flex-row relative px-4 sm:px-6 lg:px-8 flex md:h-16 items-center justify-between w-full">
          <div data-testid="header-title" className="flex items-center">
           The Book Store
          </div>
          <SearchBar data-testid="book-store-search-bar" value={userSearchString} onChange={searchHandler} className="max-w-xs"></SearchBar>
           <div className="flex items-center">
            <Button data-testid="clear-cart-button" onClick={() => clearCart()}>Clear cart</Button>
            
            <Cart/>
            
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;