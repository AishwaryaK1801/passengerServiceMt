export interface Ipassenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate?: number | null;
    children?: IChild[] | null;
  }

  interface IChild {
    name: string;
    age: number;
  }