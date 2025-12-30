import { Home, Activity, Settings, DollarSign, Wrench, Mail } from 'lucide-react';
import type { NavItem } from '../types';

export const navItems: NavItem[] = [
  { name: 'Dashboard', icon: Home },
  { name: 'Clinical Software', icon: Activity },
  { name: 'Admin Software', icon: Settings },
  { name: 'Financial Software', icon: DollarSign },
  { name: 'Service Software', icon: Wrench },
  { name: 'Contact', icon: Mail }
];