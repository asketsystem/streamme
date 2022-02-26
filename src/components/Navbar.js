import React from "react";

const Navbar = () => {
  return (
    <NavContainer>
      <MainContainer>
        <LeftContainer>
          <img src="" alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </LeftContainer>
        <RightContainer>
          <MySearch />
          <span>KID</span>
          <MyNotification />
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="user-image"
          />
          <ProfileContainer>
            <MyArrowDropDown />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </ProfileContainer>
        </RightContainer>
      </MainContainer>
    </NavContainer>
  );
};

export default Navbar;
