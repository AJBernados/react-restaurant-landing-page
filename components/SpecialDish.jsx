function SpecialDish({ title, subtitle, description, img }) {
  return (
    <div className='flex items-center flex-wrap gap-8 pt-[24px] md:pt-[48px]'>
      <div className='basis-[45rem] grow'>
        <span className='text-themeYellow text-[2.5rem]'>{subtitle}</span>
        <h3 className='text-brandBlack text-[7rem] max-md:text-[5rem]'>{title}</h3>
        <p className='text-gray-500 text-[2.2rem] py-2 leading-6'>{description}</p>
        <a href='#' className='button'>
          order now
        </a>
      </div>
      <div className='basis-[45rem] grow'>
        <img src={img} alt={title} className='w-full' />
      </div>
    </div>
  )
}

export default SpecialDish
