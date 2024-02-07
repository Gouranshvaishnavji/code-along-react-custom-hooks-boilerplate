import { useState , useEffect } from 'react'

function Storage(key , initialValue) {
    const [value, setValue] = useState(() => {
        const allValue = localStorage.getItem(key);
        return allValue !== null ? allValue : initialValue;
    });

useEffect(() => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}, [key, value]);

    return [value, setValue];
}

export default Storage
       