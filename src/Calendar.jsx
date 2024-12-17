import React, { useEffect } from 'react';
import pic from './assets/background-img1.jpg'
import './Calendar.css'

const Calendar = ({language}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendar">
      <h1 className="calendar-title">{language === 'EN' ? "Schedule your booking" : "Plan uw afspraak"}</h1>
      <div className="calendar-container">
        <img className="barbershop-img" src={pic} alt="image of barbershop" />
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/rohandemerde/haircut?hide_event_type_details=1&hide_gdpr_banner=1&background_color=9a7b5f&text_color=ffffff&primary_color=ffffff"
          style={{ minWidth: '320px' }}
        ></div>
      </div>
    </section>
  );
}

export default Calendar;
