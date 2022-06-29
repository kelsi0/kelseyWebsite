import { useState } from "react";
import { fetchContentful } from "../../utils/contentful";

const useFetchHero = () => {
    const [data, setData] = useState(null);

    async function fetchData(query ) {
        const fetch = await fetchContentful(query)
        setData(fetch.heroCollection.items[0]);
    }

    return {
        fetchData,
        data
    }
}

export default useFetchHero;