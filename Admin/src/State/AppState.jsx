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

  // const URI = "https://mern-stack-portfolio-website.vercel.app/api";
  const GetAllHomeData = async () => {
    const Response = await axios.get("/api/home", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setHomeData(Response?.data?.home[0]);
    return Response.data;
  };

  const GetSingleHomw = async (id) => {
    const Response = await axios.get("/api/home/single/${id}", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setSingleData(Response?.data);
    return Response.data;
  };

  const UpdateHome = async (formData, id) => {
    const Response = await axios.put("/api/home/update-home/${id}", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setReload(true);
    return Response.data;
  };

  const GetAboutPage = async () => {
    const Response = await axios.get("/api/about", {
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
      "/api/about/update-about/${id}",
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
    const Response = await axios.get("/api/about/${id}", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const GetAllSkill = async () => {
    const Response = await axios.get("/api/skill", {
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
      "/api/skill/creat-skills",
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
      "/api/skill/update-skill/${id}",
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
    const Response = await axios.get("/api/skill/${id}", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const DeletSkill = async (id) => {
    const Response = await axios.delete("/api/skill/${id}", {
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
    const Response = await axios.get("/api/services", {
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
      "/api/services/creat-services",
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
    const Response = await axios.get("/api/services/${id}", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const UpdateServices = async (formData, id) => {
    const Response = await axios.put(
      "/api/services/creat-update/${id}",
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
    const Response = await axios.delete("/api/services/${id}", {
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
    const Response = await axios.post("/api/project/creat-project", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    setReload(true);
    return Response.data;
  };

  const UpdateProject = async (formData, id) => {
    const Response = await axios.put("/api/project/${id}", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    setReload(true);
    return Response.data;
  };

  const GetAllproject = async () => {
    const Response = await axios.get("/api/project", {
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
    const Response = await axios.get("/api/project/${id}", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return Response.data;
  };

  const DeleteProject = async (id) => {
    const Response = await axios.delete("/api/project/${id}", {
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
    const Response = await axios.get("/api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    setContactData(Response?.data);
    return Response.data;
  };

  const DeletContact = async (id) => {
    const Response = await axios.delete("/api/contact/${id}", {
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
