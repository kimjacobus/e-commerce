import Fbutton from "./fbutton";


const ButtonText : string[] = ['all', 'chaise', 'Canapés', 'Tables', 'Lits', 'efjzoefj', 'djfezijf', 'booooooo']
//remplace buttonText avec un fetch qui va chercher les types buttonText = data.type



const FilterButtons = ({setQuery} : {setQuery: React.Dispatch<React.SetStateAction<string>>}) => {

    const FilterValue = (text:string) => {
        console.log(text);
        if(text) {
            if(text==='all') {
                setQuery('')
            }
            else { 
                setQuery(`type=${text}`)
            }
        }
    }


    return ( 

        // ButtonText.filter(), grab clicked value and filter against that then set that as 
            <div className="flex overflow-x-scroll">
                {ButtonText && ButtonText.map(text => <Fbutton key={text} ButtonText={text} onClick={() => FilterValue(text)}/>
                )}
            </div>
        
    );
}
 
export default FilterButtons;