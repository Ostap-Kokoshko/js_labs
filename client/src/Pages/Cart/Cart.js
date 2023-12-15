import { useSelector } from "react-redux";
import {
    CartStyled,
    ImageStyled,
    DataInfo, DataButtonStyled, VerticalLine, CartButtonStyled, StyledEmpty,
} from "./Cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./action";
import { useState, useEffect } from "react";
import {Button} from "antd";
import dataCard from "../../components/Icons/dataCard";
import {FrownOutlined} from "@ant-design/icons";
import {saveToLocalStorage} from "./LocalStorage";

const Cart = () => {
    const stadiumArray = useSelector((state) => state.stadiumList);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let totalPrice = 0;
        stadiumArray.forEach((stadium) => {
            totalPrice += Math.round(stadium.price) * stadium.count;
        });
        setTotalPrice(totalPrice);
    }, [stadiumArray]);

    useEffect(() => {
        saveToLocalStorage('cart', { stadiumList: stadiumArray });
    }, [stadiumArray]);

    const handleIncrement = (name) => {
        dispatch(incrementCount(name));
    };

    const handleDecrement = (name) => {
        dispatch(decrementCount(name));
    };

    const filteredStadiums = stadiumArray.filter((stadium) => stadium.count > 0);

    return (
        <div>
            <VerticalLine/>
            <CartStyled>
                <div>
                    {filteredStadiums.length > 0 ? (
                        filteredStadiums.map((stadium, index) => (
                            <div key={index}>
                                <DataInfo>
                                    <NavLink
                                        exact="true"
                                        to={`/itempage/${stadium.id}`}
                                        style={{ textDecoration: "none", color: "black" }}
                                        onClick={(e) => {
                                            if (e.target.tagName === "BUTTON") {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        <ImageStyled src={dataCard[stadium.id].image} />
                                    </NavLink>
                                    <h3>{stadium.name}</h3>
                                    <DataButtonStyled>
                                        <Button onClick={() => handleDecrement(stadium.name)}>-</Button>
                                        <p>{stadium.count}</p>
                                        <Button onClick={() => handleIncrement(stadium.name)}>+</Button>
                                    </DataButtonStyled>
                                    <h4>{stadium.price}$</h4>
                                </DataInfo>
                            </div>
                        ))
                    ) : (
                        <StyledEmpty>
                            Your cart is empty.
                            <FrownOutlined />
                        </StyledEmpty>

                    )}
                </div>
                {totalPrice > 0 && (
                    <p style={{ fontSize: "2.2vw", marginLeft: "1vw" }}>
                        Total Price: {totalPrice}$
                    </p>
                )}

                <CartButtonStyled>
                    <Button size={"large"}>
                        <NavLink to="/Catalog">BACK TO CATALOG</NavLink>
                    </Button>
                    {totalPrice > 0 && <Button size={"large"}><NavLink to="/cart/checkout">BUY ONLINE</NavLink></Button>}
                </CartButtonStyled>

            </CartStyled>
            <VerticalLine style={{marginBottom: '115px'}}/>
        </div>

    );
};

export default Cart;