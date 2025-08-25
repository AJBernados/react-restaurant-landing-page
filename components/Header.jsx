import SearchForm from './SearchForm'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import menuItems from '@/utils/menuItems'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const menuIcon = document.querySelector('#menu-bars')
      if (menuIcon) {
        menuIcon.classList.add('fa-bars')
        menuIcon.classList.remove('fa-times')
      }
      setToggleMenu(false)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sectionList = document.querySelectorAll('section')
      sectionList.forEach((section) => {
        const id = section.getAttribute('id')
        const menuItem = document.querySelector(`header nav a[href="#${id}"]`)
        if (menuItem) {
          const scrollY = window.scrollY
          const sectionTop = section.offsetTop - 150
          const activeLinkClass = 'text-white bg-themeYellow'
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + section.offsetHeight
          ) {
            menuItem.classList.add(...activeLinkClass.split(' '))
          } else {
            menuItem.classList.remove(...activeLinkClass.split(' '))
          }
        }
      })
    })
  }, [])

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    const menuIcon = document.querySelector('#menu-bars')
    if (menuIcon) {
      menuIcon.classList.toggle('fa-bars', toggleMenu)
      menuIcon.classList.toggle('fa-times', !toggleMenu)
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-[1000] w-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] border-b border-black/10 py-3 px-[7%] md:px-8'>
      <div className='mx-auto max-w-[1200px] flex items-center justify-between'>
        <a href='#' className='flex items-center gap-8 flex-shrink-0 relative -top-[6px] md:-top-[5px]'>
          <Image
            src='/images/KapitanLogo.png'
            alt='Kapitan Sisig logo'
            width={56}
            height={56}
            priority
            className='w-14 h-14 md:w-[60px] md:h-[60px] object-contain'
          />
          <span className='text-[3.4rem] md:text-[3.8rem] font-extrabold leading-none tracking-tight text-brandBlack whitespace-nowrap'>
            Kapitan Sisig
            <span className='text-themeYellow'>.</span>
          </span>
        </a>

        <nav
          id='nav'
          className={classNames(
            'md:static md:flex md:items-center md:gap-5',
            'absolute top-full left-0 right-0 bg-white border-y border-black/10 md:border-0 md:bg-transparent',
            toggleMenu ? 'block md:flex' : 'hidden md:flex'
          )}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={classNames(
                'capitalize text-[1.6rem] rounded-md py-1 px-5 text-gray-500 transition-all hover:text-white hover:bg-themeYellow md:inline-block block md:my-0 my-2 mx-4 md:mx-0',
                {
                  'text-white bg-themeYellow': item.active
                }
              )}
              onClick={() => setToggleMenu(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <span
            id='menu-bars'
            className={classNames(
              'fas fa-bars w-[4rem] h-[4rem] text-[1.6rem] text-center leading-[4rem] cursor-pointer rounded-full text-brandBlack bg-brandGrey transition-all hover:text-white hover:bg-themeYellow md:hidden'
            )}
            onClick={onMenuClick}
          />
          <span
            id='search-icon'
            className='fas fa-search w-[4rem] h-[4rem] text-[1.6rem] text-center leading-[4rem] cursor-pointer rounded-full text-brandBlack bg-brandGrey transition-all hover:text-white hover:bg-themeYellow hidden md:inline-flex md:items-center md:justify-center'
            onClick={() => setToggleSearch(true)}
          />
          <span className='fas fa-heart w-[4rem] h-[4rem] text-[1.6rem] text-center leading-[4rem] cursor-pointer rounded-full text-brandBlack bg-brandGrey transition-all hover:text-white hover:bg-themeYellow hidden md:inline-flex md:items-center md:justify-center' />
          <span className='fas fa-shopping-cart w-[4rem] h-[4rem] text-[1.6rem] text-center leading-[4rem] cursor-pointer rounded-full text-brandBlack bg-brandGrey transition-all hover:text-white hover:bg-themeYellow hidden md:inline-flex md:items-center md:justify-center' />
        </div>

        <SearchForm active={toggleSearch} onClose={() => setToggleSearch(false)} />
      </div>
    </header>
  )
}

export default Header
