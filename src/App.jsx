import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "https://i.imgur.com/HNNAslL.jpg",
      thumbnail: "https://i.imgur.com/HNNAslL.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/vc9Q4Hv.jpg",
      thumbnail: "https://i.imgur.com/vc9Q4Hv.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/AcN1rRy.jpg",
      thumbnail: "https://i.imgur.com/AcN1rRy.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/IgW2bZF.jpg",
      thumbnail: "https://i.imgur.com/IgW2bZF.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/loTSIXT.jpg",
      thumbnail: "https://i.imgur.com/loTSIXT.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/3PDKK6U.jpg",
      thumbnail: "https://i.imgur.com/3PDKK6U.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/OX1tD7L.jpg",
      thumbnail: "https://i.imgur.com/OX1tD7L.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/rhcu3SL.jpg",
      thumbnail: "https://i.imgur.com/rhcu3SL.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/jvpr4SK.jpg",
      thumbnail: "https://i.imgur.com/jvpr4SK.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/QjYCl2S.jpg",
      thumbnail: "https://i.imgur.com/QjYCl2S.jpg/100/150/",
    },
    {
      original: "https://i.imgur.com/jiQn83r.jpg",
      thumbnail: "https://i.imgur.com/jiQn83r.jpg/100/150/",
    },
  ];

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <ImageGallery
        items={images}
        showBullets
        showThumbnails={true}
        thumbnailPosition="right"
      />
    </div>
  );
}

export default App;
