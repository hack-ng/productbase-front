import Home from "views/Home.jsx";
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/Register.jsx";
import Login from "views/Login.jsx";
import Entries from "views/Entries.jsx";
import CreateEntry from  "views/CreateEntry.jsx"
import ManageKeys from "views/ManageKeys.jsx";
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
    icon: " ni ni-fat-add text-primary",
    component: CreateEntry,
    layout: "/admin"
  },
  {
    path: "/entries",
    name: "Entries",
    icon: "ni ni-bullet-list-67 text-primary",
    component: Entries,
    layout: "/admin"
  },
  {
    path: "/manage-keys",
    name: "Manage API Keys",
    icon: "ni ni-key-25 text-primary",
    component: ManageKeys,
    layout: "/admin"
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-primary",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
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
