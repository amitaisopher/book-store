import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { GoogleBooksVolumeResponse as booksDummyData } from '@/assets/dummyData'
import { BookResponse } from "types"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type fetchBookDataParams = {
  searchValue: string
  startIndex: number
  maxResults: number
  useDummyData?: boolean
}

export function composeQueryParamValue(searchValue: string, suffix: string = 'cyber') {
  let query: string = `${searchValue.replace(/\s+/g, '+')}`
  query = query.length == 0 || query[query.length - 1] === '+' ? query.concat(suffix) : query.concat(`+${suffix}`)
  return query
}

export async function fetchBookData({ searchValue, startIndex, maxResults, useDummyData = false }: fetchBookDataParams) {
  if (useDummyData) {
    return { ...booksDummyData, items: booksDummyData.items.slice(startIndex, startIndex + maxResults) } as BookResponse
  }
  
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=${startIndex}&maxResults=${maxResults}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  if (!res.ok) throw new Error('Failed to fetch book data from API')
  const data = await res.json()
  return data as BookResponse
}
