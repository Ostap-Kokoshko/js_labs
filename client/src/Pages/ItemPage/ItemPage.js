import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import StadiumDisplay from "../../components/ShowStadium/ShowStadium";
import {getDetailedStadiumInfo} from "../../fetching";
import Loading from "../../components/Loading/Loading";

const ItemPage = () => {
    const { id } = useParams();
    const [stadium, setStadium] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getDetailedStadiumInfo(id)
            .then((response) => {
                setStadium(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка під час отримання даних:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

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