import Notas from "../../components/Notes";

const Perfil = () => {
    return (
<div className="User">
    <div className="content"/>
    <div className="container">
      <div className="profile-header">
        <div className="profile-img">
          <img src="/Picture.jpeg" width="200" alt="Profile Image" />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">Noneda </h3>
          <div className="address">
            <p id="state" className="state">Student</p>
            <span id="country" className="country">Software Engineer</span>
          </div>
        </div>
        <div className="profile-option">
          <div className="notification">
            <i className="fa fa-bell"></i>
            <span className="alert-message">3</span>
          </div>
        </div>
      </div>

      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <p className="mobile-no"><i className="fa fa-phone"></i> +57 322xxxxx98</p>
            <p className="user-mail"><i className="fa fa-envelope"></i> nonejda@gmail.com</p>
            <div className="user-bio">
              <h3>Bio</h3>
              <p className="bio">
                Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
              </p>
            </div>
            <div className="profile-btn">
              <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
              <button className="createbtn" id="Create-post"><i className="fa fa-plus"></i> Create</button>
            </div>
            <div className="user-rating">
              <h3 className="rating">3.9 <p>Average score</p></h3> 
              <div className="rate">
                <div className="star-outer">
                 <div className="star-inner">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                 </div>
                </div>
                <span className="no-of-user-rate"><span>54</span>&nbsp;&nbsp;Curses</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="nav">
            <ul>
              <li className="">Post</li>
              <li className="active">Classes</li>
              <li className=""> Settings</li>
            </ul>
          </div>
          <div className="profile-body">
              {
                Array.from(
                  {
                    length: 3
                  },
                  (_ , i ) => (
                    <Notas key={i}/>
                  )
                )
              }
          </div>
        </div>
      </div>
    </div>
</div>
    )
}

export default Perfil;