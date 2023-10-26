import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Input, InputNumber} from 'antd';
import {
    CardWrapper,
    VerticalLine,
    PriceSection,
} from "./Catalog.styled";
import CardItem from "../../components/CardElement/CardItem";
import ImgModel1 from "../../components/Icons/Lviv_Arena.jpg";
import ImgModel2 from "../../components/Icons/Lviv_Ukraina_Stadium.jpg";
import ImgModel3 from "../../components/Icons/Odesa_Chornomorets_Stadium.jpg";
import ImgModel4 from "../../components/Icons/Metalist_Stadium_Kharkiv.jpg";
import ImgModel5 from "../../components/Icons/Dnipro_Arena.jpg";
import ImgModel6 from "../../components/Icons/Kryvyi_Rih_Metalurh.jpg";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const handleButtonClick = (e) => {
    message.info('Here you can choose the sorting method.');
    console.log('click left button', e);
};

const handleMenuClick = (e) => {
    message.info('To be continued.');
    console.log('click', e);
};

const items = [
    {
        label: 'Sort by name',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Sort by increasing price',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: 'Sort by decreasing price',
        key: '3',
        icon: <UserOutlined />,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

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

    {
        title: "Sports complex \"Metalist\"",
        text: "\"Metalist\" Oblast Sports Complex (Ukrainian: Обласний спортивний комплекс \"Metalist\"), which includes" +
            " the Metalist Stadium (Ukrainian: Стадіон \"Metalist\"), is a multi-use stadium in Kharkiv, Ukraine. It" +
            " is used chiefly for football matches and is the home stadium of FC Metalist 1925 Kharkiv.",
        image: ImgModel4,
        price: 50000,
    },

    {
        title: "\"Dnipro-Arena\"",
        text: "The Dnipro Arena (Ukrainian: Дніпро-Арена) is a football stadium in Dnipro, Ukraine. It is mostly " +
            "for football matches and hosts the homes matches of SC Dnipro-1. The stadium has a capacity of 31,003 " +
            "people. It replaced Dnipro's old Soviet Metalurh Stadium which existed since 1940.",
        image: ImgModel5,
        price: 7200,
    },

    {
        title: "Stadium \"Metallurg\"",
        text: "Stadion Metalurh is a multi-purpose stadium in Kryvyi Rih, Ukraine. It is located near the city's " +
            "neighborhood \"Sotsmisto\" (Social city). It is currently used mostly for football matches, and was" +
            " the home of FC Kryvbas Kryvyi Rih.",
        image: ImgModel6,
        price: 30000,
    },
];

const Catalog = () => {
    return (
        <div>
            <VerticalLine/>
            <Space
                wrap
                style={{ display: "flex", justifyContent: "space-evenly"}}
            >
                <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                    Filter
                </Dropdown.Button>
                <PriceSection>
                    <div style={{marginRight: "10px"}}>Ціна:</div>
                    <InputNumber addonBefore="від" addonAfter="$" defaultValue={100} style={{marginRight: "10px"}}/>
                    <InputNumber addonBefore="до" addonAfter="$" defaultValue={100} />
                </PriceSection>
                <Search
                    placeholder="Input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Space>
            <VerticalLine/>
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
        </div>
    );
};

export default Catalog;