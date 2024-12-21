"use client";

import { Button } from "@/components/ui/button";
import { ImagePopup } from "@/components/ui/image-popup";
import { ConvertTimestampToReadable } from "@/components/utils";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

export type Issues = {
  image_url: string;
  type: string;
  issue: string;
  status: string;
  timestamp: number;
  city: string;
  state: string;
  user: string;
};

export const columns: ColumnDef<Issues>[] = [
  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({ row }) => {
      return (
        <ImagePopup
          src={row.original.image_url}
          alt="Example Image"
          width={100}
          height={100}
        />
      );
    },
  },
  {
    accessorKey: "type",
    header: "Issue Type",
  },
  {
    accessorKey: "issue",
    header: "Issue Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span
          className={`p-2 rounded-lg ${
            row.original.status == "open"
              ? "bg-red-200 text-red-700"
              : "bg-green-200 text-green-700"
          }`}
        >
          {row.original.status ? row.original.status : "Closed"}
        </span>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: "Date & Time",
    cell: ({ row }) => {
      return ConvertTimestampToReadable(row.original.timestamp);
    },
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "user",
    header: "Mobile No",
  },
  {
    id: "map",
    header: "View Map",
    cell: ({ row }) => {
      return (
        <Button>
          {" "}
          <Link href={"/dashboard/map"}>View Map</Link>{" "}
        </Button>
      );
    },
  },
];
