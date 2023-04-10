import { IGRDs } from '../interfaces/grd'

const GRDs: IGRDs[] = [
  {
    id: 1,
    name: 'GRD de eletrica do edificio',
    description:
      'Está GRD já está concluída e possui dois projetos finalizados',
    status: 1,
    files: 2,
    responsible: 'Andre Ferreira',
    project: {
      id: 1,
      name: 'Enel',
    },
  },
  {
    id: 2,
    name: 'GRD de eletrica do edificio',
    description:
      'Está GRD já está concluída e possui dois projetos finalizados',
    status: 1,
    files: 2,
    responsible: 'Andre Ferreira',
    project: {
      id: 1,
      name: 'Enel',
    },
  },
  {
    id: 3,
    name: 'GRD de eletrica do edificio',
    description:
      'Está GRD já está concluída e possui dois projetos finalizados',
    status: 0,
    files: 2,
    responsible: 'Andre Ferreira',
    project: {
      id: 1,
      name: 'Enel',
    },
  },
  {
    id: 4,
    name: 'GRD de eletrica do edificio',
    description:
      'Está GRD já está concluída e possui dois projetos finalizados',
    status: 0,
    files: 2,
    responsible: 'Andre Ferreira',
    project: {
      id: 1,
      name: 'Enel',
    },
  },
  {
    id: 5,
    name: 'GRD de eletrica do edificio',
    description:
      'Está GRD já está concluída e possui dois projetos finalizados',
    status: 0,
    files: 2,
    responsible: 'Andre Ferreira',
    project: {
      id: 1,
      name: 'Enel',
    },
  },
  {
    id: 6,
    name: 'GRD de eletrica do edificio',
    description:
      'Está GRD já está concluída e possui dois projetos finalizados',
    status: 0,
    files: 2,
    responsible: 'Andre Ferreira',
    project: {
      id: 1,
      name: 'Enel',
    },
  },
]

export class GRDServices {
  static getGRDs() {
    return GRDs
  }
}
