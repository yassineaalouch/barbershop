import React from 'react'
import Map from './Map.jsx'
import phone from './assets/reshot-icon-phone-YUPNL5R2TW.svg'
import email from './assets/email-icon.svg'
import pin from './assets/pin-icon.svg'
import './Schedule.css'

function Schedule({language}) {
    return (
        <section id="schedule-section">
            <div className="schedule-container">
                <div className="barber-schedule">
                    <h2 className="schedule-title">
                        {language === 'EN' ? "Contact Us" : "Contactez-nous"}
                    </h2>
                    <div className="schedules">
                        <div className="schedule-days">
                            <p>{language === 'EN' ? "Mon" : "Lun"}</p>
                            <p>{language === 'EN' ? "Tue" : "Mar"}</p>
                            <p>{language === 'EN' ? "Wed" : "Mer"}</p>
                            <p>{language === 'EN' ? "Thu" : "Jeu"}</p>
                            <p>{language === 'EN' ? "Fri" : "Ven"}</p>
                            <p>{language === 'EN' ? "Sat" : "Sam"}</p>
                            <p>{language === 'EN' ? "Sun" : "Dim"}</p>
                        </div>
                        <div className="schedule-hours">
                            <p>{language === 'EN' ? "CLOSED" : "FERMÉ"}</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:30am to 5:30pm</p>
                            <p>8:00am to 3:00pm</p>
                            <p>{language === 'EN' ? "CLOSED" : "FERMÉ"}</p>
                        </div>
                    </div>
                    <div className="phone-contact">
                        <img className="phone-icon" src={phone} alt="phone icon" /> 
                        <p>(+212) 642 733 682</p>
                    </div>
                    <div className="email-contact">
                        <img className="email-icon" src={email} alt="email icon" />
                        <p>yassine.aalouch@aiac.ma</p>
                    </div>
                    <div className="location-contact">
                        <img className="location-icon" src={pin} alt="pin icon" />
                        <p>Bourgondischelaan 36, 1181 DD Amstelveen</p>
                    </div>
                </div>
                <Map class="map"/>
            </div>
        </section>
    )
}

export default Schedule;
