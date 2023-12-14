import React from "react";
import {ButtonsStyled, CheckoutContainer, CheckoutTitle} from "./Checkout.styled";
import {NavLink, useNavigate} from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { checkoutSchema } from "../../../schemas/regex";
import {Button} from "antd";

const Checkout = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        console.log(values);
        // await sendEmail();
        await new Promise((r) => setTimeout(r, 1000));
        actions.resetForm();
        navigate("/cart/success");
    }

    return(
        <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: ""
            }}
                    validationSchema={checkoutSchema}
                    onSubmit={onSubmit} >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="inputs">
                            <div className="small-inputs">
                                <CustomInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter your First Name"
                                />
                                <CustomInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter your Last Name"
                                />
                            </div>
                            <div className="small-inputs">
                                <CustomInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                />
                                <CustomInput
                                    label="Phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Enter your Phone Number"
                                />
                            </div>
                            <CustomInput
                                label="Address"
                                name="address"
                                type="text"
                                placeholder="Enter your Shipping Address"
                            />
                        </div>
                        <ButtonsStyled>
                            <Button size={"large"}>
                                <NavLink to="/cart">Go back</NavLink>
                            </Button>
                            <Button type="primary" disabled={isSubmitting} htmlType="submit" size={"large"}>
                                Continue
                            </Button>
                        </ButtonsStyled>
                    </Form>
                )}
            </Formik>
        </CheckoutContainer>
    );
}

export default Checkout;