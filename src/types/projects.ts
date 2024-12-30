export interface ProjectDetails {
  client: string;
  date: string;
  location: string;
  additionalImages?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  images: string[];
  a360Link: string;
  services: string[];
  details: ProjectDetails;
  modelImages?: string[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}
