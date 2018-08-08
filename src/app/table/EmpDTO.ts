import { IEmployee } from './IEmployee'
export class EmpDTO implements IEmployee{
  public   id: Number;
   public name: string;
  public  department: string;
 public   salary: number;
   public location: string;
}
