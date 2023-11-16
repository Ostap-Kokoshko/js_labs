import axios from "axios";

export const getStadiumList = (filterCondition) => {
    return axios.get("http://localhost:8080/api/stadium", { params: filterCondition });
};

export const getDefaultStadiumList = () => {
    return axios.get("http://localhost:8080/api/stadiums");
};

export const getDetailedStadiumInfo = (stadiumId) => {
    return axios.get(`http://localhost:8080/api/stadium/${stadiumId}`);
};