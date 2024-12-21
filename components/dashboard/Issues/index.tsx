/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import Filters from "../filters";
import AnalyticsGraph from "../graph";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const BASEURL = "https://whatsapp.datawork.in";

export default function Issues() {
  const [data, setData] = useState([]);
  const { toast } = useToast();
  const [filters, setFilters] = useState<Record<string, string | number>>({});
  console.log(filters);
  useEffect(() => {
    const fetchData = async () => {
      const filtersList = new URLSearchParams(
        Object.entries(filters).reduce<Record<string, string>>(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value.toString(),
          }),
          {}
        )
      ).toString();
      const response = await fetch(`${BASEURL}/data?${filtersList}`);
      const data = await response.json();
      const sortedData = data.data.reverse();
      setData(sortedData);
      try {
      } catch (error) {
        toast({
          title: "Error",
          description: "Unable to fetch data",
        });
      }
    };
    fetchData();
  }, [filters]);

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      <AnalyticsGraph />
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Recent Reported Issue</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
