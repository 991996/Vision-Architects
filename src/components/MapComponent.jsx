import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  return (
    <Card className="w-full h-80 overflow-hidden rounded-none p-0">
      <CardContent className="p-0 h-full">
        <div className="h-full w-full">
          <MapContainer
            center={[25.2854, 51.531]} // Doha
            zoom={12}
            className="h-full w-full"
            whenReady={(map) => {
              setTimeout(() => {
                map.target.invalidateSize();
              }, 200);
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.2854, 51.531]}>
              <Popup>My Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
