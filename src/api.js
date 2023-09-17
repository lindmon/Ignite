// import env from "react-dotenv";
require('dotenv').config();
//Base URL
const key = process.env.REACT_APP_RAWG_API;
const base_url = `https://api.rawg.io/api/`;

//Getting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth()+1;
    if (month < 10) {
        return `0${month}`
    }else {
        return month;
    }
};
//Getting the day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    }else {
        return day;
    }
};
//Getting the day,month, and year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

//Popular games url
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Creating the api url for games details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?key=${key}`;
// https://api.rawg.io/api/games/795632.json?&key=420db7a0848d47d3b21e4093f9ee5f46
