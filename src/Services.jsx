import React from 'react'
import PriceCard from './PriceCard'
import './Services.css'

function Services({language}) {
    return (
        <section id="services-section">
            <h1 className="services-title">{language === 'EN' ? "What we offer" : "Ce que nous proposons"}</h1>
            <div className="grid-container">
                <div className="services-container">
                    <PriceCard title={language === 'EN' ? "Men's Haircuts" : "Coupes pour hommes"} price="31.50€"/>
                    <PriceCard title={language === 'EN' ? "Women's Haircuts" : "Coupes pour femmes"} price="35€"/>
                    <PriceCard title={language === 'EN' ? "Students and Children" : "Coupes étudiants et enfants"} price="26€"/>
                    <PriceCard title={language === 'EN' ? "Beard Trimming" : "Taille de barbe"} price="19.5€"/>
                    <PriceCard title={language === 'EN' ? "Hair Colouring" : "Coloration cheveux"} price="18.5€"/>
                    <PriceCard title={language === 'EN' ? "Hair washing and Coffee" : "Shampoing et café"} price={language === 'EN' ? "Free" : "Gratuit"}/>
                </div>
            </div>
        </section>
    )
}

export default Services;
