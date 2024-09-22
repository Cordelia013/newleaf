import React from "react";

interface Language {
  code: string;
  src: string;
  alt: string;
}

const languages: Language[] = [
  {
    code: "fr",
    src: "/assets/images/language/France-flat.svg",
    alt: "icon-france-flat",
  },
  {
    code: "en",
    src: "/assets/images/language/UK-flat.svg",
    alt: "icon-uk-flat",
  },
  {
    code: "jp",
    src: "/assets/images/language/Japan-flat.svg",
    alt: "icon-japan-flat",
  },
  {
    code: "de",
    src: "/assets/images/language/Germany-flat.svg",
    alt: "icon-germany-flat",
  },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(
    languages[0]
  ); // Langue par défaut

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Logique pour changer la langue de l'application
    console.log(`Langue sélectionnée: ${language.code}`);
  };

  return (
    <div className="relative right-64">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={selectedLanguage.src}
          alt={selectedLanguage.alt}
          width="30px"
          height="30px"
        />
      </div>
      {isOpen && (
        <div className="absolute mt-1 rounded shadow-lg z-10">
          {languages.map((language) => (
            <div
              key={language.code}
              className="flex items-center p-2 cursor-pointer"
              onClick={() => handleLanguageSelect(language)}
            >
              <img
                src={language.src}
                alt={language.alt}
                width="30px"
                height="30px"
                className="mr-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
