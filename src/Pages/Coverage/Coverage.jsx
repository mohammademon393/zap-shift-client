import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6850, 90.3563]; // Bangladesh coordinates
  const serviceCenters = useLoaderData();

  console.log(serviceCenters);
  

  return (
    <div>
      <h1 className="text-5xl font-bold my-5">
        We are available in 64 districts
      </h1>

      {/* map container */}
      <div className="h-[700px] mt-10 border-2 border-gray-300 rounded-xl my-10">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>. <br /> service area:{" "}
                {center.covered_area.join(', ')}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
