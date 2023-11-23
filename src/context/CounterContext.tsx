import { ReactNode, createContext, useReducer } from "react";
import { CounterContextType, counterReducer } from "../reducer/CounterReducer";


// Create the context
export const CounterContext = createContext<CounterContextType | undefined>(undefined);

  // Create the context provider
export const CounterProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const increment = () => dispatch({ type: "INCREMENT" });
    const decrement = () => dispatch({ type: "DECREMENT" });
  
    const contextValue: CounterContextType = {
      state,
      increment,
      decrement,
    };
  
    return (
      <CounterContext.Provider value={contextValue}>
        {children}
      </CounterContext.Provider>
    );
  };