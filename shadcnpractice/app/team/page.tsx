"use client";
import UserItem from "useritem";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import { Input } from "@/components/ui/input";

type Member = {
  email: string;
  full_name: string;
  backgroundColor: string;
  role: string;
};

function TeamSettings() {
  const members = [
    {
      email: "MrBlack@americas.com",
      full_name: "Bishop Black",
      backgroundColor: "#29393E",
      role: "Admin",
    },
    {
      email: "JaneDoe@example.com",
      full_name: "Jane Doe",
      backgroundColor: "#54447B",
      role: "User",
    },
    {
      email: "JohnSmith@example.com",
      full_name: "John Smith",
      backgroundColor: "#58104C",
      role: "User",
    },
    {
      email: "EmilyJones@example.com",
      full_name: "Emily Jones",
      backgroundColor: "#3357FF",
      role: "User",
    },
    {
      email: "MichaelBrown@example.com",
      full_name: "Michael Brown",
      backgroundColor: "#FF33A1",
      role: "User",
    },
    {
      email: "SarahMiller@example.com",
      full_name: "Sarah Miller",
      backgroundColor: "#A133FF",
      role: "User",
    },
    {
      email: "DavidWilson@example.com",
      full_name: "David Wilson",
      backgroundColor: "#366B50",
      role: "User",
    },
    {
      email: "LauraTaylor@example.com",
      full_name: "Laura Taylor",
      backgroundColor: "#FFA133",
      role: "User",
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(members);

  useEffect(() => {
    setFilteredMembers(
      members.filter(
        (member) =>
          member.full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          member.email.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, members]);

  return (
    <div className="grid gap-4">
      <header>
        <h2 className="text-[36px] font-[700]">Team Settings</h2>
      </header>
      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-2">
          <Command className="rounded-lg border">
            <Input
              className="border-none"
              type="text"
              placeholder="Search for member..."
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
          </Command>
          <Button variant={"secondary"}>Add a new member</Button>
        </div>
        <div className="border rounded">
          {filteredMembers.map((member: Member, key: number) => (
            <div
              key={key}
              className="border-b last:border-b-0 flex items-center justify-between pr-3"
            >
              <UserItem
                name={member.full_name}
                description={member.email}
                backgroundColor={member.backgroundColor}
                border={false}
                status={false}
              />
              <Button variant={"ghost"}>Remove</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSettings;
