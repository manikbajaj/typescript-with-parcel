type Holidays = { date: Date; reason: string }[];

abstract class Department {
  protected abstract holidays: Holidays;

  protected constructor(protected name: string) {};

  // Method to add holidays
  public addHoliday(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

class ItDepartment extends Department {
  protected holidays:Holidays = [];
  constructor() {
    super("It Department");
  }
}

class AdminDepartment extends Department {
  protected holidays:Holidays = [];
  constructor() {
    super("Admin Department");
  }
}

const itDepartment = new ItDepartment();
itDepartment.addHoliday([{date:new Date(), reason: "Christmas"}])