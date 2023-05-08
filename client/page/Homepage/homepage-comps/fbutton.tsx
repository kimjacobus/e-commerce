type FbuttonProps = {
  ButtonText: string;
  onClick: () => void;
};

const Fbutton = ({ ButtonText, onClick }: FbuttonProps) => {
  return (
    <button
      className="p-4 font-bold hover:bg-slate-300 focus:bg-slate-300"
      onClick={onClick}
    >
      <h2>{ButtonText}</h2>
    </button>
  );
};
export default Fbutton;
