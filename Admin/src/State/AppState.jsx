import { useState } from "react";
import AppContext from "./AppContext";
import { useEffect } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
const AppState = (props) => {
  const [homeData, setHomeData] = useState([]);
  const [AboutData, setAboutData] = useState([]);
  const [aboutSkill, setAboutSkill] = useState([]);
  const [ServicesData, setServicesData] = useState([]);
  const [reload, setReload] = useState(false);
  const [SingleData, setSingleData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    GetAllHomeData();
    GetAboutPage();
    GetAllSkill();
    GetServices();
    GetAllproject();
    GetAllContact();
  }, [reload]);

  const URI = "https://mern-stack-portfolio-website.vercel.app/api";
  const GetAllHomeData = async () => {
    const Response = await axios.get(`${URI}/home`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setHomeData(Response?.data?.home[0]);
    return Response.data;
  };

  const GetSingleHomw = async (id) => {
    const Response = await axios.get(`${URI}/home/single/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setSingleData(Response?.data);
    return Response.data;
  };

  const UpdateHome = async (formData, id) => {
    const Response = await axios.put(
      `${URI}/home/update-home/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setReload(true);
    return Response.data;
  };

  const GetAboutPage = async () => {
    const Response = await axios.get(`${URI}/about`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setAboutData(Response?.data?.about[0]);
    return Response.data;
  };

  const UpdateAbout = async (formData, id) => {
    const Response = await axios.put(
      `${URI}/about/update-about/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    setReload(true);
    return Response.data;
  };

  const GetSingleAbout = async (id) => {
    const Response = await axios.get(`${URI}/about/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const GetAllSkill = async () => {
    const Response = await axios.get(`${URI}/skill`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setAboutSkill(Response?.data);
    return Response.data;
  };

  const AddSkill = async (title, icon, description) => {
    const Response = await axios.post(
      `${URI}/skill/creat-skills`,
      {
        title,
        icon,
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return Response.data;
  };

  const UpdateSkill = async (title, icon, description, id) => {
    const Response = await axios.put(
      `${URI}/skill/update-skill/${id}`,
      {
        title,
        icon,
        description,
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

  const SingleSkill = async (id) => {
    const Response = await axios.get(`${URI}/skill/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const DeletSkill = async (id) => {
    const Response = await axios.delete(`${URI}/skill/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(true);
    if (Response.success == true) {
      toast.success(Response?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(Response?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    return Response.data;
  };
  const GetServices = async () => {
    const Response = await axios.get(`${URI}/services`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setServicesData(Response?.data);
    return Response.data;
  };

  const AddServices = async (formData) => {
    const Response = await axios.post(
      `${URI}/services/creat-services`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    setReload(true);
    return Response.data;
  };
  const GetSIngleServices = async (id) => {
    const Response = await axios.get(`${URI}/services/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const UpdateServices = async (formData, id) => {
    const Response = await axios.put(
      `${URI}/services/creat-update/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    setReload(true);
    return Response.data;
  };

  const DeletServices = async (id) => {
    const Response = await axios.delete(`${URI}/services/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(true);
    if (Response?.data?.success == true) {
      toast.success(Response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(Response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const UploadProject = async (formData) => {
    const Response = await axios.post(
      `${URI}/project/creat-project`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    setReload(true);
    return Response.data;
  };

  const UpdateProject = async (formData, id) => {
    const Response = await axios.put(`${URI}/project/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    setReload(true);
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
  const GetSngleProject = async (id) => {
    const Response = await axios.get(`${URI}/project/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const DeleteProject = async (id) => {
    const Response = await axios.delete(`${URI}/project/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(true);
    if (Response?.data?.success == true) {
      toast.success(Response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(Response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    setReload(!reload);
    return Response.data;
  };

  const GetAllContact = async () => {
    const Response = await axios.get(`${URI}/contact`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setContactData(Response?.data);
    return Response.data;
  };

  const DeletContact = async (id) => {
    const Response = await axios.delete(`${URI}/contact/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setReload(true);
    if (Response?.data?.success == true) {
      toast.success(Response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(Response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        homeData,
        UpdateHome,
        AboutData,
        UpdateAbout,
        reload,
        aboutSkill,
        AddSkill,
        UpdateSkill,
        SingleSkill,
        DeletSkill,
        ServicesData,
        AddServices,
        GetSingleHomw,
        GetSingleAbout,
        GetSIngleServices,
        UpdateServices,
        DeletServices,
        UploadProject,
        projectData,
        UpdateProject,
        GetSngleProject,
        DeleteProject,
        contactData,
        DeletContact,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
