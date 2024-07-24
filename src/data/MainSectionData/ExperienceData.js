import { MdWork } from "react-icons/md";
import MainSection from "../../components/MainSection";

export const ExperienceData = {
  component: MainSection,
  data: {
    title: "EXPERIENCIA",
    icon: MdWork,
    list: [
      {
        position: "Desarrllador Web Front-end",
        enterprise: "NAIVE labs, Colima",
        time: "Jun 2024 - Temporal",
        description:
          "Desarrollo de aplicaciones web para manejo de datos de usuarios, clientes, materiales y citas.",
        tasks: [
          "Desarrollo de aplicaciones web progresivas y componentes reutilizables usando React.js.",
          "Consumo de APIs REST para alimentar aplicaciones.",
        ],
      },
      {
        position: "Monitorista de sistema de radio y televisión",
        enterprise: "Instituto Nacional Electoral, Colima",
        time: "Feb 2024 - Jun 2024",
        description:
          "Verificación y aplicación del material pautado de Radio y Televisión.",
        tasks: [
          "Depuración y verificación del sistema.",
          "Informe de incidencias relacionadas con el material del sistema.",
        ],
      },
      {
        position: "Desarrllador Web Front-end",
        enterprise: "Freelance, Colima",
        time: "2023",
        description:
          "Desarrollo de aplicaciones web para pequeñas empresas, para gestionar proveedores, clientes, materiales y fechas de entrega.",
        tasks: [
          "Desarrollo de aplicaciones web progresivas usando React.js.",
          "Desarrollo y diseño de la interfaz de usuario.",
        ],
      },
      {
        position: "Desarrollador Web Front-end",
        enterprise: "Tata Consultancy Services, Zapopan Jalisco",
        time: "Sep 2022 - Sep 2023",
        description:
          "Desarrollo, creación y modelado de componentes en React.js para aplicaciones relacionadas con servicios bancarios.",
        tasks: [
          "Desarrollo de componentes reutilizables para aplicaciones en React.",
          "Consumo de APIs REST para alimentar aplicaciones.",
        ],
      },
      {
        position: "Administrador de Sistemas",
        enterprise: "Tata Consultancy Services, Zapopan Jalisco",
        time: "Ene 2019 - Sep 2022",
        description:
          "Administración de sistemas operativos Unix en máquinas virtuales y físicas.",
        tasks: [
          "Configuración, monitoreo y mantenimiento de máquinas virtuales y físicas.",
          "Uso de aplicaciones web para monitorear alertas y gestionar información de servidores y usuarios.",
        ],
      },
    ],
  },
};
