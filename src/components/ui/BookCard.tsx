import { FC } from 'react';
import { Card, CardContent, CardFooter} from '@/components/ui/card';
import { Book } from 'types';
import { Button } from './button';
import { ShopContextType, useShopContext} from '@/context/ShopContextProvider';
import { Bird } from 'lucide-react';

interface BookCardProps {
  bookData: Book
}

const BookCard: FC<BookCardProps> = ({bookData}) => {
  const {addToCart, cartItems} = useShopContext() as ShopContextType
  const addToCartHandler = () => {
    addToCart({
      id: bookData.id,
      name: bookData.volumeInfo.title,
      thumbnail: bookData.volumeInfo.imageLinks.smallThumbnail
    })
  }
  const cartItemAmount = cartItems[bookData.id]?.amount ?? 0
  return (
    <Card className="rounded-lg border-2 flex flex-col">
          <CardContent className="pt-4">
            <div className="flex justify-center items-center aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              {
                bookData.volumeInfo.imageLinks?.thumbnail ?
                <img
                  src={bookData.volumeInfo.imageLinks?.thumbnail ?? ''}
                  alt={bookData.volumeInfo.title}
                  className="aspect-auto object-cover rounded-lg transition-all duration-300 hover:scale-105"
                />
                : <Bird />
              }
            </div>
          </CardContent>
          <CardFooter className="flex-col justify-between grow">
            <div className='mx-auto'>
              <p className="font-semibold text-lg text-ellipsis">{bookData.volumeInfo.title}</p>
              {/* <p className="text-sm text-primary/80">{bookData.volumeInfo.publishedDate.split('-')[0]}</p> */}
            </div>
            {/* <div className="mx-auto items-center justify-between">{bookData.volumeInfo.publishedDate.split('-')[0]}</div> */}
            <Button className='mt-4' variant='default' onClick={addToCartHandler} >Add to cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}</Button>
          </CardFooter>
        </Card>
  )
}

export default BookCard