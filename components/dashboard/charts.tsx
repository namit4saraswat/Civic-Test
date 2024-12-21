"use client";

import { Line, Bar, Pie } from "recharts";
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  BarChart as RechartsBarChart,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts"; // Importing Pie

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="hsl(var(--primary))" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}

export function PieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart data={data}>
        <Tooltip />
        <Pie
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="hsl(var(--primary))"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`hsl(var(--primary))`} />
          ))}
        </Pie>
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
