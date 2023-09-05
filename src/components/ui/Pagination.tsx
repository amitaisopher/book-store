import { ShopContextType, useShopContext } from "@/context/ShopContextProvider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC, useState } from "react";

const Pagination: FC = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const {updateInventory, shopInventorySize, pageSize, setPageSize} = useShopContext() as ShopContextType
    const pageSizeChangedHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setPageSize(Number(e.target.value))
        updateInventory({
            startIndex: 0,
            maxResults: Number(e.target.value)
        })
    }
    const prevPageHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const startIndex = Math.max((currentPage - 1) * pageSize, 0)
        updateInventory({
            startIndex,
            maxResults: pageSize
        })
        setCurrentPage((prevState) => Math.max(prevState - 1, 0))
    }
    const nextPageHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const startIndex = Math.min(currentPage + 1, Math.floor(shopInventorySize/pageSize)) * pageSize
        updateInventory({
            startIndex,
            maxResults: pageSize
        })
        setCurrentPage((prevState) => Math.min(prevState + 1, Math.floor(shopInventorySize/pageSize)))
    }

  return (
    <div className="flex justify-between w-60 mx-auto p-4">
      <button className="bg-slate-400 rounded-md cursor-pointer disabled:cursor-not-allowed" disabled={currentPage <= 0} onClick={prevPageHandler}>
        <ArrowLeft />
      </button>
      <button className="bg-slate-400 rounded-md cursor-pointer disabled:cursor-not-allowed" onClick={nextPageHandler} disabled={currentPage >= Math.floor(shopInventorySize/pageSize)}>
        <ArrowRight />
      </button>
      <label htmlFor="page-size">Page size</label>

      <select value={pageSize} className="cursor-pointe bg-slate-300 rounded-md" onChange={pageSizeChangedHandler} id="page-size">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Pagination;
