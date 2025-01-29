import "./App.css";
import React, { Component } from "react";
import Header from "./component/header";
import logo from "./asset/logo.png";
import costard from "./asset/costard.png";
import Image from "./component/image";
import virus from "./asset/virus.png";
import TextImageSection from "./component/texteimagesection";
import cybersécurité from "./asset/cybersécurité.png";
import hacker from "./asset/hacker.png";
import Footer from "./component/footer";
import Imagebtn from "./component/imagebtn";

function App() {
  const lien = [
    {
      href: "#accueil",
      className: "nav-link",
      onClick: "accueil",
      label: "ACCUEIL",
    },
    { href: "#osint", className: "nav-link", onClick: "osint", label: "OSINT" },
    {
      href: "#dangers",
      className: "nav-link",
      onClick: "dangers",
      label: "DANGERS",
    },
  ];

  return (
    <div>
      <Header logo={logo} lien={lien} buttonLabel="CYBER" />
      <main>
        <Image src={costard} alt="photo background homme en costard" />
        <section id="accueil">
          <div></div>
        </section>
        <section id="osint">
          <TextImageSection
            classnamediv="text-image-section"
            textcontent="text-content"
            sectiontitle="section-title"
            sectionbutton="section-button"
            sectiontext="section-text"
            imagecontent="image-content"
            sectionimage="section-image"
            titreh2="Qu est ce que l OSINT ?"
            textebtn="Ressources"
            paragraphe="L’OSINT (Open Source Intelligence) est une arme redoutable capable de retracer toute votre vie à partir de simples informations accessibles publiquement. Imaginez qu’en quelques clics, un individu malveillant puisse reconstituer vos déplacements, vos habitudes, vos relations, vos centres d’intérêt, ou même des détails personnels que vous pensiez anodins. Les réseaux sociaux, les articles de presse, les forums, les bases de données publiques ou encore les registres en ligne deviennent autant de pièces d’un puzzle qui, une fois assemblées, révèlent des aspects intimes de votre existence. Ce qui semble inoffensif – une photo partagée, un commentaire ou un profil négligé – peut se transformer en une mine d’or pour quelqu’un cherchant à vous manipuler, vous escroquer ou vous nuire. L’OSINT, bien que légale, montre à quel point l’exposition numérique peut être dangereuse si l’on ne prend pas les mesures nécessaires pour protéger ses données personnelles. Face à ce risque invisible mais omniprésent, la vigilance est votre première ligne de défense."
            image={virus}
            altimage="virus"
          />
        </section>
        <section id="dangers">
          <TextImageSection
            classnamediv="text-image-section2"
            textcontent="text-content2"
            sectiontitle="section-title2"
            sectionbutton="section-button2"
            sectiontext="section-text2"
            imagecontent="image-content2"
            sectionimage="section-image2"
            titreh2="Comment limiter les risques ?"
            textebtn="Découvrez notre formation"
            paragraphe="Pour éviter les risques liés à l'OSINT, il est essentiel d’adopter des pratiques de cybersécurité rigoureuses et de limiter votre empreinte numérique. Commencez par vérifier les paramètres de confidentialité de vos réseaux sociaux : assurez-vous que vos publications ne sont visibles que par vos proches, et évitez de partager des informations sensibles, comme votre adresse, votre numéro de téléphone ou votre localisation en temps réel. Supprimez les comptes inutilisés et soyez attentif aux données que vous laissez en ligne, même dans des forums ou des plateformes que vous jugez peu importantes. Utilisez des mots de passe forts et différents pour chaque service, et activez la double authentification dès que possible. Enfin, effectuez régulièrement des recherches sur votre nom ou vos pseudonymes pour identifier les informations publiques qui vous concernent, et demandez leur suppression si elles vous exposent. La clé est d’être proactif et conscient que chaque détail partagé peut potentiellement être utilisé contre vous."
            image={cybersécurité}
            altimage="password"
          />
        </section>
        <TextImageSection
          classnamediv="text-image-section3"
          textcontent="text-content3"
          sectiontitle="section-title3"
          sectionbutton="section-button3"
          sectiontext="section-text3"
          imagecontent="image-content3"
          sectionimage="section-image3"
          titreh2="La faille humaine exploitée via l OSINT : le cas Target"
          textebtn="Devenir un pro de l OSINT"
          paragraphe="Un exemple marquant d’attaque informatique exploitant massivement l’OSINT est l’attaque contre l’entreprise Target en 2013, qui a compromis les données de quarante 50 de cartes de paiement et les informations personnelles de 70 millions de clients. Les attaquants ont commencé par utiliser des techniques d’OSINT pour recueillir des informations sur les sous-traitants et partenaires de Target, notamment une petite entreprise chargée de la maintenance des systèmes de climatisation.

En fouillant dans des bases de données publiques, des réseaux sociaux professionnels comme LinkedIn, et des forums techniques, les cybercriminels ont obtenu des détails cruciaux sur cette entreprise, y compris les noms des employés, leurs adresses e-mail, et leurs accès techniques. Grâce à ces informations, ils ont ciblé l'un des employés avec une attaque de phishing, ce qui leur a permis d'accéder aux identifiants nécessaires pour entrer dans le réseau de Target via la connexion de l’entreprise sous-traitante.

Une fois à l’intérieur, les attaquants ont exploité des failles dans le système de sécurité interne pour déployer un malware sur les caisses enregistreuses de Target. Cette attaque démontre à quel point l’OSINT peut être utilisé non seulement pour identifier des cibles directes, mais aussi pour exploiter les faiblesses des partenaires ou collaborateurs d’une organisation. Elle illustre également l'importance de la vigilance, non seulement en interne, mais aussi vis-à-vis des tiers ayant accès aux systèmes critiques."
          image={hacker}
          altimage="hacker"
        />
      </main>
      <Footer
        classNameFooter="footer"
        classNameContent="footer-content"
        classNameLinks="footer-links"
        classNameLink="footer-link"
        links={[
          { href: "#", text: "Mentions Légales" },
          { href: "#", text: "Politique de Confidentialité" },
        ]}
        copyright="© 2025 - Tous droits réservés"
      />
    </div>
  );
}

export default App;
