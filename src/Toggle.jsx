import React, { useState } from 'react'

function Toggle({ language, setLanguage }) {
    const [languageOption, setLanguageOption] = useState(language === 'EN' ? 'FR' : 'EN');

    function toggleLanguage() {
        if (language === 'EN') {
            setLanguage('FR');
            setLanguageOption('EN');
        } else {
            setLanguage('EN');
            setLanguageOption('FR');
        }
    }

    return (
        <div className="language-toggler">
            <p className="languages transparent-btn">
                <span className="en-tag">{language}</span> / <span onClick={toggleLanguage} className="fr-tag">{languageOption}</span>
            </p>
        </div>
    )
}

export default Toggle;
