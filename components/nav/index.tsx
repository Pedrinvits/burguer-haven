"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="p-4 flex items-center justify-between mt-3">
      <span className="text-[#E9E3DC] text-2xl cursor-pointer">Burguer</span>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="text-[#E9E3DC]  px-1 py-3">About</a>
        </li>
        <li>
          <a href="#" className="text-[#E9E3DC]  px-1 py-3">Menu</a>
        </li>
        <li>
            <a
              href="#"
              className="text-black bg-[#B3A0CD]  p-4"
            >
              Order Online
            </a>
          </li>

      </ul>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="p-0 hover:bg-transparent"
            >
              <Menu className="h-6 w-6 text-[#E9E3DC]" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pt-10 bg-[#D1EF53]">
            <MobileLink href="#" onOpenChange={setOpen} className="text-black">About</MobileLink>
            <MobileLink href="#" onOpenChange={setOpen} className="text-black">Menu</MobileLink>
            <MobileLink href="#" onOpenChange={setOpen} className="text-black">
              <span className="text-black bg-[#E9E3DC] border border-black px-4 py-2 rounded-sm block w-fit">Order Online</span>
            </MobileLink>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

interface MobileLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const handleClick = () => {
    onOpenChange?.(false)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn("block px-4 py-2 text-lg text-[#E9E3DC] hover:text-white", className)}
      {...props}
    >
      {children}
    </Link>
  )
}
