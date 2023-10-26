import React from 'react';
import {FooterWrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase} from "./Footer.styled";

import {
    TwitterOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    RadarChartOutlined,
} from "@ant-design/icons";

const Footer = () => {
    return (
        <FooterWrapper>

            <VerticalLine/>

            <StyledText>© Copyright 2023</StyledText>

            <LogoWrapper>
                <IconBase component={RadarChartOutlined}/>
                <h1>Stadium Shop</h1>
            </LogoWrapper>

            <IconsWrapper>
                <IconBase component={YoutubeOutlined} color='#FF0000'/>
                <IconBase component={TwitterOutlined} color='#03A9F4'/>
                <IconBase component={InstagramOutlined} color='#de2ca6'/>
            </IconsWrapper>

            <VerticalLine/>

        </FooterWrapper>
    );
};

export default Footer;