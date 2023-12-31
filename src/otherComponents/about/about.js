import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb250JTIwZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb250JTIwZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww/",
  },
  {
    original: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D",
    thumbnail: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D/",
  },
  {
    original: "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D",
    thumbnail: "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    original: "https://media.istockphoto.com/id/1401307605/photo/rear-of-female-web-expert-typing-on-computer-looking-at-monitors-while-sitting-indoors.webp?b=1&s=170667a&w=0&k=20&c=ZH6pHvoSzdP0PvCr2PVfJY9YdhGIWFP8zLEweAG53tY=",
    thumbnail: "https://media.istockphoto.com/id/1401307605/photo/rear-of-female-web-expert-typing-on-computer-looking-at-monitors-while-sitting-indoors.webp?b=1&s=170667a&w=0&k=20&c=ZH6pHvoSzdP0PvCr2PVfJY9YdhGIWFP8zLEweAG53tY=",
  },
];
const About = () => {
  return (
    <div className="components col-12 about">
      <div className="col-12 title d-flex justify-content-center align-items-center flex-wrap">
        <h2 className="col-6">pegah jahani</h2>
        <p className="col-12"> i am a front-end developer</p>
      </div>
      <div className="gallery col-12 col-md-6 pt-3">
        <ImageGallery items={images} className="col-6" />
      </div>
     

      <div className="col-12  d-flex justify-content-center align-items-center text">
        <p>
          this is my react sample project.
          i used the following technologies :
          React / React Router / css / Json Server
        </p>
      </div>
      <div className="col-12  d-flex justify-content-center align-items-center text">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>
   
    </div>
  )
}
export default About