"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";   
import L from "leaflet"; // I installed package @types/leaflet
import { useAppContext } from "@/context/AppContext";
import { ConvertTimestampToReadable } from "@/components/utils";

// Fix for marker icons not displaying
// delete L.Icon.Default.prototype._getIconUrl;
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const { data } = useAppContext();
  
  // const center = data.length
  const center: [number, number] = data.length
    ? [
        data.reduce((acc:number, issue:any) => acc + issue.latitude, 0) / data.length,
        data.reduce((acc:number, issue:any) => acc + issue.longitude, 0) / data.length,
      ]
    : [51.505, -0.09]; // Default to London if no data is available

  return (
    data.length > 0 && (
      <MapContainer
        center={center}
        zoom={6}
        style={{ height: "70vh", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((issue:any) => (
          <Marker key={issue.id} position={[issue.latitude, issue.longitude]}>
            <Popup>
              <div>
                <h2 className="text-lg mb-3 font-bold">
                  {issue.city}, {issue.state}{" "}
                  <span
                    className={`p-2 rounded-lg text-sm font-thin ${
                      issue.status == "open"
                        ? "bg-red-200 text-red-700"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {issue.status ? issue.status : "Closed"}
                  </span>
                </h2>
                <img
                  className="rounded-md shadow-xl"
                  src={issue.image_url}
                  alt={issue.type}
                  style={{ width: "300px", height: "200px" }}
                />
                <p className="text-gray-600">
                  {" "}
                  <span className="font-bold">Reported Issue:</span>{" "}
                  {issue.issue || "No description available."}
                </p>
                <p>{ConvertTimestampToReadable(issue.timestamp)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    )
  );
};

export default MapComponent;
