type Holidays = { date: Date; reason: string };

abstract class Department {
  protected abstract holidays: Holidays[];

  protected constructor(protected name: string) {}

  // Method to add holidays
  public addHoliday(holidays: Holidays[]) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

class ItDepartment extends Department {
  // constructor(protected holidays: Holidays[]) {
  //   super("IT Department");
  // }
}

class AdminDepartment extends Department {
  // constructor(protected holidays: Holidays[]) {
  //   super("Admin Department");
  // }
}

const itDepartment = new ItDepartment([
  { date: new Date(2022, 11, 25), reason: "Christmas" },
  { date: new Date(2022, 3, 17), reason: "Easter" },
]);

console.log(itDepartment);
