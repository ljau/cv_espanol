import { FaGraduationCap } from "react-icons/fa";
import MainSection from "../../components/MainSection";

export const EducationData = {
  component: MainSection,
  data: {
    title: "EDUCACION",
    icon: FaGraduationCap,
    list: [
      {
        position: "Desarrollador React Native",
        enterprise: "Bright Coders Academy (Magmalabs)",
        time: "2021",
        description: "Full course for React Native Developer.",
        tasks: [
          "Development of full-stack applications with React Native and firebase.",
          "Good practice writing JavaScript code (SOLID).",
          "Usage of tools like Git, GitHub, Code Climate, Slack",
        ],
      },
      {
        position: "Licenciatura",
        enterprise: "Universidad de Colima",
        time: "2015 - 2019",
        description:
          "Grado de Ingeniería en Telemática obtenido por desempeño académico excelente.",
        tasks: [
          "Publicación del artículo denominado “A Game-Based Service to Mitigate the Risk of Inundations Caused by Solid Waste Accumulation”",
          "Desarrollo de varios proyectos con diferentes tecnologías.",
          "Obtención de certificado técnico de diseño y desarrollo de juegos ubicuos.",
        ],
      },
    ],
  },
};
