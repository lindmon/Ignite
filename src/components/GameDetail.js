import styled from 'styled-components';
import {motion} from 'framer-motion';
// import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { smallImage } from '../util';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';



const GameDetail = ({pathId}) => {
    const navigate = useNavigate();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            navigate("/");
        }
    };
//Getting stars
const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for(let i=1; i<= 5; i++){
        if (i<= rating){
            stars.push(<img alt='star' key={i} src={starFull}></img>)
        }else {
            stars.push(<img alt='star' key={i} src={starEmpty}></img>)
        }
    }
    return stars;
}
//Getting the platforms icons
const getPlarform = (platform) => {
    switch(platform){
        case "PlayStation 4":
            return playstation;
          case "PlayStation 5":
            return playstation;
          case "Xbox Series S/X":
            return xbox;
          case "Xbox S":
            return xbox;
          case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "macOS":
            return apple;
        case "iOS":
            return apple;
        default:
            return gamepad;

    }
}

    const {screen, game, isLoading} = useSelector((state) => state.details);
    return(
        <>

            {!isLoading && (
            <CardShadow layoutId={pathId} className="shadow" onClick={exitDetailHandler}>
                    <Detail>
                        <Stats>
                            <div>
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating:{game.rating}</p>
                            {getStars()}
                            </div>
                            <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms?.map((data) => (
                                    <img 
                                        key={data.platform.id} 
                                        src={getPlarform(data.platform.name)} 
                                        alt={data.platform.name}
                                        title={data.platform.name}                                    >
                                    </img>

                                ))}
                            </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image,1280)} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results?.map((screen) => (
                                <img key={screen.id} src={smallImage(screen.image, 1280)} alt ={screen.id}/>

                            ))}
                        </div>
                        
                    </Detail>
                </CardShadow>)}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height:100vh;
    overflow-y:scroll;
    background:rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index:5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676;
    }
    &::-webkit-scrollbar-track{
        background:white;
    }
`;
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 10%;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index:10;
    img{
        width: 100%;
            }

`;
const Stats = styled(motion.div)`
    display: flex;
    align-items:center;
    justify-content:space-between;
    white-space:nowrap;
    img{
    width: 2rem;
    height: 2rem;
    display: inline;
    }
`;
const Info = styled(motion.div)`
    text-align: end;
`;
const Platforms = styled(motion.div)`
    display: flex;
    justify-content:space-evenly;
    img{
        margin-left:3rem;
    }
`;
const Media = styled(motion.div)`
    margin-top:5rem;
    img{
        width: 100%;
        height: 60vh;
        object-fit:cover;
    }
`;
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;


export default GameDetail;