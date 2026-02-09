"use client";

import Container from "./components/Container";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Sponsors from "./components/Sponsors23";
import Manifesto from "./components/Manifesto";
import Investors from "./components/cohort/Investors";
import RecentTweets from "./components/RecentTweets";


const HomeComponent: React.FC = () => { 
  return (
    <Container bgColor='#0d090e'>
      <Head />  
      {/* <Sponsors /> */}
      <Investors />
      <Manifesto />
      <RecentTweets />
      <Footer />
    </Container>
  );
};

export default HomeComponent;
