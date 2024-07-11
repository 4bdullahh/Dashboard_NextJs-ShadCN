import MyGeneralCard from "@/components/Cards/MyGeneralCard";
import { TableDemo } from "@/components/Cards/MyTable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTableDemo } from "@/components/Cards/MyDataTable";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid lg:grid-cols-2 gap-[32px]">
        <MyGeneralCard />
        <div className="grid gap-[32px] min-h-96">
          <Card />
          <Card />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px]">
        <Card className="max-h-[500px] p-2 overflow-auto">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Orders made</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <TableDemo />
          </CardContent>
        </Card>

        <Card className="max-h-[500px] p-2 overflow-auto">
          <CardHeader>
            <CardTitle>Sales</CardTitle>
            <CardDescription>Confrimed Sales made</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <TableDemo />
          </CardContent>
        </Card>

        <Card className="max-h-[500px] p-2 overflow-auto">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Users and their respective expenditure
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableDemo />
          </div>
        </Card>
      </div>
    </div>
  );
}
