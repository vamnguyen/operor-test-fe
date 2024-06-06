export interface Meeting {
  start_day: number;
  end_day: number;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  days: number;
  meeting_days: Meeting[];
  days_without_meetings: number;
}
