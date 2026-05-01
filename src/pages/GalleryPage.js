import IMG_0003 from "./Images/IMG-0003.JPG";
import IMG_0017 from "./Images/IMG-0017.JPG";
import IMG_0142 from "./Images/IMG-0142.JPG";
import IMG_0145 from "./Images/IMG-0145.JPG";
import IMG_0992 from "./Images/IMG-0992.JPG";
import IMG_1014 from "./Images/IMG-1014.JPG";
import IMG_1100 from "./Images/IMG-1100.JPG";
import IMG_1199 from "./Images/IMG-1199.JPG";
import IMG_1201 from "./Images/IMG-1201.JPG";
import IMG_2038 from "./Images/IMG-2038.JPG";
import IMG_2139 from "./Images/IMG-2139.JPG";
import IMG_2498 from "./Images/IMG-2498.JPG";

export const galleryImages = [
  { id: "Impala", name: "Impala", src: IMG_0003, alt: "Impala grazing in the grasslands", caption: "Graceful Impala in the wild" },
  { id: "Warthog", name: "Warthog", src: IMG_0017, alt: "Warthog in the wild", caption: "Playful Warthog in the savanna" },
  { id: "Elephant bull", name: "Elephant", src: IMG_0142, alt: "Elephant bull", caption: "Majestic Elephant family" },
  { id: "Swimming Elephants", name: "Swimming Elephants", src: IMG_0145, alt: "Swimming Elephants", caption: "Graceful Elephants in the water" },
  { id: "Chobe Elephant", name: "Chobe Elephant", src: IMG_0992, alt: "Chobe Elephant", caption: "Gentle Giants of Chobe" },
  { id: "Crossing the road", name: "crossing the road", src: IMG_1014, alt: "Chobe Elephant", caption: "Gentle Giants of Chobe" },
  { id: "Lion Feasting", name: "Lion Feasting", src: IMG_1100, alt: "Lion Feasting", caption: "Powerful Lion enjoying a meal" },
  { id: "baboon", name: "baboon", src: IMG_1199, alt: "baboon", caption: "Curious Baboon in the wild" },
  { id: "close up of a baboon", name: "close up of a baboon", src: IMG_1201, alt: "close up of a baboon", caption: "Intimate look at a Baboon" },
  { id: "lioness", name: "lioness", src: IMG_2038, alt: "lioness", caption: "Regal Lioness surveying her territory" },
  { id: "Cheetah", name: "Cheetah", src: IMG_2139, alt: "Cheetah", caption: "Swift Cheetah on the prowl" },
  { id: "Front facing elephant", name: "Front facing elephant", src: IMG_2498, alt: "Front facing elephant", caption: "Front facing elephant" },
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
