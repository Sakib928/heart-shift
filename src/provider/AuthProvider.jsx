import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    const localTheme = localStorage.getItem("Theme");
    if (localTheme === "dark") {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").setAttribute("data-theme", localTheme);
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userMail = user?.email;
      const loggedUser = { email: userMail };
      if (user) {
        axios.post(`http://localhost:5000/jwt`, loggedUser, {
          withCredentials: true,
        });
        setUser(user);
        setLoading(false);
      } else {
        axios.post(`http://localhost:5000/logout`, loggedUser, {
          withCredentials: true,
        });
      }
    });
    return () => unsubscribe;
  }, [reload]);
  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    googleLogin,
    profileUpdate,
    reload,
    setReload,
    theme,
    setTheme,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
