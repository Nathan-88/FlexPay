import NavBar from "../components/NavBar";
import HeroSec from "../components/HeroSec";
import Footer from "../components/footer";
function Home() {
    return(
        <section className="h-auto min-h-svh flex flex-col  bg-[#F2F2F2] relative">
            <NavBar/>
            <HeroSec/>
            <Footer/>
        </section>
    )
}

export default Home;