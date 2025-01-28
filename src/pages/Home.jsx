import AboutMe from "../section/AboutMe"
import ContactMe from "../section/ContactMe"
import Hero from "../section/Hero"
import Skills from "../section/Skills"

const Home = () => {
    return (
        <main>
            <Hero />
            <AboutMe />
            <Skills />
            <ContactMe />
        </main>
    )
}

export default Home