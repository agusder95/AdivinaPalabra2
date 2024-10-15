import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, length) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const regex = /[áéíóúÁÉÍÓÚ]/;
    const regexRomano =
        /^(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})?)$/i;
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(url);
            const words = response.data;
            const lengthWord = words.find(
                (word) =>
                    !word.match(regex) &&
                    !word.match(regexRomano) &&
                    word.length === length
            );

            if (lengthWord) {
                setData(lengthWord);
            } else {
                fetchData();
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};

export default useApi;
