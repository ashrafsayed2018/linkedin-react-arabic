/* eslint-disable react/prop-types */
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import { signOutApi } from "../redux/actions";
import { connect } from "react-redux";

const Header = (props) => {
  console.log(props.user);
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <SearchCointainer>
          <div>
            <input type="text" placeholder="search" />
            <SearchIcon>
              <Search />
            </SearchIcon>
          </div>
        </SearchCointainer>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href="">
                <HomeIcon />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <PeopleIcon />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <BusinessCenterIcon />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <ChatBubbleOutlineIcon />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <NotificationsIcon />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a href="">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (
                  <AccountCircleIcon />
                )}

                <span className="user">
                  Me <ArrowDropDownIcon />
                </span>
              </a>
              <SignOut className="signOut" onClick={() => props.signOut()}>
                <a href="">SignOut</a>
              </SignOut>
            </User>
            <Work>
              <a href="">
                <AppsIcon />
                <span className="work">
                  work <ArrowDropDownIcon />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const SearchCointainer = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.span`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    right: 15px;
    background: #eee;
  }
`;
const User = styled.li`
  a {
    lign-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .user {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
  }
  &:hover {
    .signOut {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled.li`
  a {
    lign-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  }
  .work {
    display: flex;
    align-items: center;
  }

  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 575px) {
    display: none;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
