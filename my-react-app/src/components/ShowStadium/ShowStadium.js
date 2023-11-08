import React, {useState} from "react";
import {
    PriceSection,
    SectionWrapper,
    StyledButtons,
    StyledImage,
    StyledRightSection,
    StyledText
} from "./ShowStadium.styled";
import {Button, InputNumber, Space} from "antd";
import {NavLink} from "react-router-dom";

const StadiumDisplay = (props) => {
    const [value, setValue] = useState('1');
    const {stadium} = props;
    return (
        <SectionWrapper>
            <StyledImage>
                <img src={stadium.image} alt="#" />
            </StyledImage>
            <StyledRightSection>
                <h1>{stadium.title}</h1>

                <StyledText>
                    {stadium.text}
                </StyledText>
                <PriceSection>
                    <h5 style={{marginRight: "20px"}}>
                        Price:
                    </h5>
                    ${stadium.price}
                </PriceSection>
                <Space>
                    <h3>
                        Count of Stadiums to buy:
                    </h3>
                    <InputNumber min={1} max={10} value={value} onChange={setValue}/>
                    <Button
                        type="primary"
                        onClick={() => {
                            setValue(1);
                        }}
                    >
                        Reset
                    </Button>
                </Space>
                <StyledButtons>
                    <NavLink exact to="/catalog" activeClassName="selected">
                        <Button style={{marginTop: "20px", width: "200px"}}>GO BACK</Button>
                    </NavLink>
                    <NavLink exact to="/cart" activeClassName="selected">
                        <Button style={{marginTop: "20px", width: "200px"}}>ADD TO CART</Button>
                    </NavLink>
                </StyledButtons>
            </StyledRightSection>
        </SectionWrapper>
    )
}

export default StadiumDisplay;