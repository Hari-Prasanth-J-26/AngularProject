import { Product } from "./product";
import { User } from "./user";

export class Order {
    orderId: number;
    orderStatus: string;
    user: User;
    product: Product;
}
