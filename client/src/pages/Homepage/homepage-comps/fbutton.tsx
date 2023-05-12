type FbuttonProps = {
  ButtonText: string
  onClick: () => void
}

const Fbutton = ({ ButtonText, onClick }: FbuttonProps) => {
  return (
    <div className="hoverState flex justify-center hover:bg-slate-300 w-[8rem] h-full" onClick={onClick}>
      <button className="py-8 font-chillax text-xl focus:underline">
        <h2>{ButtonText}</h2>
      </button>
    </div>
  )
}
export default Fbutton
