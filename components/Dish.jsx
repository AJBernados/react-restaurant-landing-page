import Stars from './StarRating'
import classNames from 'classnames'

function Dish({ title, img, rating, price, description, favorited, detailed }) {
  return (
    <div className='p-10 bg-white rounded-md border border-black/20 shadow-brand relative overflow-hidden text-center transition-all group'>
      {favorited ? (
        <a
          href='#'
          className={classNames('fas fa-heart absolute top-6 right-[-15rem] bg-brandGrey rounded-full h-[5rem] w-[5rem] leading-[5rem] text-[2rem] text-brandBlack transition-all group-hover:right-6 hover:text-white hover:bg-brandGreen')}
        ></a>
      ) : null}
      {detailed ? (
        <a
          href='#'
          className={classNames('fas fa-eye absolute top-6 left-[-15rem] bg-brandGrey rounded-full h-[5rem] w-[5rem] leading-[5rem] text-[2rem] text-brandBlack transition-all group-hover:left-6 hover:text-white hover:bg-brandGreen')}
        ></a>
      ) : null}
      <img className='h-[17rem] my-4 transition-all max-[450px]:w-full max-[450px]:h-auto mx-auto' src={img} alt={title} />
      <h3 className='text-brandBlack text-[2.5rem]'>{title}</h3>
      {description ? (
        <p className='text-gray-500 text-[1.6rem] py-2 leading-6'>{description}</p>
      ) : null}
      <Stars value={rating} />
      <span className='text-brandGreen font-extrabold mr-4 text-[2.5rem]'>{`$${price}`}</span>
      <a href='#' className='button'>
        add to cart
      </a>
    </div>
  )
}

export default Dish
