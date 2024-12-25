import propsTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CallToAction from "Pages/landing/callToAction";
import Footer from "Components/layout/Footer";
import { ProjectList } from "Constants/projectList";

import River from "./river";
import Rethink from "./rethink";
import GreenFinancing from "./greenFinancing";
import CircularTextiles from "./circularTextiles";
import ForestSchool from "./forestSchool";

const componentsList = {
  'river_protection': River,
  'trash_can_re-design': Rethink,
  'green_finance': GreenFinancing,
  'circular_textiles': CircularTextiles,
  'forest_school': ForestSchool,
};

const PageContent = ({ id }) => {
  const Component = componentsList[id] || null;
  return <>{Component ? <Component /> : <div>Invalid ID</div>}</>;
};

const Index = ({ id = "river", isIndependent = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState(id);

  useEffect(() => {
    const locationPath = location.pathname.split("/").slice(-2);
    if (locationPath[0] !== "project") { 
      setProjectId(id)
      return;
    }
    if ( ProjectList.map((project) => project.id).includes(locationPath[1])) {
      setProjectId(locationPath[1]);
    } else {
      navigate("/");
    }
  }, [location, navigate, id]);

  return (
    <>
      {isIndependent && <div className="h-[78px] sm:h-[80px] md:h-[14px]" />}
      <PageContent id={projectId} />
      <CallToAction />
      {!isIndependent && <Footer />}
    </>
  );
};

PageContent.propTypes = {
  id: propsTypes.string.isRequired,
};

Index.propTypes = {
  id: propsTypes.string,
  isIndependent: propsTypes.bool,
};

export default Index;
