import Home from "views/Home.jsx";
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Entries from "views/Entries.jsx";
import CreateEntry from  "views/CreateEntry.jsx"
import Icons from "views/examples/Icons.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/create-entry",
    name: "Create Entry",
    icon: " ni ni-fat-add text-red",
    component: CreateEntry,
    layout: "/admin"
  },
  {
    path: "/entries",
    name: "Entries",
    icon: "ni ni-bullet-list-67 text-red",
    component: Entries,
    layout: "/admin"
  },

  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/"
  }
];
export default routes;
