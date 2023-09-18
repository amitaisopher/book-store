import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useShopContext, ShopContextType } from "@/context/ShopContextProvider";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "./input";


const Cart: FC = () => {
    const {cartItems, clearCart, addToCart, removeFromCart, updateCartItemCount} = useShopContext() as ShopContextType
    const cartItemsAmount = Object.keys(cartItems).length

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
              variant="ghost"
              size="icon"
              className="mr-2 relative"
              aria-label="Shopping Cart"
            >
              <div>
                <ShoppingCart data-testid="shopping-cart-icon" className="h-6 w-6" />
                <span className="sr-only">Shopping Cart</span>
                {cartItemsAmount > 0 && <Badge  className="absolute top-[-17px] left-[13px]">{cartItemsAmount}</Badge>}
              </div>
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-96">
        <DialogHeader>
          <DialogTitle>Your cart</DialogTitle>
          <DialogDescription>
            view items in your cart before completing your purchase
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full gap-4 py-4 max-h-48 overflow-scroll">
          {Object.keys(cartItems).map(itemId => (
            <div className="flex gap-4">
                <div className="flex justify-center">
                    <img className="rounded-lg w-10 aspect-square" src={cartItems[itemId].thumbnail} alt={cartItems[itemId].name} />
                </div>
                <div className="flex flex-col justify-center">
                    <div>{cartItems[itemId].name}</div>
                    <div className="flex">
                        <Button onClick={() => addToCart(cartItems[itemId])}>+</Button>
                        <Input className="px-4 max-w-[80px] min-w-[30px] w-fit" min={0} value={cartItems[itemId].amount} type="number" onChange={(e) => updateCartItemCount(itemId, Number(e.target.value))}/>
                        <Button onClick={() => removeFromCart(itemId)}>-</Button>
                    </div>
                </div>
            </div>
          ))}
        </div>
        <DialogFooter className="items-end">
            <DialogClose asChild>
            <Button onClick={() => clearCart()} type="submit">Purchase</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
