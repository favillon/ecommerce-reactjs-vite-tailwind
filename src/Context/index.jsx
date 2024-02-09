import { useState, createContext } from "react";

export const ShoppinCartContext = createContext();

export const ShoppinCartProvider = ({children}) =>  {
    const [countCar, setCounterCar] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(0);

    const incrementNumberCar = () => {
        setCounterCar(countCar + 1)
    }
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppinCartContext.Provider value={{
            countCar,
            setCounterCar,
            incrementNumberCar,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            { children }
        </ShoppinCartContext.Provider>
    )
}