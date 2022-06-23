import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { useMap, Marker, Popup, MapContainer, TileLayer } from 'react-leaflet'


function App() {
  return (
    <div className="App">
      <MapContainer center={[43.705944, -80.3779366]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[43.705944, -80.3779366]}>
    <Popup>
      Home Base
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default App;
