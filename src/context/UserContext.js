import { useState, useEffect, createContext } from "react";
import instance from "../api/axiosInstance";
import requests from "../api/requests";

export const UserContext = createContext();

export function ContextProvider(props) {
    const [billboard, setBillboard] = useState([]);
    const [fetchTrending, setFetchTrending] = useState(['hello']);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {       
        async function fetchBillboard() {
            const request = await instance.get(requests.trending);

            setBillboard(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
        }
        fetchBillboard();
    }, []);

    useEffect(() => {
        openModal && (document.body.style.overflow = 'hidden');
        !openModal && (document.body.style.overflow = 'unset');
    }, [openModal]);

    return (
        <UserContext.Provider 
            value={{context: [billboard], 
                    context2: [fetchTrending],
                    context3: [openModal, setOpenModal]
                    }}
        >
            {props.children}
        </UserContext.Provider>
    );
}