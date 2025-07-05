
export interface IBook {
  _id : string
  title: string
  author: string
  genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY"
  isbn: string
  description?: string
  copies: number
  available: boolean
  createdAt: Date
  updatedAt: Date
}

interface Borrow {
  _id : string
  title: string
  isbn : number
}

export interface IBorrow {
  book : Borrow
  totalQuantity: number
  createdAt?: Date
  updatedAt?: Date
}
