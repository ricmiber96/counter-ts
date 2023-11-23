import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
    
    const context = useContext(CounterContext)
    console.log('====================================');
    console.log(context);
    console.log('====================================');
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider')
    }
    return context;
}