
import Game from "./components/Game.tsx"
import { useCounterStore } from "./store.ts"

/*
* const [counter,useCounter]=useState() is local and i have to creat another component inside and pass it as props to acces this state
* we can use context api but for it i will have to wrap the components or entrie code into a provider that is fine for small applications * * but causes performance issues and scalability problem
* const useCounterStore=create<{count:number}>(()=>({count:0}))returns  initial state
* the store is nothing but a custom hook created by zustand
* now to use it count=useCounterStore((state)=>state.count)
* lets decalre a type CounterStore={count:number,increment:()=>void,decrement:()=>void} and replace
* const useCounterStore=create<CounterStore>(()=>({count:0},increment:()=>{},decrement:()=>{}))
*  we have access to set 
* const useCounterStore=create<CounterStore>((set)=>({count:0},increment:()=>{ set({count:1})},
* decrement:()=>{set({count:1})}))
* access increment and decrement the same way but this time add a button and and give onclick to this increment and decrement refernce, we can do this increment and crement in different component too even though count state is in different component
* now to modify set((state=>({count:state.count+1}))) for increment and similarly for decrement
* we can also use async functions:
* incrementAsync:()=>Promise<void> in type
* await new Promise((resolve)=>setTimeout(resolve,1000));
* set((state=>({count:state.count+1}))) )
* now the function will wait for 1 sec and update it asynchronously
* even tho its a custom hook we can access it outside of component
* const count=useCounterStore.getState().count
* we can also update the state using setState
*/

function App() {
  const count=useCounterStore((state)=>state.count)

  return (
    <>
    <h1 className="text-center text-red-500">TIC TAC TOE {count}</h1>
    <Game/>
    <Othercomponent count={count}/>
    </>
  )
}

const Othercomponent=({count}:{count:number})=>{
  const increment=useCounterStore((state)=>state.incrementAsync)
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={increment}>incrementAsync</button><br></br>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
}

export default App
