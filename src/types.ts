export type ServiceData = {
  name: string;
  duration: number;
  price: number;
};

export type ProfessionalData = {
  fullName: string;
  specialty: string;
  bio: string;
};

export type DayScheduleData = {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};
