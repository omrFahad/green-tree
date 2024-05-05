import Banner from './Banner'
import Feature from './Feature'
import Best from './Best'
import { trees } from "../data/trees"

let Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Feature />
            <Best data={trees} />

        </div>
    )
}

export default Home