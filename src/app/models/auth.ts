export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  bookmarked: Array<number>;
  allTimeCalories: number;
  allTimeCarbs: number;
  allTimeFat: number;
  allTimeProtein: number;
}
