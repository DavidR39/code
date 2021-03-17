import React from 'react'
import {
    HomeContainer,
    HomeHeading,
    HomeTitle,
    HomeText,
    HomeSeparator
} from './style'
const Home = () => {
    return (
        <HomeContainer>
            <HomeHeading><img src="./logo2.png" alt="Ortho Optimisation" /></HomeHeading>
            <HomeTitle>Gestion de votre liste d'attente de patients</HomeTitle>
            <HomeText>Simplifiez-vous la vie et utilisez ORTH'OPTI pour gérer gratuitement votre liste d'attente de patients. Il vous suffit de vous inscrire et c'est parti !</HomeText>
            <HomeSeparator />
            <HomeTitle>Comment ça marche ?</HomeTitle>
            <HomeText>Rien de plus simple créez votre compte en quelques clics.</HomeText>
        </HomeContainer>
    )
}

export default Home
