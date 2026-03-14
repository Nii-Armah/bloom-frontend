export type ServiceData = {
  id: string;
  name: string;
  duration: number;
  price: number;
  professionalName?: string;
};

export type ProfessionalData = {
  id: string;
  fullName: string;
  specialty: string;
  bio: string;
  services: ServiceData[];
};

export type DayScheduleData = {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
