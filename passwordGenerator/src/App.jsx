import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]=useState("")

  const passwordGen= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()-=_+[]{}`~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)


  },[length, numAllowed, charAllowed, setPassword])

  useEffect(()=> {
    passwordGen()
  },[length,numAllowed,charAllowed,passwordGen])

  const passRef= useRef(null)

  const copyPass= useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-600 bg-gray-700'>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4 bg-sky-500">
          <input type="text" value={password} className='outliine-none min-w-full py-3 px-3 m-3' placeholder="password" ref={passRef} readOnly></input>
          <button onClick={copyPass}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}></input><label> length: {length} </label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="numberInput" defaultChecked={numAllowed} onChange={()=> setNumAllowed((prev)=>!prev)} /><label>Allow numbers</label>
          <input type="checkbox" id="characterInput" defaultChecked={charAllowed} onChange={()=> setCharAllowed((prev)=>!prev)} /><label>Allow special characters</label>

        </div>

      </div>
    </>
  )
}

export default App
