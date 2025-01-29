import { create } from "zustand";
import { combine } from "zustand/middleware";


export type Squares = Array<"x" | "o" | null>;


export const useGameStore = create(
  combine(
    //initial state
    { history: [Array(9).fill(null)], currentMove: 0 },
    //action/setters
    (set) => {
      return {
        setHistory: (
          nextHistory:
            | Array<Squares>
            | ((prev: Array<Squares>) => Array<Squares>)
        ) => {
          set((state) => ({
            history:
              typeof nextHistory === "function"
                ? nextHistory(state.history)
                : nextHistory,
          }));
        },
        setCurrentMove: (
          nextCurrentMove: number | ((prev: number) => number)
        ) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === "function"
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }));
        },
      };
    }
  )
);

export type CounterProps={
    count:number;
    increment:()=>void;
    decrement:()=>void;
    incrementAsync:()=>Promise<void>

}

export const useCounterStore = create<CounterProps>((set) => ({
  count: 0,
  increment: () => {
    set((state)=>({count:state.count+1}));
  },
  decrement: () => {
     set((state) => ({ count: state.count-1 }));
  },
  incrementAsync:async () =>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    set((state) => ({ count: state.count + 1 }));
      
  },
}));
