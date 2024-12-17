import "./About.css";
import Button from "./Button";
import Navbar from './Navbar.jsx';

function About({language, setLanguage}) {
  return (
    <section id="about-section">
      <div className="background-img"></div>
      <Navbar language={language} setLanguage={setLanguage}/>
      <div className="about-card">
        <h1 className="about-title">Barbershop Just For Men</h1>
        <p className="about-description">
          {language === 'EN' 
            ? "Amstelveen's go-to for expert grooming. With over 40 years of combined experience, our team ensures precision cuts and personalized service." 
            : "Le salon de référence à Amstelveen pour des soins experts. Avec plus de 40 ans d'expérience combinée, notre équipe garantit des coupes précises et un service personnalisé."}
        </p>
        <Button 
          link="#calendar" 
          class="btn-about large-btn" 
          text={language === 'EN' ? "Book Now" : "Réservez maintenant"}
        />
        <Button 
          link="#services-section" 
          class="btn-about secondary-btn" 
          text={language === 'EN' ? "Prices" : "Tarifs"} 
        />
      </div>
    </section>
  );
}

export default About;
