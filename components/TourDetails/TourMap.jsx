const TourMap = ({ location }) => {
  // Destructure the coordinates from location prop
  const { latitude, longitude } = location.coordinates;

  // Generate Google Maps embed URL
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}N${longitude}W!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus`;

  return (
    <div className="relative w-full h-96 mt-5">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-3xl"
        src={ mapSrc }
        frameBorder="0"
        style={ { border: 0 } }
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default TourMap;