import './Home.css'
import { Link, useNavigate } from "react-router-dom";

export const Home = ({isLogged}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isLogged){
      navigate("/login");
    }
  }
  return (
    <>
    <div className="divTextoHome">
    <h1 className="titleHome">Bienvenido a nuestra App Deportiva</h1>
    <p className="textHomeWelcome">
    Descubre el apasionante mundo del fútbol, MotoGP y powerlifting en nuestra aplicación fácil de usar. 
    Regístrate en segundos y explora tres emocionantes secciones personalizadas según tus intereses.
    </p>
    <h1 className="titlePassion">Tu Pasión, Tu Experiencia:</h1>
    <p className="textHomePassion">
    Sumérgete en el fútbol, la velocidad de MotoGP y la potencia del powerlifting con solo unos clics. 
    Crea tu equipo ideal, sigue a tus jugadores, pilotos o levantadores de pesas favoritos.
    </p>
    <h1 className="titlePersonalize">Personaliza y Comparte:</h1>
    <p className="textHomePersonalize">
    Crea tu once inicial favorito, crea tu podium de MotoGP y crea tus marcas de powerlifting. 
    Interactúa con otros fans, da "likes" a tus favoritos y comparte tus logros. 
    Nuestra aplicación no solo sigue eventos, sino que también conecta comunidades apasionadas.

    nuestro espacio es perfecto para conectarte con personas que comparten tu entusiasmo.
    </p>
    <h1 className="titleEnterNow">Entra ahora: </h1>
    <p className="textHomeEnterNow">
    Vive la emoción con cada toque. Entra en nuestra app y sé parte de una comunidad donde la pasión se encuentra con la tecnología. 
    ¡Tu experiencia personalizada en fútbol, MotoGP y powerlifting te espera!
    </p>
    </div>
    <div className="picturesHome">
    <figure className="dataHome">
      <Link to={isLogged ? "/fifa" : "/login"} onClick={handleClick}>
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074902/ahorrar_tctk8v.png"/>
      </Link>
      <h3 className="titlePictureFifa">FIFA</h3>
    </figure>
    
    <figure className="dataHome">
      <Link to={isLogged ? "/motogp" : "/login"} onClick={handleClick}>
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074902/ahorrar_tctk8v.png"/>
      </Link>
      <h3 className="titlePictureMotoGP">MOTO GP</h3>
    </figure>

    <figure className="dataHome">
      <Link to={isLogged ? "/powerlifting" : "/login"} onClick={handleClick}>
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074902/ahorrar_tctk8v.png"/>
      </Link>
      <h3 className="titlePicturepOWERlIFTING">POWER LIFTING</h3>
    </figure>
    </div>
    </>
  )
}
