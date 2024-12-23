"use client";

import React from "react";
import { stateCityMap } from "./StateCityMap";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// const stateCityMap : Record<string, string[]> = {
//   "Uttar Pradesh": ["Greater Noida", "Varanasi"],
//   "Haryana": ["Gurgaon"],
// };
const Filters = ({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: any;
}) => {
  const handleStateChange = (state: string) => {
    setFilters({ ...filters, state, city: "" }); // It will reset city whenever I am changing state
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardDescription>
            Monitor and analyze ticket issues across various parameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="ticket-status"
                className="block mb-2 text-sm font-medium "
              >
                Ticket Status
              </label>
              <Select
                value={filters?.status || ""}
                onValueChange={(value) =>
                  setFilters({ ...filters, status: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="issue-type"
                className="block mb-2 text-sm font-medium "
              >
                Issue Type
              </label>
              <Select
                value={filters?.type || ""}
                onValueChange={(value) =>
                  setFilters({ ...filters, type: value })
                }
                
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="damaged_road">Damaged Road</SelectItem>
                  <SelectItem value="drainage_problem"> Drainage Problem</SelectItem>
                  <SelectItem value="potholes">Potholes</SelectItem>
                  <SelectItem value="manhole">Manhole</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium "
              >
                State
              </label>
              <Select
                value={filters?.state || ""}
                onValueChange={(value) =>
                  setFilters({...filters, state:value, city:""})
                  // handleStateChange(value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(stateCityMap).map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="city" className="block mb-2 text-sm font-medium ">
                City
              </label>
              <Select
                value={filters?.city || ""}
                onValueChange={(value) =>
                  setFilters({ ...filters, city: value })
                }
                disabled={!filters?.state} // I disabled the city dropdown just to avoid clicking city first
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                {filters.state &&
                    stateCityMap[filters.state]?.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="loksabha"
                className="block mb-2 text-sm font-medium "
              >
                Loksabha
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai-north">Mumbai North</SelectItem>
                  <SelectItem value="delhi-central">Delhi Central</SelectItem>
                  <SelectItem value="bangalore-south">
                    Bangalore South
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="vidhansabha"
                className="block mb-2 text-sm font-medium "
              >
                Vidhansabha
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai-central">Mumbai Central</SelectItem>
                  <SelectItem value="delhi-cantonment">
                    Delhi Cantonment
                  </SelectItem>
                  <SelectItem value="bangalore-rajajinagar">
                    Bangalore Rajajinagar
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="from-date"
                className="block mb-2 text-sm font-medium "
              >
                From
              </label>
              <input
                id="from-date"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="to-date"
                className="block mb-2 text-sm font-medium "
              >
                To
              </label>
              <input
                id="to-date"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setFilters({})}
          >
            Reset Filters
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Filters;
