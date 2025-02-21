import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const cardProperties = [
		{ title: "Paz", parrafo: "Estar consciente de las maravillas de la vida y sentirse plenamente conectados con el universo y con nosotros mismos.", imagen: "https://picsum.photos/500/325?random=1" },
		{ title: "Tranquilidad", parrafo: "Estar liberados de nuestras principales preocupaciones, miedos, estrés y sufrimiento, y conectados con el universo.", imagen: "https://picsum.photos/500/325?random=2" },
		{ title: "Alegria", parrafo: "Es tener un sentimiento positivo y manifestarlo con un buen estado de ánimo, satisfacción y tendencia a la risa o la sonrisa", imagen: "https://picsum.photos/500/325?random=3" },
		{ title: "Felicidad", parrafo: "Creer y tener esperanza, sentirse con ánimos y en una situación en la cual parece que las relaciones marchan de manera positiva.", imagen: "https://picsum.photos/500/325?random=4" }
	]
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{cardProperties.map((card, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={index}>
							<Card title={card.title} parrafo={card.parrafo} imagen={card.imagen} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;