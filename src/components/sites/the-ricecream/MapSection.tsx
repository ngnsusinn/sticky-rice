"use client";

import React, { useEffect, useRef } from "react";

interface MapSectionProps {
  height?: string;
  className?: string;
}

export function MapSection({
  height = "h-[400px] sm:h-[500px] lg:h-[580px]",
  className = "",
}: MapSectionProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (typeof window === "undefined" || !mapContainerRef.current) return;
      if (mapInstanceRef.current) return;

      const L = await import("leaflet");

      if (!isMounted || !mapContainerRef.current) return;

      // Hà Nội Central Kitchen (Hoàn Kiếm, Hà Nội)
      const centerCoords: [number, number] = [21.0335, 105.8488];

      const map = L.map(mapContainerRef.current, {
        center: centerCoords,
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom Rice Cream Pint Icon
      const pintIcon = L.icon({
        iconUrl: "/sites/the-ricecream/images/PIDlUmCbn8AkmcZaLfb2exYFc.png",
        iconSize: [46, 50],
        iconAnchor: [23, 50],
        popupAnchor: [0, -50],
      });

      L.marker(centerCoords, { icon: pintIcon })
        .addTo(map)
        .bindPopup(
          `<b>XÔI NGŨ SẮC TÂY BẮC</b><br/>36 Hàng Điếu, Phường Cửa Đông<br/>Quận Hoàn Kiếm, Hà Nội<br/>Hotline: 0988 888 999`
        );

      mapInstanceRef.current = map;
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapInstanceRef.current as any).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full ${height} rounded-[32px] sm:rounded-[48px] overflow-hidden border border-[#160909]/10 shadow-md ${className}`}
    >
      <div ref={mapContainerRef} className="w-full h-full z-10" />
    </div>
  );
}
