import {
  Container,
  ContentUl,
  Developer,
  DivInfo,
  Body,
  ContainerImg,
  AnimationContainerLeft,
  AnimationContainerRight,
  ContainerIcons,
} from "./style";
import logo from "../../assets/imgs/logoOrange.png";
import { useHistory } from "react-router-dom";
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";

const Developers = () => {
  const history = useHistory();
  return (
    <Body>
      <ContainerImg>
        <img
          className="logo"
          src={logo}
          alt="Logo da Organizaai"
          onClick={() => history.push("/")}
        />
      </ContainerImg>
      <Container>
        <p>
          Esse projeto foi desenvolvido no Capstone do modúlo 3 do curso de
          Fullstack da Kenzie Academy.
        </p>
        <h1> Elaborado e desenvolvido por:</h1>

        <ContentUl>
          <AnimationContainerRight>
            <Developer>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFhePtumfebtA/profile-displayphoto-shrink_800_800/0/1637759227636?e=1658361600&v=beta&t=oc5R6gLHK333CMPPxfwnattrRFTv3HJX_4_Lp1v9yyo"
                alt="Rachel"
              />
              <DivInfo>
                <h3> Rachel Braga </h3>
                <span>Scrum Master </span>

                <ContainerIcons>
                  <a
                    href="https://www.linkedin.com/in/rachel-braga-rm/"
                    target="blank"
                  >
                    {" "}
                    <BsLinkedin />
                  </a>
                  <a href="https://github.com/rachbraga" target="blank">
                    {" "}
                    <BsGithub />
                  </a>
                </ContainerIcons>
              </DivInfo>
            </Developer>
          </AnimationContainerRight>
          <AnimationContainerLeft>
            <Developer>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEPF93r3DhswA/profile-displayphoto-shrink_200_200/0/1643377908884?e=1658361600&v=beta&t=vHJ-6tTEF6Veq0R2F_DhCnrs0WG6GC8vb6009YxL4ZY"
                alt="Maicel"
              />
              <DivInfo>
                <h3> Maicel A. Junior </h3>
                <span>Tech Leader </span>

                <ContainerIcons>
                  <a
                    href="https://www.linkedin.com/in/maiceljunior/"
                    target="blank"
                  >
                    {" "}
                    <BsLinkedin />
                  </a>
                  <a href="https://github.com/maiceljunior" target="blank">
                    {" "}
                    <BsGithub />
                  </a>
                </ContainerIcons>
              </DivInfo>
            </Developer>
          </AnimationContainerLeft>
          <AnimationContainerRight>
            <Developer>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U02ETCPV8SY-bc58de584a43-512"
                alt="Rachel"
              />
              <DivInfo>
                <h3> Danilo Valério </h3>
                <span>Product Owner </span>

                <ContainerIcons>
                  <a href="https://www.linkedin.com/in/danilo-val%C3%A9rio-495804a5/" target="blank">
                    {" "}
                    <BsLinkedin />
                  </a>
                  <a href="https://github.com/danilovalerio89" target="blank">
                    {" "}
                    <BsGithub />
                  </a>
                </ContainerIcons>
              </DivInfo>
            </Developer>
          </AnimationContainerRight>
          <AnimationContainerLeft>
            <Developer>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U02D1HEV9FX-99a26ad1397d-512"
                alt="Maicel"
              />
              <DivInfo>
                <h3> Luiz Augusto Assano</h3>
                <span>Quality Assurance </span>

                <ContainerIcons>
                  <a
                    href="https://www.linkedin.com/in/luiz-augusto-assano/"
                    target="blank"
                  >
                    {" "}
                    <BsLinkedin />
                  </a>
                  <a href="https://github.com/luizassano" target="blank">
                    {" "}
                    <BsGithub />
                  </a>
                </ContainerIcons>
              </DivInfo>
            </Developer>
          </AnimationContainerLeft>
          <AnimationContainerRight>
            <Developer>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U02NEECF1PU-214b152b0bc0-512"
                alt="Rachel"
              />
              <DivInfo>
                <h3> Paulo Victor Guerra </h3>
                <span>Quality Assurance </span>

                <ContainerIcons>
                  <a href="https://www.linkedin.com/in/paulo-victor-6a4b81228/" target="blank">
                    {" "}
                    <BsLinkedin />
                  </a>
                  <a href="https://github.com/pvillor" target="blank">
                    {" "}
                    <BsGithub />
                  </a>
                </ContainerIcons>
              </DivInfo>
            </Developer>
          </AnimationContainerRight>
          <AnimationContainerLeft>
            <Developer>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U02JSJ0TXH9-ff22c1094658-512"
                alt="Maicel"
              />
              <DivInfo>
                <h3> Kefren Kennedy Almeida </h3>
                <span>Quality Assurance </span>

                <ContainerIcons>
                  <a href="https://www.linkedin.com/in/kefren-kennedy-015763239/" target="blank">
                    {" "}
                    <BsLinkedin />
                  </a>
                  <a href="https://github.com/kefrenkennedy" target="blank">
                    {" "}
                    <BsGithub />
                  </a>
                </ContainerIcons>
              </DivInfo>
            </Developer>
          </AnimationContainerLeft>
        </ContentUl>
      </Container>
    </Body>
  );
};

export default Developers;
