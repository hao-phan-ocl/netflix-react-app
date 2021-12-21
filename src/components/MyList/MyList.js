import { Container } from "@material-ui/core"
import { useContext } from "react"
import { UserContext } from "../../store/UserContext"
import MovieCard from "../MovieCard/MovieCard"

export default function MyList() {
    const {watchlist} = useContext(UserContext)
    
    return (
        !watchlist.length ? (
            <div style={{
                color: 'white',
                marginTop: '7rem',
                marginLeft: '3rem',
                fontSize: '3rem',
                textShadow: '#000 0 0 10px'
            }}>
                Your watchlist is empty...
            </div>
        ) : (
            <Container maxWidth={'xl'} style={{padding: '8rem 1.5rem'}}>
                <div 
                    className="my-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, 300px)',
                        gridAutoRow: 'auto',
                        rowGap: '70px',
                        columnGap: '5px',
                        justifyContent: 'start'
                    }}
                >
                    {watchlist?.map(elem => (
                        <MovieCard data={elem} key={elem.id} />
                    ))}
                </div>
            </Container>
        )
    )
}
