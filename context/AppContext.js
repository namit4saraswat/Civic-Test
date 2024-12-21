"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const BASEURL = "https://whatsapp.datawork.in";

  const [issueData, setIssueData] = useState([]);
  const [data, setData] = useState([]);

  const updateUser = (user) => setState((prev) => ({ ...prev, user }));
  const toggleTheme = () =>
    setState((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));

  const fetchdata = async () => {
    const response = await fetch(`${BASEURL}/data`);
    const data = await response.json();
    const sortedData = data.data.reverse();
    setIssueData(sortedData);
    setData(sortedData);
  };

  const resetData = () => {
    setData(issueData);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <AppContext.Provider value={{ data, setData, resetData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
