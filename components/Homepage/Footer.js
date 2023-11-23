import React from "react";
import Image from "next/image";
import logo from "/assets/logo.svg";
import facebook from "/assets/facebook.svg";
import twitter from "/assets/twitter.svg";
import youtube from "/assets/youtube.svg";
import instagram from "/assets/instagram.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black  shadow dark:bg-gray-900  pt-20">
        <div className="w-full max-w-screen-xl mx-auto py-12">
          <div className="first-footer-line sm:flex sm:items-center sm:justify-between">
            <Image src={logo} alt="logo" className="footer-logo"></Image>
            <p className="text-white footer-para">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem
              rerum facilis est et expedita.
            </p>
          </div>

          <div className="flex ">
            <div className="w-1/2 mt-10">
              <div>
                <h4 className="help-text-footer text-white">Need Any Help ?</h4>
              </div>

              {/*--------------------------------------------------------Menu sectio-----------------------------------------------------------*/}

              <div className="call-section-footer">
                <p className="small-text-footer text-white">
                  Call 24/7 For Any Help
                </p>
                <p className="text-white">
                  <a href="tel:1860 233 1407">1860 233 1407</a>
                </p>
              </div>

              <div className="call-section-footer">
                <p className="small-text-footer text-white">
                  For Any Query or Feedback
                </p>
                <p className="text-white">
                  <a href="mailto:Contactus@inoqia.com">Contactus@inoqia.com</a>
                </p>
              </div>

              {/*-------------------------------------------------------End Menu Section--------------------------------------------------------*/}
            </div>
          </div>

          <br></br>

          <div className="icon-section-footer mt-10">
            <p className="pl-2 text-white font-semibold">Follow Us On</p>
            <div className="icons-footer flex">
              <Image src={facebook} alt="facebook"></Image>
              <Image src={twitter} alt="twitter"></Image>
              <Image src={instagram} alt="instagram"></Image>
              <Image src={youtube} alt="youtube"></Image>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
