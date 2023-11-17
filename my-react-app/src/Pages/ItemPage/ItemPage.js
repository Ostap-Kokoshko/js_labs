import React from 'react';
import {useParams} from 'react-router-dom';
import dataCard from "../../components/Icons/dataCard";
import StadiumDisplay from "../../components/ShowStadium/ShowStadium";

const ItemPage = () => {
    const {id} = useParams();
    const stadium = dataCard.find((item) => item.id === Number(id));
    if (!stadium) {
        return <div>Not Found</div>;
    }

    return (
        <div>
            <StadiumDisplay stadium={stadium}/>
        </div>
    );
};

export default ItemPage;