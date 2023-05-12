import Fbutton from './fbutton'

const ButtonText: string[] = ['All', 'Chairs', 'Sofas', 'Beds']

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
      {ButtonText &&
        ButtonText.map((text) => <Fbutton key={text} ButtonText={text} onClick={() => FilterValue(text)} />)}
    </div>
  )
}

export default FilterButtons
