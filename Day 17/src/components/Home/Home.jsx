import { useState } from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
export default function Home() {
    const [cardsInfo, setCardsInfo] = useState(
        [{id:1, projectName: 'Portfolio', techUsed: ['HTML', 'CSS', 'TS', 'Tailwind', 'React']},
        {id:2, projectName: 'Ecommerce', techUsed: ['HTML', 'CSS', 'TS', 'Tailwind', 'Angular']}]);
    const [userName, setUserName] = useState('Mesh Mesh');
    return (
        <>
            <NavBar />
            <Hero userName={userName}/>
            <Projects projectsInfo={cardsInfo}/>
        </>
    );
}
