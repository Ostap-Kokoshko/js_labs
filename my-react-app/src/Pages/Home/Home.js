import React, {useState} from "react";
import StadiumPicture from "../../components/Icons/mainStadium.jpg";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardElement/CardItem";

import dataCard from "../../components/Icons/dataCard";

const textTitle = "Get excited about different sports and their venues";

const titleText = "Stadium, enclosure that combines broad space for athletic games and other exhibitions with\n" +
    "                        large seating capacity for spectators. The name derives from the Greek unit of measurement, the\n" +
    "                        stade, the distance covered in the original Greek footraces (about 600 feet [180 metres]).\n" +
    "                        The course for the footrace in the ancient Olympic Games at Olympia was exactly a stade in\n" +
    "                        length, and the word for the unit of measurement became transferred first to the footrace and\n" +
    "                        then to the place in which the race was run. As a type of structure, the stadium played a\n" +
    "                        significant role in 20th-century construction technology."

const Home = () => {
    const [showAllCards, setShowAllCards] = useState(false);

    const cardsToDisplay = showAllCards ? dataCard : dataCard.slice(0, 3);
    const buttonText = showAllCards ? "Hide" : "View more";

    const handleClick = () => {
        setShowAllCards(!showAllCards);
    };

    return (
        <div>
            <SectionWrapper>
                <img src={StadiumPicture} alt="#" className="main_photo"/>
                <StyledText>
                    <h1>{textTitle}</h1>
                    <p>
                        {titleText}
                    </p>
                </StyledText>
            </SectionWrapper>
            <CardWrapper>
                {cardsToDisplay.map((item) => (
                    <CardItem
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        imageSrc={item.image}
                        price={item.price}
                    />
                ))}
            </CardWrapper>
            <StyledButton size="large" onClick={() => handleClick()}>{buttonText}</StyledButton>
        </div>
    );
};

export default Home;