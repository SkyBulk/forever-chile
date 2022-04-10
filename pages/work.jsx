import { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";
import ListOfWorks from "../components/ListOfWorks";
import Footer, { FooterMobile } from "../components/Footer";
import WorkMobileSelector from "../components/WorkMobileSelector";
import Modal from "../components/Modal";
import Dots from "../components/Dots";
import { motion } from "framer-motion";
import { GET_WORK_ENTRY } from "../queries/getWorkEntry";

const Heading = styled.h1`
  max-width: 615px;
  font-size: 50px;
`;

const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  margin-right: 240px;
  li {
    cursor: pointer;
    list-style: none;
    position: relative;
    &::after {
      transition: background 300ms ease-in-out;
      content: "";
      position: absolute;
      z-index: 5;
      left: 0;
      right: 0;
      bottom: -20px;
      margin-left: auto;
      margin-right: auto;
      width: 8px;
      height: 8px;
      border-radius: 9999px;
      background: transparent;
      visibility: hidden;
    }
    &.active {
      &::after {
        background: #052cab;
        visibility: visible;
      }
    }
  }

  @media (max-width: 1194px) {
    margin-right: 200px;
  }
  @media (max-width: 1070px) {
    margin-right: 150px;
    display: none;
  }
`;

const menuList = [
  "All",
  "Films",
  "Multimedia",
  "Advertising",
  "3D & Videogames",
  "Editorial",
  "Industrial (soon)",
];

const getURLParams = () => {
  let params = new URLSearchParams(document.location.search);
  let categorySearched = params.get("category");
  return categorySearched?.toLowerCase();
};

const WorkPage = ({ page = {} }) => {
  const { description, workVideosCollection = [] } = page;
  const [workSection, setWorkSection] = useState("all");
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const searchParam = getURLParams();
    if (typeof searchParam === "string") {
      setWorkSection(searchParam);
    }
  }, []);

  return (
    <>
      <Header noDot isAbout isWork />
      <Dots />
      <Layout>
        <Heading>
          {description ||
            "We deliver and achieve the best combination of results for each spectator."}
        </Heading>
      </Layout>
      <Layout>
        <Navigation className="_1">
          {menuList.map((item) => (
            <motion.li
              key={item}
              className={item.toLowerCase() === workSection ? "active" : null}
              onClick={() => setWorkSection(item?.toLowerCase())}
            >
              {item}
            </motion.li>
          ))}
        </Navigation>
        <div className="_3"></div>
      </Layout>
      <WorkMobileSelector
        menu={menuList}
        workSection={workSection}
        onWorkSelection={setWorkSection}
      />
      <ListOfWorks workSection={workSection} onClick={() => setIsOpen(true)} />
      <Footer />
      <FooterMobile />
      <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default WorkPage;

export async function getStaticProps() {
  const { contentful } = require("../contentful/service");
  const page = await contentful("work", GET_WORK_ENTRY);

  return {
    props: {
      page,
    },
  };
}