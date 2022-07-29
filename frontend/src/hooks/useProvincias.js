import { useEffect, useState } from "react"
import { getProvincias } from "services/getProvincias"

export const useProvincias = () => {
    const [provincias, setProvincias] = useState([])

    useEffect(() => {
        getProvincias().then(data => setProvincias(data))
    }, [setProvincias])

    return {
        provincias
    }
}