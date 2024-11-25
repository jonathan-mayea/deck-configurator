import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const { material, setMaterial } = useCustomization();
  console.log("materials", material);
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Stain</div>
        <div className="configurator__section__values">
          <div className="item" onClick={() => setMaterial("stains")}>
            <div className="item__label">Natural</div>
          </div>
          <div className="item" onClick={() => setMaterial("teal")}>
            <div className="item__label">Teal</div>
          </div>
          <div className="item">
            <div className="item__label">Black</div>
          </div>
          <div className="item">
            <div className="item__label">Purple</div>
          </div>
          <div className="item">
            <div className="item__label">Blue</div>
          </div>
          <div className="item">
            <div className="item__label">Pink</div>
          </div>
          <div className="item">
            <div className="item__label">Green</div>
          </div>
          <div className="item">
            <div className="item__label">Red</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
