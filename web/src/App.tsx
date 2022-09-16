import './styles/main.css';

import logoImg from './assets/Logo.svg';

function App() {
  return (
    <div className=' max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black m-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

            <a href="">
              <img src="/game-01.png" alt=''/>
            </a>

            <a href="">
              <img src="/game-02.png" alt=''/>
            </a>

            <a href="">
              <img src="/game-03.png" alt=''/>
            </a>

            <a href="">
              <img src="/game-04.png" alt=''/>
            </a>

            <a href="">
              <img src="/game-05.png" alt=''/>
            </a>

            <a href="">
              <img src="/game-06.png" alt=''/>
            </a>


      </div>
          

      </div>
  )
}

export default App
