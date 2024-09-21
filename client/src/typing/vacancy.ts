export interface CreateVacancyPayload {
  period: {
    start: string | null;
    end: string | null;
  };
  paymemt: string;
  workingHours: string;
  description: string;
  grade: string;
}
