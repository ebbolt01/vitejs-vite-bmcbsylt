import { Project, ProjectCategory } from '../types/projects';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'obras-civiles',
    title: 'Obras Civiles',
    description: 'Modelos en 3D a partir de planos 2D de Autocad y georreferenciado a partir de archivo Civil 3D',
    projects: [
      {
        id: 'urbanizacion-antupiren',
        title: 'Urbanización Antupiren',
        description: 'Control de cubicaciones y estimación de recursos, elaboración de presupuesto y gastos generales.',
        imageUrl: 'https://images.unsplash.com/photo-1590986217679-f7858fb7af3a?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1590986217679-f7858fb7af3a?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80'
        ],
        a360Link: 'https://myhub.autodesk360.com/ue2ce4e3a/shares/public/SH78asdfQW936092f0e43e8934498efcf93da',
        services: ['Cubicaciones', 'Presupuestos'],
        details: {
          client: 'Constructora Antupiren',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'urbanizacion-penon',
        title: 'Urbanización el Peñón M6',
        description: 'Control de cubicaciones y elaboración de presupuestos detallados.',
        imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80'
        ],
        a360Link: 'https://myhub.autodesk360.com/ue2ce4e3a/shares/public/SH35dfcQT936092f0e43e7419a8b95ff6eb4',
        services: ['Cubicaciones', 'Presupuestos'],
        details: {
          client: 'Constructora El Peñón',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  },
  {
    id: 'proyectos-educativos',
    title: 'Proyectos Educativos',
    description: 'Desarrollo de proyectos educacionales con modelado BIM integral',
    projects: [
      {
        id: 'colegio-batuco',
        title: 'Colegio Batuco',
        description: 'Estudio completo del proyecto utilizando herramientas BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
        ],
        a360Link: 'default',
        services: ['Estudios de Proyecto'],
        details: {
          client: 'MINEDUC',
          date: '2023',
          location: 'Batuco, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'jardin-angel-guarda',
        title: 'Jardín Infantil Angel de la Guarda',
        description: 'Modelado estructural y estudio completo con tecnología BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1503507739318-8a859c715311?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1503507739318-8a859c715311?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
        ],
        a360Link: 'default',
        services: ['Estudios de Proyecto', 'Modelo 3D'],
        details: {
          client: 'JUNJI',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'ampliacion-trewhellas',
        title: 'Ampliación Colegio Trewhellas',
        description: 'Modelado de estructura metálica y coordinación BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
        ],
        a360Link: 'default',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Colegio Trewhellas',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  },
  {
    id: 'proyectos-comerciales',
    title: 'Proyectos Comerciales',
    description: 'Desarrollo de proyectos comerciales y retail con modelado BIM',
    projects: [
      {
        id: 'clinica-veterinaria',
        title: 'Clínica Veterinaria Universidad Santo Tomás',
        description: 'Estudio completo y modelado estructural utilizando tecnología BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80'
        ],
        a360Link: 'default',
        services: ['Estudios de Proyecto', 'Modelo 3D'],
        details: {
          client: 'Universidad Santo Tomás',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  },
  {
    id: 'infraestructura',
    title: 'Infraestructura',
    description: 'Proyectos de infraestructura y servicios',
    projects: [
      {
        id: 'electroterminales',
        title: 'Proyectos de Electroterminales',
        description: 'Estudios de presupuestos y planificación detallada.',
        imageUrl: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80'
        ],
        a360Link: 'default',
        services: ['Presupuestos'],
        details: {
          client: 'RED Metropolitana',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'estaciones-servicio',
        title: 'Estaciones de Servicio',
        description: 'Modelado BIM completo de arquitectura e instalaciones.',
        imageUrl: 'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80',
        images: [
          'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80'
        ],
        a360Link: 'default',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Varios',
          date: '2023',
          location: 'Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  }
];
