import React from "react";
import {
  DashboardIcon,
  HomeIcon,
  ProjectsIcon,
  ReportingIcon,
  SettingsIcon,
  SupportIcon,
  TasksIcon,
  UserIcon,
} from "../../../assets/icons/icons";
import MenuItem from "./MenuItem";

const MenuBody = () => {
  return (
    <>
      <MenuItem Icon={HomeIcon} title="Home" />
      <MenuItem
        Icon={DashboardIcon}
        title="Dashboard"
        extraComponent={
          <div className="w-fit bg-pageBg rounded-full px-4 py-1 text-xs text-greyText flex items-center space-x-1">
            10
          </div>
        }
      />
      <MenuItem Icon={ProjectsIcon} title="Projects" />
      <MenuItem Icon={TasksIcon} title="Tasks" />
      <MenuItem Icon={ReportingIcon} title="Reporting" />
      <MenuItem Icon={UserIcon} title="Users" />

      <div className="h-6"></div>
      <MenuItem Icon={SupportIcon} title="Support" />
      <MenuItem Icon={SettingsIcon} title="Settings" active />
    </>
  );
};

export default MenuBody;
