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
const About = ()=>{
    return(
        <div className="components col-12 about">
            <div className="col-12 title d-flex justify-content-center align-items-center">
                <h2 className="col-6">pegah jahani</h2>
            </div>
            <div className="col-12  d-flex justify-content-center align-items-center">
                <h3 className="col-6">front-end developer</h3>
            </div>
            <div className="col-12  d-flex justify-content-center align-items-center text">
                <p>
                    this is my react sample project.
                    i used the following technologies :
                    React / React Router / css / Json Server
                </p>
            </div>
          
           <div className="gallery col-12 col-md-6">
           <ImageGallery items={images} className="col-6" />
           </div>
        </div>
    )
}
export default About