import React from "react";
import StadiumPicture from "../Icons/mainStadium.jpg";
import ImgModel1 from "../Icons/Lviv_Arena.jpg";
import ImgModel2 from "../Icons/Lviv_Ukraina_Stadium.jpg";
import ImgModel3 from "../Icons/Odesa_Chornomorets_Stadium.jpg";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
} from "./Home.styled";
import CardItem from "../CardElement/CardItem";

const dataCard = [
    {
        title: "Arena Lviv",
        text: "Arena Lviv (Ukrainian: Арена Львів) is a football stadium in Lviv, Ukraine. It was one of the " +
            "eight UEFA Euro 2012 venues, where it hosted three of the group-stage games.",
        image: ImgModel1,
        price: 10000,
    },
    {
        title: "Stadium Ukraine",
        text: "Ukraina Stadium (Ukrainian: стадіон Україна) is a multi-purpose stadium in Lviv, Ukraine. " +
            "It is currently used mostly for association football matches, and is the home of FC Karpaty Lviv.",
        image: ImgModel2,
        price: 15000,
    },
    {
        title: "Chornomorets Stadium",
        text: "The Chornomorets Stadium (Ukrainian: Стадіон «Чорноморець», romanized: Stadion «Chornomorets») " +
            "is a football stadium built in 2011 in Odesa, Ukraine. The stadium has a capacity of 34,164 and is the" +
            " home of FC Chornomorets Odesa.",
        image: ImgModel3,
        price: 5000,
    },
];

const Home = () => {
    return (
        <div>
            <SectionWrapper>
                <img src={StadiumPicture} alt="#" className="main_photo"/>
                <StyledText>
                    <h1>Get excited about different sports and their venues</h1>
                    <p>
                        Stadium, enclosure that combines broad space for athletic games and other exhibitions with
                        large seating capacity for spectators. The name derives from the Greek unit of measurement, the
                        stade, the distance covered in the original Greek footraces (about 600 feet [180 metres]).
                        The course for the footrace in the ancient Olympic Games at Olympia was exactly a stade in
                        length, and the word for the unit of measurement became transferred first to the footrace and
                        then to the place in which the race was run. As a type of structure, the stadium played a
                        significant role in 20th-century construction technology.
                    </p>
                </StyledText>
            </SectionWrapper>
            <CardWrapper>
                {dataCard.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
            <StyledButton size="large">Show More</StyledButton>
        </div>
    );
};

export default Home;