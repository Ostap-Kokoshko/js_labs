import React, {useEffect} from "react";
import {StyledDescription, StyledTitle, SuccessContainer} from "./Success.styled";
import { NavLink } from "react-router-dom";
import {SafetyOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useDispatch} from "react-redux";

const Success = () => {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch({ type: "CLEAR_CART" });
        }, [dispatch]);
    return(
        <SuccessContainer>
            <SafetyOutlined style={{width: "100%", fontSize: "130px", display: "flex", justifyContent:"center"}}/>
            <StyledTitle>Success!</StyledTitle>
            <StyledDescription>{"Your order was sent to processing!\n Check your email box for further information."}</StyledDescription>
            <Button size={"large"}><NavLink to="/catalog">Go back to Catalog</NavLink></Button>
        </SuccessContainer>
    );
}

export default Success;