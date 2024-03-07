import { Carts } from "./cart"
import { Users } from "./user"

export interface Orders {
     id: string
     user: Users
     products: Carts[]
};