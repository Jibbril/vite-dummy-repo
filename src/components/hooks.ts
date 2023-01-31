import { useEffect, useState } from "react";
import useSWR from "swr";

export function useItems(itemType: string) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleItems(itemType);
    }, [itemType]);

    const handleItems = (type: string) => {
        fetch(`https://dummyjson.com/${type}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (type === 'todos') setItems(data.todos.slice(0, 5))
            else if (type === 'products') setItems(data.products.slice(0, 5))
        });
    }

    return items;
}

const fetcher = (url: string) => fetch(url).then(r => r.json())
export function useSwrItems(itemType: string) {
    const { data, error, isLoading } = useSWR(`https://dummyjson.com/${itemType}?limit=5`, fetcher);
    
    return {
        items: data,
        isLoading,
        isError: error
    };
}


