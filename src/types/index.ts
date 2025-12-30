export interface Card {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export interface RecentlyVisited {
  id: string;
  title: string;
  link: string;
}

export interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
