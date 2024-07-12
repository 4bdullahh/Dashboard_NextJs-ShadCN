"use client";
import React from "react";
// import UserItem from "./UserItem";
import UserItem from "useritem";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { text } from "stream/consumers";
import {
  Bell,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

function MySidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen border-r">
      <div>
        <UserItem
          name="John Doe"
          description="johndoe@mail.com"
          status={false}
          onClick={() => console.log("click")}
        />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) =>
                  option.text == "Profile" ? (
                    <CommandItem
                      key={optionKey}
                      className="gap-2 cursor-pointer"
                    >
                      <Link href="/" className="flex items-center gap-2">
                        {option.icon} {option.text}
                      </Link>
                    </CommandItem>
                  ) : (
                    <CommandItem
                      key={optionKey}
                      className="gap-2 cursor-pointer"
                    >
                      {option.icon} {option.text}
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span>Team Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default MySidebar;
