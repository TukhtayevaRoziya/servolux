import React, { useEffect, useState } from "react";
import VideoPlayer from "react-background-video-player";
import { useTranslation } from "react-i18next";
import AOS from "aos";

import { Navbar } from "./navbar/Navbar";
import i18n from "./../i18n";
import "./Home.css";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [company, setCompany] = useState("");
  const [activity, setActivity] = useState("");
  const [responsibility, setResponsibility] = useState("");

  window.addEventListener("load", AOS.refresh);
  if (document.readyState == "complete") {
    AOS.refresh();
  }
  const { t, i18n2 } = useTranslation();

  const [classN, setClassN] = useState("en");

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      setClassN(ln);
      console.log(`Language change to ${ln}`);
    };
  };
  console.log(document.location.hash === "#activity");
  return (
    <div className="container">
      <div className="page" id="company">
        <VideoPlayer
          className="video"
          src={
            "https://back3.servolux.com/storage/app/uploads/public/604/b2a/060/604b2a060611d244580823.mp4"
          }
          autoPlay={true}
          muted={true}
        />
        <div className="text">
          <div className="block">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 458 60"
                width="190"
                height="20"
              >
                <path
                  d="M9.8 43.6c6 .9 10.3-.4 13.7-3.9 2.8-3 4.3-6.5 5.9-10.1 1.6-3.5 3.2-7.2 6.1-10.4 0 0 .1 0 .1-.1 2.1-2.3 4.8-4.3 8.6-6 6.2-2.7 11.1-2.7 15.6-1.8V3.6c0-2-1.6-3.6-3.6-3.6H3.6C1.6 0 0 1.6 0 3.6v34.9c2.3 2.4 5 4.4 9.8 5.1z"
                  fill="#fff"
                ></path>
                <path
                  d="M49.9 16.1c-6-.9-10.3.4-13.7 3.9-2.8 3-4.3 6.5-6 10.1-1.6 3.5-3.2 7.1-6.1 10.4l-.1.1c-2.1 2.2-4.8 4.3-8.6 6-3.8 1.7-7.2 2.3-10.3 2.3-1.8 0-3.6-.2-5.3-.6v7.9c0 2 1.6 3.6 3.6 3.6h52.5c2 0 3.6-1.6 3.6-3.6v-35c-2.1-2.4-4.8-4.4-9.6-5.1zm39.3 32l5.6-7.7c3.4 3.5 8.6 6.5 15.2 6.5 5.6 0 8.3-2.6 8.3-5.3 0-8.5-27.6-2.7-27.6-20.7 0-8 6.9-14.6 18.2-14.6 7.6 0 13.9 2.3 18.7 6.7l-5.7 7.5c-3.9-3.6-9.1-5.2-13.9-5.2-4.4 0-6.8 1.9-6.8 4.8 0 7.6 27.5 2.5 27.5 20.4 0 8.8-6.3 15.4-19.2 15.4-9.2-.2-15.8-3.3-20.3-7.8zm152.9 6.8L223.6 7h11.6l13.3 36.9L261.7 7h11.7l-18.5 47.9zM313.7 31c0-9-5.7-15.7-14.6-15.7S284.6 22 284.6 31c0 8.9 5.7 15.7 14.5 15.7s14.6-6.8 14.6-15.7zm-39.6 0c0-14.5 10.5-24.8 25-24.8s25.1 10.3 25.1 24.8c0 14.4-10.6 24.8-25.1 24.8-14.5 0-25-10.4-25-24.8zm87.3 4.4V6.6h10.3V35c0 6.7 3.9 11.3 11.3 11.3s11.2-4.6 11.2-11.3V6.6h10.4v28.7c0 11.9-7 20-21.6 20-14.5.1-21.6-8.1-21.6-19.9zm84 19.5l-12-17.5-12.1 17.5h-12.1l17.4-24.5L410.2 7h12.2l11 16.4L444.2 7h12.3l-16.3 23.3 17.4 24.6zM217.9 7h-4.6c-12 0-21.9 7.7-21.9 20.6V55h10.2V28.8c0-7.7 4.5-12.4 12-12.4h4.3V7zm138.6 48.1h-4.7c-11.9 0-21.9-7.7-21.9-20.6V6.8h10.2v26.5c0 7.7 4.5 12.4 12 12.4h4.3v9.4zM160 16c7.3 0 12.6 3.8 14.1 10.7h-28.6c1.9-6 7.4-10.7 14.5-10.7zm13 24.3c-2.7 3.9-7.1 6.3-12.6 6.3-8.3 0-14-5.4-15.3-12.2h39.6v-3.9c0-14.1-10.5-24.3-24.6-24.3-14 0-24.8 11-24.8 24.9 0 13.8 10.1 24.6 25.1 24.6 9 0 15.9-3.8 20.3-9.8l-7.7-5.6z"
                  fill="#fff"
                ></path>
              </svg>
              <div className="navbarLinks">
                <NavHashLink
                  exact
                  to="#company"
                  className={company}
                  onClick={() => {
                    setActivity("");
                    setCompany("actived");
                    setResponsibility("");
                  }}
                >
                  {t("navbar1")}
                </NavHashLink>
                <NavHashLink
                  exact
                  to="#ecosystem"
                  className={activity}
                  onClick={() => {
                    setActivity("actived");
                    setCompany("");
                    setResponsibility("");
                  }}
                >
                  {t("navbar2")}
                </NavHashLink>
                <NavHashLink
                  to="#responsibility"
                  onClick={() => {
                    setResponsibility("actived");
                    setActivity("");
                    setCompany("");
                  }}
                  className={responsibility}
                >
                  {t("navbar3")}
                </NavHashLink>
              </div>
            </div>
            <div className="mainBlock">
              <div className="header">
                <div className="language">
                  <button
                    className={classN === "ru" ? classN : ""}
                    onClick={changeLanguage("ru")}
                  >
                    Ru
                  </button>
                  <button
                    className={classN === "en" ? classN : ""}
                    onClick={changeLanguage("en")}
                  >
                    En
                  </button>
                  <button
                    className={classN === "cn" ? classN : ""}
                    onClick={changeLanguage("cn")}
                  >
                    Cn
                  </button>
                </div>
                <h1>{t("navbarTitle")}</h1>
                <svg className="smLogo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 458 60"
                  width="190"
                  height="20"
                >
                  <path
                    d="M9.8 43.6c6 .9 10.3-.4 13.7-3.9 2.8-3 4.3-6.5 5.9-10.1 1.6-3.5 3.2-7.2 6.1-10.4 0 0 .1 0 .1-.1 2.1-2.3 4.8-4.3 8.6-6 6.2-2.7 11.1-2.7 15.6-1.8V3.6c0-2-1.6-3.6-3.6-3.6H3.6C1.6 0 0 1.6 0 3.6v34.9c2.3 2.4 5 4.4 9.8 5.1z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M49.9 16.1c-6-.9-10.3.4-13.7 3.9-2.8 3-4.3 6.5-6 10.1-1.6 3.5-3.2 7.1-6.1 10.4l-.1.1c-2.1 2.2-4.8 4.3-8.6 6-3.8 1.7-7.2 2.3-10.3 2.3-1.8 0-3.6-.2-5.3-.6v7.9c0 2 1.6 3.6 3.6 3.6h52.5c2 0 3.6-1.6 3.6-3.6v-35c-2.1-2.4-4.8-4.4-9.6-5.1zm39.3 32l5.6-7.7c3.4 3.5 8.6 6.5 15.2 6.5 5.6 0 8.3-2.6 8.3-5.3 0-8.5-27.6-2.7-27.6-20.7 0-8 6.9-14.6 18.2-14.6 7.6 0 13.9 2.3 18.7 6.7l-5.7 7.5c-3.9-3.6-9.1-5.2-13.9-5.2-4.4 0-6.8 1.9-6.8 4.8 0 7.6 27.5 2.5 27.5 20.4 0 8.8-6.3 15.4-19.2 15.4-9.2-.2-15.8-3.3-20.3-7.8zm152.9 6.8L223.6 7h11.6l13.3 36.9L261.7 7h11.7l-18.5 47.9zM313.7 31c0-9-5.7-15.7-14.6-15.7S284.6 22 284.6 31c0 8.9 5.7 15.7 14.5 15.7s14.6-6.8 14.6-15.7zm-39.6 0c0-14.5 10.5-24.8 25-24.8s25.1 10.3 25.1 24.8c0 14.4-10.6 24.8-25.1 24.8-14.5 0-25-10.4-25-24.8zm87.3 4.4V6.6h10.3V35c0 6.7 3.9 11.3 11.3 11.3s11.2-4.6 11.2-11.3V6.6h10.4v28.7c0 11.9-7 20-21.6 20-14.5.1-21.6-8.1-21.6-19.9zm84 19.5l-12-17.5-12.1 17.5h-12.1l17.4-24.5L410.2 7h12.2l11 16.4L444.2 7h12.3l-16.3 23.3 17.4 24.6zM217.9 7h-4.6c-12 0-21.9 7.7-21.9 20.6V55h10.2V28.8c0-7.7 4.5-12.4 12-12.4h4.3V7zm138.6 48.1h-4.7c-11.9 0-21.9-7.7-21.9-20.6V6.8h10.2v26.5c0 7.7 4.5 12.4 12 12.4h4.3v9.4zM160 16c7.3 0 12.6 3.8 14.1 10.7h-28.6c1.9-6 7.4-10.7 14.5-10.7zm13 24.3c-2.7 3.9-7.1 6.3-12.6 6.3-8.3 0-14-5.4-15.3-12.2h39.6v-3.9c0-14.1-10.5-24.3-24.6-24.3-14 0-24.8 11-24.8 24.9 0 13.8 10.1 24.6 25.1 24.6 9 0 15.9-3.8 20.3-9.8l-7.7-5.6z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>

              <div className="divTexts">
                <div data-aos="fade-left" data-aos-delay="2000">
                  {t("AGRO")}
                </div>
                <div data-aos="fade-left" data-aos-delay="2500">
                  {t("PROM")}
                </div>
                <div data-aos="fade-left" data-aos-delay="3000">
                  {t("HOLDING")}
                </div>
              </div>
              <button className="Aboutbtn">{t("aboutBtn")}</button>
            </div>
            <Navbar />
          </div>
        </div>
      </div>
      {/* <div className="page" id="activity">
        <div className="text text--random" data-scroll="out" data-splitting="">
          <div>

          </div>
        </div>
      </div> */}
      <div className="page" id="ecosystem">
        <div
          className="text text--enter ecoSystem__body"
          data-scroll="out"
          data-splitting=""
        >
          <div className="ecoSystem">
            <div className="ecoSystem__body_texts">
              <h1>Management</h1>
              <div className="ecoSystem__texts">
                <span>01</span>
                <p>Control</p>
                <h3>OPERATING ACTIVITIES</h3>
              </div>
            </div>
          </div>
          <div className="ecoSystem ecoSystem2">
            <div className="ecoSystem__body_texts">
              <div className="ecoSystem__texts">
                <span>02</span>
                <p>Technologies</p>
                <h3>PRODUCTION</h3>
              </div>
            </div>
          </div>
          <div className="ecoSystem ecoSystem2">
            <div className="ecoSystem__body_texts">
              <div className="ecoSystem__texts">
                <span>03</span>
                <p>Assortment</p>
                <h3>CONSUMER PREFERENCES</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page" id="responsibility">
        <div
          className="text text--swapsies businessPage__body"
          data-scroll="out"
          data-splitting=""
        >
          <div className={"businessPage"}>
            <h1>Business context</h1>
            <div>
              <p>
                We are a responsible global business, ensuring a sustainable
                balance between environmental protection, social responsibility
                and profitability in all aspects of where we do business
              </p>
              <button className="Aboutbtn">{t("aboutBtn")}</button>
            </div>
          </div>
          <div className="businessPageBoxes">
            <div className="businessPageBox">
              <div className="businessPageBoxBG"></div>
              <h1>01</h1>
              <p>BUSINESS RESPONSIBILITY</p>
            </div>
            <div className="businessPageBox">
              <h1>02</h1>
              <p>BUSINESS RESPONSIBILITY</p>
            </div>
            <div className="businessPageBox">
              <h1>03</h1>
              <p>BUSINESS RESPONSIBILITY</p>
            </div>
            <div className="businessPageBox">
              <h1>04</h1>
              <p>BUSINESS RESPONSIBILITY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="text text--fading" data-scroll="out" data-splitting="">
          Fading
        </div>
      </div>
      <div className="page">
        <div
          className="text text--flipping"
          data-scroll="out"
          data-splitting=""
        >
          Flipping
        </div>
      </div>
    </div>
  );
};
