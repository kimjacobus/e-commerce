import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

type DashSidebar = {
  setPageSelector: React.Dispatch<React.SetStateAction<number>>
}

export const DashSidebar = ({ setPageSelector }: DashSidebar) => {
  const [addIcon, setAddIcon] = useState<number | null>(0)

  const iconHandler = (id: number | null) => {
    setAddIcon(id)
  }

  type LinkTextProps = {
    id: number
    text: string
    textIcon: string
  }

  const LinkText: LinkTextProps[] = [
    {
      id: 0,
      text: 'Profile',
      textIcon: '> Profile',
    },
    {
      id: 1,
      text: 'Basket',
      textIcon: '> Basket',
    },
    {
      id: 2,
      text: 'Wishlist',
      textIcon: '> Wishlist',
    },
  ]

  return (
    <div className="flex justify-around font-nunitoItalic text-lg pt-2 lg:flex-col lg:w-36 lg:h-auto lg:justify-start lg:gap-10 lg:p-4 lg:text-center">
      {LinkText &&
        LinkText.map((link) => (
          <Link to={`/dashboard/${link.text}`} key={link.id}>
            <h2 className="hover:underline" onClick={() => (setPageSelector(link.id), iconHandler(link.id))}>
              {addIcon === link.id ? link.textIcon : link.text}
            </h2>
          </Link>
        ))}
    </div>
  )
}
