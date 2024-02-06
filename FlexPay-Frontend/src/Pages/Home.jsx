import NavBar from "../components/NavBar";
import HeroSec from "../components/HeroSec";
import Footer from "../components/footer";
function Home() {
    return(
        <section className="h-screen">
            <NavBar/>
            <HeroSec/>
            <Footer/>
        </section>
    )
}

export default Home;