import { ViewInterface } from './IView';

export const VIEWS: ViewInterface[] = [
  // Administración
  {
    icon: 'chevron-right',
    name: 'Administración',
    views: [
      {
        icon: 'chevron-right',
        name: 'Gestionar sucursales',
        href: 'admin/sucursales',
      },
      {
        icon: 'chevron-right',
        name: 'Gestionar lotes',
        href: 'admin/lotes',
      },
      {
        icon: 'chevron-right',
        name: 'Gestionar clientes',
        href: 'admin/clientes',
      },
      {
        icon: 'chevron-right',
        name: 'Gestionar aseguradoras',
        href: 'admin/aseguradoras',
      },
      {
        icon: 'chevron-right',
        name: 'Gestionar roles',
        href: 'admin/roles',
      },
      {
        icon: 'chevron-right',
        name: 'Gestionar usuarios',
        href: 'admin/usuarios',
      }
    ],
  },
  // Personal
  {
    icon: 'chevron-right',
    name: 'Personal',
    views: [
      {
        icon: 'chevron-right',
        name: 'Clientes',
        href: 'personal/clientes',
      },
      {
        icon: 'chevron-right',
        name: 'Lotes',
        href: 'personal/lotes',
      },
      {
        icon: 'chevron-right',
        name: 'Seguros',
        href: 'personal/seguros',
      }
    ],
  }
];
