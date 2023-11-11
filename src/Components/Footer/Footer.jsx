import first from "C:/Users/91771/Desktop/anime-website/src/Videos/first.mp4";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div>
          <img
            className="background-image"
            src={require("C:/Users/91771/Desktop/anime-website/src/Photos/Footer/footer.png")}
            alt=""
          />
        </div>
        <div className="footer-elements">
          <img
            className="footer-logo"
            src={require("C:/Users/91771/Desktop/anime-website/src/Photos/Logo.png")}
            alt=""
          />
          <p>Help &nbsp; &nbsp; Contact &nbsp; &nbsp; Request</p>
          <p>Copyright © Anima. All Rights Reserved.</p>
          <p>
            This website is only for project purpuse, We don't claim ownership
            of any content.
          </p>
        </div>
      </footer>

      {/* <video width="700px" height="400px" controls>
        <source src={first} type="video/mp4" />
      </video> */}
    </div>
  );
}

export default Footer;
