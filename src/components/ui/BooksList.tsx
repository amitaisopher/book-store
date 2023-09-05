import { FC } from 'react'
import BookCard from '@/components/ui/BookCard'
import { ShopContextType, useShopContext } from '@/context/ShopContextProvider'
import Pagination from './Pagination'


const BooksList: FC = () => {
  const {inventoryItems} = useShopContext() as ShopContextType
  return (
    <div className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {inventoryItems.map((book) => (
                <BookCard key={book.id} bookData={book}></BookCard>
            ))}
        </div>
        <Pagination></Pagination>
    </div>
  )
}

export default BooksList