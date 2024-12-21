"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/dashboard/charts";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";
// import { PieChart } from 'recharts';

export default function AnalyticsGraph() {
  const [issue, setIssue] = useState({ openIssue: 0, totalIssue: 0 });

  const { data } = useAppContext();

  useEffect(() => {
    let open = 0;
    data.forEach((issue: any) => {
      if (issue?.status == "open") {
        open += 1;
      }
    });
    setIssue({ totalIssue: data.length, openIssue: open });
  }, [data]);

  return (
    <div className="space-y-6">
      <div className="flex gap-6 md:grid-cols-2">
        <div className="flex-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Open Issue</CardTitle>
              <CardTitle> {issue.openIssue}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Issue Reported</CardTitle>
              <CardTitle> {issue.totalIssue}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Issue by type</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Issues Reported</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <PieChart/> */}
            <BarChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
