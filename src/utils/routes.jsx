import { CartPage, FavouritesPage, HomePage, NotFoundPage, ProductItem } from "../pages";

export const routes = [
    {
        id: 1,
        path: "/",
        element: <HomePage />
    },
    {
        id: 2,
        path: "/cart",
        element: <CartPage />
    },
    {
        id: 3,
        path: "/favourite",
        element: <FavouritesPage />
    },
    {
        id: 4,
        path: "/product-item",
        element: <ProductItem />
    },
    {
        id: 5,
        path: "*",
        element: <NotFoundPage />
    }
]