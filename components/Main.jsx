import SpecialDishes from './SpecialDishes'
import Dishes from './Dishes'
import About from './About'
import Menu from './Menu'
import Reviews from './Reviews'
import Order from './Order'

function Main() {
  return (
    <main className='w-full flex flex-col py-4 px-[7%] bg-white transition-all md:px-8'>
      <SpecialDishes />
      <Dishes />
      <About />
      <Menu />
      <Reviews />
      <Order />
    </main>
  )
}

export default Main
