export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  bookmarked: Array<number>;
  allTimeCalories: string;
  allTimeCarbs: string;
  allTimeFat: string;
  allTimeProtein: string;
}
