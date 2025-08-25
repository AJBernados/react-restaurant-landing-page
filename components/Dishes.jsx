import Dish from './Dish'
import dishList from '@/utils/dishList'

function Dishes() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-brandGrey rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.06)]' id='dishes'>
      <h3 className='sub-heading'>our dishes</h3>
      <h1 className='heading'>popular dishes</h1>
      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(28rem,1fr))] gap-6 transition-all'>
        {dishList.map((item, index) => {
          return <Dish key={index} {...item} />
        })}
      </div>
      </div>
    </section>
  )
}

export default Dishes
