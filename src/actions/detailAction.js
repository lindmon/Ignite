import axios from 'axios';
import {gameDetailsURL, gameScreenshotsURL} from '../api.js';


export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotsURL(id));
    dispatch({
        type: "LOADING_DETAIL",
    });
    dispatch({
        type:"GET_DETAIL",
        payload:{
            game:detailData.data,
            screen:screenShotData.data
        }
    })

};
