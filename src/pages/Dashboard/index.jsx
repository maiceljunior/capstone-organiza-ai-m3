import AvatarComponent from "../../components/Avatar";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import { useUser } from "../../providers/user";
import { Api } from "../../services/api";
import { Main } from "./style";
import { Loading } from "./loading";
import RenderList from "../../components/RenderList";

const Dashboard = () => {
  const { user, setUser } = useUser();
  const UserID = localStorage.getItem("UserID");
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Api.get(`users/${UserID}`).then((res) => {
        setUser(res.data);
        setRemoveLoading(true);
      });
    }, 2000);
  }, []);

  const handleClick = () => { };

  return (
    <>
      <Header>
        {!removeLoading && <Loading />}
        {user.name && (
          <AvatarComponent
            onClick={handleClick}
            userName={user.name}
            userAvatar
          />
        )}
      </Header>
      <Main>
        
      </Main>
    </>
  );
};

export default Dashboard;
