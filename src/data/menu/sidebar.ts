import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const sidebarMenu = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Product', href: '/products', icon: UsersIcon, current: false },
  { name: 'Product Add', href: '/products/add', icon: FolderIcon, current: false },
  { name: 'Specification', href: '/specifications', icon: FolderIcon, current: false },
  { name: 'Specification add', href: '/specifications/add', icon: FolderIcon, current: false },
  { name: 'Spec Category', href: '/specifications/categories', icon: FolderIcon, current: false },
  { name: 'Paint', href: '/paints', icon: FolderIcon, current: false },
  { name: 'Categories', href: '/categories', icon: FolderIcon, current: false },
  { name: 'Interior types', href: '/interior-types', icon: FolderIcon, current: false },
  { name: 'Features', href: '/features', icon: FolderIcon, current: false },
]