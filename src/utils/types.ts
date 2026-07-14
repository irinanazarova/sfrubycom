export interface Startup {
  id: string;
  name: string;
  logoUrl: string;
  founderNames: string;
  founderLinkedIn: string;
  website: string;
  oneLiner: string;
  foundedDate: string;
  stage: 'Pre-seed' | 'Seed' | 'Series A' | 'Series B' | 'Series B+' | 'Profitable' | 'Public' | string;
  metric: string;
  teamSize: number;
  hiring: boolean;
  hiringRoles: string[];
  location: 'SF-based' | 'Remote' | 'Both' | string;
  rubyPercentage: number;
  rubyUseCase: string;
  researchOptIn: boolean;
  researchEmail: string;
  researchConsent: boolean;
}

export interface Job {
  id: string;
  companyName: string;
  companyLogo: string;
  companyWebsite: string;
  contactEmail: string;
  contactName: string;
  jobTitle: string;
  description: string;
  experienceLevel: 'Junior' | 'Mid' | 'Senior' | 'Lead' | string;
  location: string;
  rubyRequired: boolean;
  applicationUrl: string;
  salaryRange: string;
  postedDate: string;
  expirationDate: string;
  status: string;
  featured: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  headline: string;
  summary: string;
  link: string;
  category: 'Funding' | 'Acquisition' | 'Product' | 'Traction' | 'Community' | string;
  startupName: string;
  source: string;
}

export interface Talk {
  id: string;
  title: string;
  speakerNames: string;
  speakerSocial: string;
  abstract: string;
  duration: number;
  event: string;
  youtubeLink: string;
  slidesLink: string;
  date: string;
  topicTags: string[];
}

export interface Meetup {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  lumaUrl: string;
  registeredCount: number;
  coverImageUrl?: string;
  type: 'meetup' | 'talks' | 'workshop' | 'conference' | 'social' | string;
}

export interface Resource {
  title: string;
  description: string;
  href: string;
  icon: string;
}
