export class Driver {
    id: number;
    name: string;
    gender: "m" | "f";
    birthDay: Date;
    get shortBirthDay() {
        return this.birthDay.toDateString();
    }
}