//ICONOS
import { SiMongodb, SiBootstrap ,SiJavascript  } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { RiNextjsFill } from "react-icons/ri";




function Footer() {
  return (
<>
{/* CAJA DE INFO FOOTER */}
<footer className="text-muted text-center my-4 mt-5">
  <div className="d-flex flex-column">
    <div>
      <h5 className="text-light">Desarrollado por Nacho <span className="text-orange">Dev</span></h5>
    </div>
    
    <div className="d-flex justify-content-center gap-3 my-2">
      <div>
        <RiNextjsFill  className="text-cyan" />
      </div>
      <div>
        <TiPlus className="text-light"/>
      </div>
      <div>
        <SiJavascript   className="text-warning" />
      </div>
      <div>
        <TiPlus className="text-light"/>
      </div>
      <div>
        <SiBootstrap  className="text-purple" />
      </div>
      <div>
        <TiPlus className="text-light"/>
      </div>
      <div>
        <SiMongodb className="text-success" />
      </div>
      <div>
        <TiPlus className="text-light"/>
      </div>
      <div>
        <FaReact className="text-primary" />
      </div>
    </div>
    <div>
      <h6 className="text-light">Santa Fe - Argentina - 2024</h6>
    </div>
  </div>
</footer>

</>
  )
}

export default Footer
