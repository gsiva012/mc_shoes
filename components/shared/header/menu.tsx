import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
      <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
          <Link href='/login' className='header-button flex'>
            <UserIcon className='h-4 w-4' />
            <span className='font-bold text-[12px] ms-1'>Sign In</span>
          </Link>
          <Link href='/cart' className='header-button flex'>
            <ShoppingCartIcon className='h-4 w-4' />
            <span className='font-bold text-[12px] ms-1'>Cart</span>
          </Link>
        </nav>
      </div>
    )
}