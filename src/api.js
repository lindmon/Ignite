//Base URL
require('dotenv').config();
const key = process.env.RAWG_API
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

export const popularGamesURL = () => `${base_url}${popular_games}`;