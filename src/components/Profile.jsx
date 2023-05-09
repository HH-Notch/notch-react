import profile from "../assets/images/profile_img.png";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Avatar
          variant="circular"
          className="cursor-pointer"
          src={profile}
          alt="avatar"
          size="lg"
          withBorder={true}
          color="gray"
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Inbox
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
