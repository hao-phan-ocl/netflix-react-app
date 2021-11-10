import { Container, Grid } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import requests from "../api/requests";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { SearchContext } from "../store/SearchContext";
import useFetch from "../store/useFetch";

export default function Search() {
    const [searchText] = useContext(SearchContext);
    const [hasImage, setHasImage] = useState([])
    const [data] = useFetch(requests.search + searchText, false)

    useEffect(() => {
        const filtered = data?.filter(e => e.backdrop_path != null);
        setHasImage(filtered);
    }, [data])

    return (
        <Container maxWidth={'xl'}>
            <Grid 
                container 
                spacing={1} 
                style={{marginTop: '5rem'}} 
            >
                {searchText !== '' && hasImage.map(elem => (
                    <MovieGrid data={elem} />
                ))}
            </Grid>
        </Container>
    )
}