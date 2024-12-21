"use client";

import Issues from "@/components/dashboard/Issues";
import { CardDescription } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ticket Issue Tracking Dashboard</h1>
      <CardDescription>
        Monitor and analyze ticket issues across various parameters
      </CardDescription>
      <Issues />
    </div>
  );
}
