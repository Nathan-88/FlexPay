import Navbarsigin from "../components/login_siginup/Navbarsigin";
import Footer from "../components/footer";
import Signup_input from "../components/login_siginup/Signup_input";
const Signup = () => {
    return (
        <section className="bg-[#F2F2F2]">
            <Navbarsigin name="SIGN IN" link="login" />
            <Signup_input />
            <Footer/>
        </section>
    );
}
export default Signup;