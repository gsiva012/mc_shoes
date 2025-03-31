import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Search from './search'

export default function Header() {
  return (
    <header className='text-white'>
      <div className='px-2 bg-primary'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex flex-col items-center header-button font-extrabold text-[16px] m-1 '
            >
              <Image
                src='/icons/logo.svg'
                width={50}
                height={50}
                alt={`${APP_NAME} logo`}
              />
              <span>{APP_NAME}</span>
            </Link>
          </div>

          {/* Search in large screen */}
          <div className='hidden md:block flex-1 max-w-80'>
            <Search />
          </div>

          {/* Menu */}
          <Menu />
        </div>

        {/* Search in small screen */}
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>

      {/* Header Menu */}
      <div className='flex items-center px-3 mb-[1px] dark:border-gray-200 bg-gray-100 text-black'>
        <Button
          variant='ghost'
          className='header-button flex items-center gap-1 text-base [&_svg]:size-6'
        >
          <MenuIcon />
          All
        </Button>
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
