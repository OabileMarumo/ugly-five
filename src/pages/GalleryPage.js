import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "African elephants at sunset",
    caption: "Majestic elephants in Chobe",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Safari vehicle on adventure",
    caption: "Safari adventure begins",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2743165/pexels-photo-2743165.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Lions in the wild",
    caption: "Wildlife encounters",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Giraffe in natural habitat",
    caption: "Gentle giants of Africa",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "River safari scene",
    caption: "Chobe River cruise",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Buffalo herd",
    caption: "Cape buffalo sighting",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/792386/pexels-photo-792386.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Zebras grazing",
    caption: "Zebra crossing",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/1670740/pexels-photo-1670740.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Sunset safari",
    caption: "Golden hour safari",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Hippo in water",
    caption: "Hippo pool encounter",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/1670769/pexels-photo-1670769.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Cheetah resting",
    caption: "Spotted predator",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Safari landscape",
    caption: "Vast African plains",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/2842486/pexels-photo-2842486.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Bird watching safari",
    caption: "Exotic bird species",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const handleKeyDown = (e, image) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(image);
    }
  };

  const handleLightboxKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <>
      <section id="gallery" className="gallery-section">
        <h2>Travel Gallery</h2>
        <p className="gallery-intro">
          Explore moments captured during our safari adventures across Chobe
          National Park and beyond
        </p>

        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "10px",
            padding: "16px",
          }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
              onKeyDown={(e) => handleKeyDown(e, image)}
              tabIndex={0}
              role="button"
              aria-label={`View ${image.alt}`}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  padding: "6px 8px",
                  fontSize: "0.75rem",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0 }}>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="lightbox"
            onClick={closeLightbox}
            onKeyDown={handleLightboxKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close preview"
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                fontSize: "2rem",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "80vw", maxHeight: "80vh", textAlign: "center" }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{ maxWidth: "100%", maxHeight: "70vh", borderRadius: "8px" }}
              />
              <p style={{ color: "#fff", marginTop: "10px" }}>{selectedImage.caption}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}