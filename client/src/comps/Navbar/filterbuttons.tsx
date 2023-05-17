import Fbutton from './fbutton'

// const ButtonText: string[] = ['All', 'Chairs', 'Sofas', 'Beds']

type buttonProps = {
  id: number
  value: string
  link: string
}


const buttons : buttonProps[]= [
  {
    id: 1,
    value: 'All',
    link: '/home',
  },
  {
    id: 2,
    value: 'Chairs',
    link: '/home/Chairs',
  },
  {
    id: 3,
    value: 'Sofas',
    link: '/home/Sofas',
  },
  {
    id: 4,
    value: 'Beds',
    link: '/home/Beds',
  },
]

type FilterButtonsProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setFilterType: React.Dispatch<React.SetStateAction<string>>
}

const FilterButtons = ({ setQuery, setFilterType }: FilterButtonsProps) => {
  const FilterValue = (text: string) => {
    if (text) {
      if (text === 'All') {
        setQuery('')
      } else {
        setQuery(text)
      }
    }
    setFilterType('filterbuttons')
  }

  return (
    <div className="flex border-solid border-[1px] border-slate-300">
      {/* either map out an object with the links and the text or don't map out at all */}
      {buttons &&
        buttons.map((button) => (
          <Fbutton
            key={button.id}
            ButtonText={button.value}
            link={button.link}
            onClick={() => FilterValue(button.value)}
          />
        ))}
    </div>
  )
}

export default FilterButtons
