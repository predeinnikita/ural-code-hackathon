export interface CreateVacancyPayload {
  name: string;
  description: string;
  period: {
    start: string | null;
    end: string | null;
  };
  paymemt: string;
  workingHours: string;
  grade: string[];
}
