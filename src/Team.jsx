import React from 'react';
import Barber from './Barber';
import Review from './Review';
import barber1 from './assets/barber1.jpg';
import barber2 from './assets/barber2.jpg';
import barber3 from './assets/barber3.jpg';
import pfp1 from './assets/review1-pfp.png';
import pfp2 from './assets/review2-pfp.png';
import pfp3 from './assets/review3-pfp.png';
import pfp4 from './assets/review4-pfp.png';
import pfp5 from './assets/review5-pfp.png';
import pfp6 from './assets/review6-pfp.png';
import './Team.css';

function Team({language}) {
    return (
        <section id="team-section">
            <h1 className="team-title">{language === 'FR' ? "Nos Coiffeurs" : "Our Barbers"}</h1>
            <hr />
            <div className="team-cards">
                <Barber 
                    class="card" 
                    img={barber1} 
                    name="Tjeu" 
                    description={language === 'FR' ? "Expert en coupes classiques et modernes." : "Expert in classic and modern cuts."} 
                />
                <Barber 
                    class="card img2" 
                    img={barber2} 
                    name="Patricia" 
                    description={language === 'FR' ? "Expert en coupes classiques et modernes." : "Expert in classic and modern cuts."} 
                />
                <Barber 
                    class="card" 
                    img={barber3} 
                    name="Faishol" 
                    description={language === 'FR' ? "Expert en coupes classiques et modernes." : "Expert in classic and modern cuts."} 
                />
            </div>
            <div className="reviews">
                <div className="review-caroussel">
                    <Review 
                        class="review-card" 
                        profilePic={pfp1} 
                        name="Oliver Kassam" 
                        description={language === 'FR' ? 
                            "Le meilleur coiffeur de la région d'Amstelveen. Je viens ici depuis 5 ans. Merci à Tjeu et Patricia de s'occuper de moi et de ma famille." : 
                            "Best barber by far in Amstelveen area. Been going here for past 5 years. Thank you to Tjeu and Patricia for looking after me and my family."
                        } 
                    />
                    <Review 
                        class="review-card" 
                        profilePic={pfp2} 
                        name="Melody Rae" 
                        description={language === 'FR' ? 
                            "Ils offrent un excellent service client et sont inclusifs pour des personnes comme mon fils qui est autiste et rencontre des difficultés avec des choses comme les coupes de cheveux !" : 
                            "They offer excellent customer service and inclusive for people like my son who have autism and struggles with things like haircuts!"
                        } 
                    />
                    <Review 
                        class="review-card" 
                        profilePic={pfp3} 
                        name="C Sip" 
                        description={language === 'FR' ? 
                            "Endroit génial ! J'y suis allé il y a 2 mois et j'ai beaucoup aimé. Ils ont fait un excellent travail et étaient très professionnels." : 
                            "Great place! I went 2 months ago and I really liked it, they did a great job and were very professionals."
                        } 
                    />
                    <Review 
                        class="review-card" 
                        profilePic={pfp4} 
                        name="Andrii Prokopets" 
                        description={language === 'FR' ? 
                            "Salon de coiffure familial sympa. J'ai aimé ma nouvelle coupe de cheveux. Le coiffeur parle anglais et est très professionnel." : 
                            "Nice family barbershop. I liked my new haircut. Hairdresser speaks English and very professional."
                        } 
                    />
                    <Review 
                        class="review-card" 
                        profilePic={pfp5} 
                        name="Tobias Russel" 
                        description={language === 'FR' ? 
                            "Très agréable, je viens ici depuis toujours. Les coupes sont bonnes, rien d'extravagant, juste bonnes et comme souhaité." : 
                            "Very nice, I've been coming here all my life. The haircuts are good, nothing crazy, just good and as desired."
                        } 
                    />
                    <Review 
                        class="review-card" 
                        profilePic={pfp6} 
                        name="Paul Rueckert" 
                        description={language === 'FR' ? 
                            "Super coupe de cheveux par Faisholl ! Des gens très sympas dans ce super salon de quartier ! Ils travaillent sur rendez-vous et sont ponctuels." : 
                            "Great haircut by Faisholl! What nice people at this great neighborhood hairdresser! They work by appointment and on time."
                        } 
                    />
                </div>
            </div>
        </section>
    );
}

export default Team;
