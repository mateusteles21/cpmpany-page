import logo from "../../images/Logos_SMTM.png";
import icono1 from "../../images/Company Page_Icono 1.png";
import icono2 from "../../images/Company Page_Icono 2.png";
import icono3 from "../../images/Company Page_Icono 3.png";
import icono4 from "../../images/Company Page_Icono 4.png";
import icono5 from "../../images/Company Page_Icono 5.png";
import icono6 from "../../images/Company Page_Icono 6.png";
import icono7 from "../../images/Company Page_Icono 7.png";
import dollarColor from "../../images/Company Page_Icono 8.png";
import dollarNoColor from "../../images/Company Page_Icono 9.png";

import "./landing.css";

const CompanyPage = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light navbarCP">
        <div class="container-fluid">
          <img src={logo} width="15%" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbarUL">
              <li class="nav-item">
                <a class="nav-link text-white " aria-current="page" href="#">
                  Para Empresas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#">
                  SMTM Live
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row" >
        <div className="col-3">
          <div className="row rowBrand">
            <div className="col-4">
              <img
                src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg"
                className="rounded-circle mt-5 ms-5"
              />
            </div>
            <div className="col-6">
              <h1 className="ms-1 mt-5">Nome da marca</h1>
            </div>
          </div>
          <div className="row rowIconos1">
            <div className="col-4 iconos1">
              <img src={icono1} className="mt-5 ms-2 icono1" />
              <h5 className="ms-2 industria">Industria</h5>
              <h5 className="ms-2 retail">Retail</h5>
            </div>
            <div className="col-4 iconos1">
              <img src={icono2} className="mt-5  icono1" />
              <h5 className="ms-2 industria">Tamaño</h5>
              <h5 className="ms-2 retail">Grande</h5>
            </div>
            <div className="col-4 iconos1">
              <img src={icono3} className="mt-5  icono1" />
              <h5 className="ms-2 industria">Dotación</h5>
              <h5 className="ms-2  retail">1.001 - 10.000</h5>
            </div>
          </div>
          <div className="card mt-5 card1" style={{ borderRadius: "35px" }}>
            <div className="card-body">
              <h5>¿Como paga Nome da marca?</h5>
              <h5>Sobre la medida del mercado</h5>
            </div>
          </div>
          <div className="input-group mt-5 ms-5 inputEmpresa">
            <input
              type="text"
              className=""
              placeholder="Busca cómo paga otra empresa"
              style={{ backgroundColor: "white" }}
            />
          </div>
          <span className="fa fa-search spanSearch"></span>
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-3">
              <div
                className="card cardcol2 mt-5"
                style={{ borderRadius: "25px" }}
              >
                <img src={icono4} width="50%" className="ms-5" />
                <h5>Classificación General</h5>
                <p>Promedio del Salario Fijo, Variable y Beneficios</p>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card cardcol2 mt-5 card2"
                style={{ borderRadius: "25px" }}
              >
                <img src={icono5} width="50%" className="ms-5" />
                <h5>Sueldo Fijo</h5>
                <p>Sueldo pagado por la empresa</p>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card cardcol2 mt-5"
                style={{ borderRadius: "25px" }}
              >
                <img src={icono6} width="50%" className="ms-5" />
                <h5>Sueldo Variable</h5>
                <p>Bono anual pagado por la empresa</p>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card cardcol2 mt-5"
                style={{ borderRadius: "25px" }}
              >
                <img src={icono7} width="50%" className="ms-5" />
                <h5>Beneficios</h5>
                <p>Beneficios ortogados por la empresa</p>
              </div>
            </div>
          </div>
          <h3 className="textTitle">
            Con un tamaño promedio de 8.250 m², Hipermercados Jumbo oferece un
            variado surtido de productos que incluye alimentos, abarrotes...{" "}
            <span style={{ color: "orange" }}>Ver más</span>
          </h3>
          <h4 className="opinan">
            ¿Qué opinan los colaboradores de Supermercado Jumbo?
          </h4>
          <div className="row ">
            <div className="col-5">
              <div
                className="card cardsAvaliation p-4"
                style={{ borderRadius: "25px" }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <div className="row">
                  <div className="col-12">
                    <img src={dollarColor} width="10%" />
                    <img src={dollarColor} width="10%" />
                    <img src={dollarColor} width="10%" />
                    <img src={dollarColor} width="10%" />
                    <img src={dollarNoColor} width="10%" />
                  </div>
                </div>
              </div>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                width="4%"
                className="rounded-circle imgCircle"
              />
            </div>
            <div className="col-5">
              <div
                className="card cardsAvaliation p-4"
                style={{ borderRadius: "25px" }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <div className="row">
                  <div className="col-12">
                    <img src={dollarColor} width="10%" />
                    <img src={dollarColor} width="10%" />
                    <img src={dollarColor} width="10%" />
                    <img src={dollarNoColor} width="10%" />
                    <img src={dollarNoColor} width="10%" />
                  </div>
                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU"
                width="4%"
                className="rounded-circle imgCircle"
              />
            </div>
          </div>
          <button
            className="btn buttonEvalua"
            style={{ backgroundColor: "white", borderRadius: "50px" }}
          >
            Evalúa tu empresa{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>aqui</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default CompanyPage;
