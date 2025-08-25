import { useState } from 'react'
import classNames from 'classnames'

function StarRating({ min = 0, max = 5, value }) {
  const [rating, setRating] = useState(value)
  const [hover, setHover] = useState(min)
  return (
    <div className='py-4'>
      {[...Array(max)].map((star, index) => {
        const ratingValue = index + 1
        const isMarked = (hover || rating) >= ratingValue
        return (
          <span
            key={index}
            data-value={ratingValue}
            className={classNames('fas', 'fa-star', 'text-[1.7rem] cursor-pointer transition-all', {
              'text-brandGreen': isMarked,
              'text-brandGrey': !isMarked
            })}
            onClick={() => setRating(ratingValue)}
            onMouseOver={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(min)}
          />
        )
      })}
    </div>
  )
}

export default StarRating
