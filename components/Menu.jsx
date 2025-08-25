import Dish from './Dish'
import menuDishList from '@/utils/menuDishList'

function Menu() {
  return (
    <section className='w-full' id='menu'>
      <h3 className='sub-heading'>our menu</h3>
      <h1 className='heading'>today&apos;s speciality</h1>
      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(30rem,1fr))] gap-6 transition-all'>
        {menuDishList.map((menu, index) => {
          return <Dish key={index} {...menu} />
        })}
      </div>
    </section>
  )
}

export default Menu
