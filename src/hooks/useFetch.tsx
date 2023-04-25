import { useState } from "react";

export const useFetch = (url:string) => {
    const [data, setData] = useState<any>()
    const fetchData = async () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
            }
            else {
                setData(data)
            }
        })
}

return {fetchData, data}

}

