import { createContext, useContext } from 'react';

export const CreateContext = <ContextType>(defaultValue: ContextType) => {
   const context = createContext<ContextType>(defaultValue);

   const useCtx = () => {
      const ctx = useContext(context);
      if (ctx === undefined)
         throw new Error("useCtx must be inside a Provider with a value");
      return ctx;
   }

   return [useCtx, context.Provider] as const;
};