import axios from "axios";
import AppContext from "./AppContext";
import { useEffect, useState } from "react";

const AppState = (props) => {
  const URI = "mern-stack-portfolio-website-hhrw-caa35w56t.vercel.app/api";
  const [homeData, setHomeData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [aboutSkill, setAboutSkill] = useState([]);
  const [ServicesData, setServicesData] = useState([]);
  const [ProjectData, setProjectData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    GetHomeData();
    getAbout();
    getAboutSkill();
    AllServices();
    GetAllproject();
  }, []);
  const GetHomeData = async () => {
    const Response = await axios.get(`${URI}/home`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    setHomeData(Response?.data);
    return Response.data;
  };
  const getAbout = async () => {
    const Response = await axios.get(`${URI}/about`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    setAboutData(Response?.data);
    return Response.data;
  };
  const getAboutSkill = async () => {
    const Response = await axios.get(`${URI}/skill`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(!reload);
    setAboutSkill(Response?.data);
    return Response.data;
  };

  const AllServices = async () => {
    const Response = await axios.get(`${URI}/services`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(!reload);
    setServicesData(Response?.data);
    return Response.data;
  };
  const GetAllproject = async () => {
    const Response = await axios.get(`${URI}/project`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(!reload);
    setProjectData(Response?.data);
    return Response.data;
  };

  const ContactAdd = async (fullname, email, number, message) => {
    const Response = await axios.post(
      `${URI}/contact/usercontact`,
      {
        fullname,
        email,
        number,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setReload(true);
    return Response.data;
  };

  return (
    <AppContext.Provider
      value={{
        homeData,
        aboutData,
        aboutSkill,
        ServicesData,
        ProjectData,
        ContactAdd,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
