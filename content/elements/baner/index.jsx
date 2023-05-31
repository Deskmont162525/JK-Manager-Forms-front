import Breadcrumb from "../../utils/MigaPan";

const Banner = ({title, position, url}) => {

  return (
    <div className="banner">
      <h2>FOET ! Pensando en su futuro ¡</h2>
      
      <Breadcrumb className="breadcrumb" title={title} position={position} url={url} />
    </div>
  );
};

export default Banner;
