import Navbarsigin from "../components/login_siginup/Navbarsigin"
import Footer from "../components/footer"
import Login_in from "../components/login_siginup/Login_input"


const Login =() => {
    return(
        <section className="min-h-[100vh] flex flex-col m-0 bg-[#F2F2F2]">
            <Navbarsigin name="SIGN UP" link="signup"/>
            <Login_in/>
            <Footer/>
        </section>
    )
}
export default Login