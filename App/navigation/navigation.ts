import Contacts from "../screens/Contacts";
import GetStarted from "../screens/GetStarted";
import MyDashboard from "../screens/MyDashboard";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import SuccessSignIn from "../screens/SuccessSignIn";

const authNavigation = [
  {
    name: "GetStarted",
    component: GetStarted
  },
  {
    name: "SignIn",
    component: SignIn
  },
  {
    name: "SignUp",
    component: SignUp
  },
  {
    name: "SuccessSignIn",
    component: SuccessSignIn
  }
];

const appNavigation = [
  {
    name: "MyDashboard",
    component: MyDashboard,
    icon: "view-dashboard"
  },
  {
    name: "Contacts",
    component: Contacts,
    icon: "contacts"
  }
];

const allNavigation = [...authNavigation, ...appNavigation];

export { authNavigation, appNavigation, allNavigation };
