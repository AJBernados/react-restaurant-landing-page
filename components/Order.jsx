import classNames from 'classnames'

function Order() {
  return (
    <section className='' id='order'>
      <h3 className='sub-heading'>order now</h3>
      <h1 className='heading'>free and fast</h1>
      <form action='#' className='max-w-[90rem] mx-auto p-6 bg-white border border-black/20 rounded-md shadow-brand transition-all'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>your name</span>
            <input
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none'
              type='text'
              placeholder='enter your name'
            ></input>
          </div>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>your number</span>
            <input
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none'
              type='text'
              placeholder='enter your number'
            ></input>
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>your order</span>
            <input
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none'
              type='text'
              placeholder='enter food name'
            ></input>
          </div>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>additional food</span>
            <input
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none'
              type='text'
              placeholder='extra with food'
            ></input>
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>how much</span>
            <input
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none'
              type='number'
              placeholder='how many orders'
            ></input>
          </div>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>date and time</span>
            <input
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none'
              type='datetime-local'
              placeholder='date and time'
            ></input>
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>your address</span>
            <textarea
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none h-[20rem] resize-none'
              id=''
              name=''
              cols='30'
              rows='10'
              placeholder='enter your address'
            ></textarea>
          </div>
          <div className='w-[49%] max-[450px]:w-full'>
            <span className='py-2 block text-[1.5rem] text-gray-500'>your message</span>
            <textarea
              className='w-full p-4 mb-4 bg-brandGrey text-[1.6rem] text-brandBlack rounded-md border border-transparent focus:border-brandGreen transition-all outline-none h-[20rem] resize-none'
              id=''
              name=''
              cols='30'
              rows='10'
              placeholder='enter your message'
            ></textarea>
          </div>
        </div>
        <input
          type='submit'
          value='order now'
          className={classNames('button', 'mt-0')}
        />
      </form>
    </section>
  )
}

export default Order
