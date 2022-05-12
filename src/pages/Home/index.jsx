import Header from "../../components/Header";
import Button from "../../components/Button";
import { Footer, Home, SectionOne, SectionThree, SectionTwo } from "./style";
import JogoHome from "../../assets/imgs/jogoHome.png"
import JogoSectionTwo from "../../assets/imgs/JogoSectionTwo.png"
import JogoSectionThree from "../../assets/imgs/JogoSectionThree.png"


const HomePage = () => {

    return (
        <Home>
            <Header>
                <Button id="btnLogin" ><span>Login</span></Button>
            </Header>

            <SectionOne>
                <div>
                    <h2>Um jeito mais fácil de organizar pequenos eventos e conhecer pessoas novas.</h2>

                    <Button alt="CRIE SUA CONTA">
                        <i>C</i>
                        <i>a</i>
                        <i>d</i>
                        <i>a</i>
                        <i>s</i>
                        <i>t</i>
                        <i>r</i>
                        <i>e</i>
                        <i>-</i>
                        <i>s</i>
                        <i>e</i>
                    </Button>

                </div>

                <img src={JogoHome} alt="Pessoas Jogando tabuleiro" />
            </SectionOne>

            <SectionTwo>
                <img src={JogoSectionTwo} alt="Pessoas Jogando tabuleiro" />

                <h2>Você escolhe, organiza e convida seus amigos para o seu evento.</h2>
            </SectionTwo>

            <SectionThree>
                <h2>RÁPIDO, PRÁTICO E DIVERTIDO</h2>

                <img src={JogoSectionThree} alt="Pessoas Jogando tabuleiro" />
            </SectionThree>

            <Footer>
                <span>Planejado por: <a href="#top">Equipe 3</a></span>
            </Footer>
        </Home>
    )
}

export default HomePage;