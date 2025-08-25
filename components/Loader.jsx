import { useEffect } from 'react'

function Loader() {
  useEffect(() => {
    window.onload = () =>
      setInterval(() => {
        const el = document.querySelector('#app-loader')
        if (el) {
          el.classList.add('-top-[110%]', 'opacity-0')
        }
      }, 3000)
  }, [])

  return (
    <div id='app-loader' className='fixed top-0 left-0 h-full w-full z-[10000] bg-white flex items-center justify-center overflow-hidden transition-all'>
      <img src='images/loader.gif' alt='loader' className='w-[35rem] transition-all' />
    </div>
  )
}

export default Loader
