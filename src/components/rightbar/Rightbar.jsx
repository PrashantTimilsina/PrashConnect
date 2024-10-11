import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Sushmita Timilsina</b> and <b>3 other friends </b>have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Saurab Poudel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Aman Bastola</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Samir Subedi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anil Poudel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Prabin Timilsina</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sugam Poudel</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
