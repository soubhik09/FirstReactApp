import react, { useState } from 'react'

function App() {
const [a,b] = useState(0);
  return (
    <div className='w-full h-screen  bg-black text-white flex justify-center items-center'>
      <div>
          <h1 className='text-green-500 text-2xl text-center mb-4'>{a}</h1>

            <button className='border-solid border-purple-600 bg-rose-500  p-2 rounded-md mr-2 '
            onClick={()=>b(a+1)}
            >Plus</button>
            <button className='border-solid border-purple-600 bg-rose-500  p-2 rounded-md'
            onClick={()=>b(a-1)}
            >Minus</button>


      </div>
    </div>
  )
}

export default App
