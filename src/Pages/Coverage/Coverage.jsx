import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6850, 90.3563]; // Bangladesh coordinates
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  // console.log(serviceCenters);

  const handleSearch = e =>{
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 10,)
    }
  }

  return (
    <div>
      <h1 className="text-5xl font-bold my-5">
        We are available in 64 districts
      </h1>

      {/* search box */}
      <form onSubmit={handleSearch}>
        <label className="input rounded-3xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="location" className="grow" placeholder="Search" />
          <button type="submit" className=" rounded-3xl bg-primary px-5 py-[10px] -mr-3 ">Search</button>
        </label>
      </form>

      {/* map container */}
      <div className="h-[700px] mt-10 border-2 border-gray-300 rounded-xl my-10">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full"
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>. <br /> service area:{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
