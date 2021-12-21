import { Container } from "@material-ui/core"
import { useContext } from "react"
import { requests } from "../../api/requests"
import MovieCard from '../MovieCard/MovieCard'
import useFetch from "../../store/useFetch"
import { UserContext } from "../../store/UserContext"
import useHasImage from "../../store/useHasImage"
import { useNavigate } from "react-router-dom"

export default function Search() {
    const {searchText} = useContext(UserContext)
    const [data] = useFetch(requests.search + searchText, 'search')
    const [hasImage] = useHasImage(data)

    const navigate = useNavigate()
    if (searchText === '') {
        navigate('/')
    }

    return (
        <Container maxWidth={'xl'} style={{padding: '8rem 0'}}>
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