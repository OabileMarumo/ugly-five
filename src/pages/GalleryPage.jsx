import { useState } from "react";
import { galleryImages } from "../data/galleryImages";

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
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "8px",
            padding: "12px",
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
                  width: "300px",
                  height: "500px",
                 // objectFit: "cover",
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
