import { Container } from "@material-ui/core"
import { useContext } from "react"
import { requests } from "../../api/requests"
import MovieCard from '../MovieCard/MovieCard'
import useFetch from "../../store/useFetch"
import { UserContext } from "../../store/UserContext"
import useHasImage from "../../store/useHasImage"

export default function Search() {
    const {searchText} = useContext(UserContext)
    const [data] = useFetch(requests.search + searchText, false)
    const [hasImage] = useHasImage(data)

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