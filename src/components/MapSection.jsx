import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapSection() {
  const hikeTrails = [
    {
      name: "גבעת חצבה",
      coordinates: [
        [30.811109, 35.234994],
        [30.813, 35.24],
        [30.818, 35.243],
        [30.82, 35.245],
        [30.821, 35.24],
      ],
      description:
        "גבעת חצבה היא מסלול טיול בשמורת טבע מכתשים עין יהב. המסלול מציע נופים מדהימים של המדבר.",
      difficulty: "בינונית",
      tips: "יש להביא מים, כובע והגנה מהשמש.",
    },
    {
      name: "מצומת הערבה ונאות הכיכר לחצבה",
      coordinates: [
        [30.803, 35.225],
        [30.809, 35.23],
        [30.815, 35.235],
        [30.825, 35.24],
        [30.83, 35.235],
      ],
      description:
        "מסלול המתאים למשפחות עם ילדים, עובר דרך נאות הכיכר וכולל עצירות מעניינות בדרך.",
      difficulty: "קל",
      tips: "יש להביא מים ונעליים נוחות להליכה.",
    },
    {
      name: "כיסא לוטן ומצפור שיזף",
      coordinates: [
        [30.8, 35.21],
        [30.805, 35.215],
        [30.81, 35.22],
        [30.815, 35.225],
        [30.82, 35.23],
      ],
      description:
        "מסלול זה מציע תצפיות מרגשות בערבה, כולל כיסא לוטן ומצפור שיזף.",
      difficulty: "קל",
      tips: "יש להביא מצלמה לתיעוד הנוף המדהים.",
    },
  ];
  const pointsOfInterest = [
    {
      name: "מכינת נופי פרת(שנה א) מכינת עין פרת המדרשה הגבוהה למנהיגות (שנה ב) כפר אדומים",
      coordinates: [31.819, 35.353],
    },
    {
      name: "מקום המגורים של משפחת אבוחצירה מושב חצבה",
      coordinates: [30.767363, 35.276665],
    },
    {
      name: "חאן מדהים בבעלות משפחת אבוחצירה חאן נחל ערבה",
      coordinates: [30.751719, 35.287084],
    },
    {
      name: "נחל גוב",
      coordinates: [30.767, 35.189],
    },
    {
      name: "נחל חצרה",
      coordinates: [30.767, 35.216],
    },
    {
      name: "נחל ערבה",
      coordinates: [30.735, 35.189],
    },
    {
      name: "גב ימין",
      coordinates: [30.732, 35.16],
    },
    {
      name: "מעלה עזאז",
      coordinates: [30.758, 35.132],
    },
    {
      name: "פנימיית נרדים",
      coordinates: [31.255176, 35.203065],
      description: "מקום עבודתה של ניר לאחר הצבא",
    },
    {
      name: "בית הקברות חצבה",
      coordinates: [30.766218, 35.265525],
    },
  ];

  return (
    <section id="map" className="section">
      <h2>מפת נקודות משמעותיות ומסלולי טיולל</h2>

      <MapContainer
        center={[30.797, 35.22]}
        zoom={10}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pointsOfInterest.map((point, index) => (
          <Marker key={index} position={point.coordinates}>
            <Popup>{point.name}</Popup>
          </Marker>
        ))}
        {hikeTrails.map((trail, index) => (
          <React.Fragment key={index}>
            <Polyline positions={trail.coordinates} color="blue">
              <Popup>
                <strong>{trail.name}</strong>
                <br />
                {trail.description}
                <br />
                <strong>רמת קושי:</strong> {trail.difficulty}
                <br />
                <strong>מה להביא:</strong> {trail.tips}
              </Popup>
            </Polyline>
          </React.Fragment>
        ))}
      </MapContainer>
    </section>
  );
}

export default MapSection;
