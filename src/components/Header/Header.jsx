import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "../HeaderOption/HeaderOption";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="linkedin logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          onCli
          avatar={
            "https://media-exp1.licdn.com/dms/image/D4D03AQGSJOFfTI9uOQ/profile-displayphoto-shrink_100_100/0/1666013036629?e=1671667200&v=beta&t=kURXsMGwR4MCILZG43h8O4GO4-qjziwcIR_YBYsZr60"
          }
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
