import { Container } from "@material-ui/core"
import { useContext, useEffect, useState } from "react"
import requests from "../../api/requests"
import MovieCard from '../MovieCard/MovieCard'
import useFetch from "../../store/useFetch"
import { UserContext } from "../../store/UserContext"

export default function Search() {
    const {searchText} = useContext(UserContext)
    const [hasImage, setHasImage] = useState([])
    const [data] = useFetch(requests.search + searchText, false)

    useEffect(() => {
        const filtered = data?.filter(e => e.backdrop_path != null)
        setHasImage(filtered)
    }, [data])

    return (
        <Container maxWidth={'xl'} style={{marginTop: '8rem'}}>
            <div 
                className="my-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 300px)',
                    gridAutoRow: 'auto',
                    rowGap: '70px',
                    columnGap: '5px',
                    justifyContent: 'center'
                }}
            >
                {searchText && hasImage.map(elem => (
                    <MovieCard data={elem} key={elem.id} />
                ))}
            </div>
        </Container>
    )
}