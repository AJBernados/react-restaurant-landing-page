import StarRating from './StarRating'
import classNames from 'classnames'

function Review({ title, img, msg, rating }) {
  return (
    <div className='p-8 shadow-brand border border-black/20 rounded-md relative transition-all'>
      <i className={classNames('fas fa-quote-right absolute top-8 right-8 text-[6rem] text-brandGrey -z-[1]')}/>
      <div className='flex gap-6 items-center pb-6'>
        <img className='h-[7rem] w-[7rem] rounded-full object-cover' src={img} alt={title} />
        <div>
          <h3 className='text-brandBlack text-[2.5rem] pb-2'>{title}</h3>
          <StarRating value={rating} />
        </div>
      </div>
      <p className='text-[1.5rem] leading-8 text-gray-500'>{msg}</p>
    </div>
  )
}

export default Review
