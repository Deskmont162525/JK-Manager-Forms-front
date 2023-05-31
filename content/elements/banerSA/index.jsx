import Breadcrumb from "../../utils/MigaPan";

const BannerSA = ({title, position, url}) => {

  return (
    <div className="banner">
      <h2>Soy el Mejor JK&ATecnology ¡</h2>
      
      <Breadcrumb className="breadcrumb" title={title} position={position} url={url} />
    </div>
  );
};

export default BannerSA;
