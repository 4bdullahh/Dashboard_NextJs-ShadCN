"use client";
import React, { useState } from "react";
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
import { CommandDemo } from "./MyCommand";
import { Bell, BellIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MyHeader() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2016",
      read: false,
    },
    {
      text: "Heres another slighlty longer notification!",
      date: "05-10-2019",
      read: true,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative border p-3 rounded">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 bg-green-500 ${
                  notifications.find((x: any) => x.read === false)
                    ? "block"
                    : "hidden"
                }`}
              ></div>
              <BellIcon className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default MyHeader;
