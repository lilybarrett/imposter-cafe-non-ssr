import React from "react";
import NavBar from "../nav-bar";
import { Page } from "../../global";
import donutsImage from "../../images/donuts.jpeg";
import { HomeImage, CafeTitle } from "./styles";

const Home = () => {
    return (
        <Page>
            <CafeTitle>Welcome to Imposter Cafe!</CafeTitle>
            <HomeImage src={donutsImage} />
        </Page>
    )
}

export default Home;