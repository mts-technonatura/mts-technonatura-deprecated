import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ClearIcon from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const Navbar: FC = () => {
  const [drawer, setDrawer] = useState<boolean>(true);
  const classes = useStyles();

  const Router = useRouter();
  useEffect(() => {
    console.log(Router);
  }, []);

  function toggleDrawer() {
    // if (
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }

    setDrawer(!drawer);

    // return;
  }

  function bruhh() {
    console.log("hey");
  }

  const DrawerList = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false
      })}
      role="presentation"
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <section>
        <nav className="relative py-6 bg-white">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a className="text-3xl font-bold leading-none" href="#">
              <img
                className="h-12"
                src="/favicon.ico"
                alt="MTs TechnoNatura Logo"
                width="auto"
              />
            </a>
            <div className="lg:hidden">
              <button
                onClick={toggleDrawer}
                className="navbar-burger flex items-center text-green-600 p-3"
              >
                <MenuIcon />

                <title>MTs TechnoNatura menu</title>
              </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li>
                <a
                  className="text-sm text-green-600 font-bold hover:text-gray-500"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a className="text-sm text-gray-400 " href="#">
                  Projects
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Shop
                </a>
              </li>
            </ul>
            <a
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
              href="#"
            >
              Sign In
            </a>
            <a
              className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
              href="#"
            >
              Sign up
            </a>
          </div>
        </nav>
      </section>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
        <DrawerList />
      </Drawer>
    </>
  );
};

export default Navbar;
