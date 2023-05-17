import { useNavigate } from 'react-router-dom'

type FbuttonProps = {
  ButtonText: string
  link: string
  onClick: () => void
}

const Fbutton = ({ ButtonText, link, onClick }: FbuttonProps) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(link)}>
      <div className="hoverState flex justify-center hover:bg-slate-300 w-[8rem] h-full" onClick={onClick}>
        <button className="py-8 font-chillax text-xl focus:underline">
          <h2>{ButtonText}</h2>
        </button>
      </div>
    </div>
  )
}
export default Fbutton
