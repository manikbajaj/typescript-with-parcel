type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;

  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(
      `Here is the list of holidays`
    );

    this.holidays.forEach((holiday, index) => {
      console.log(
        `${index + 1}. ${holiday.reason}, ${holiday.date}`
      );
    });
  }
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("IT Department");
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(
      `Here is the list of holidays ${this.name}`
    );

    this.holidays.forEach((holiday, index) => {
      console.log(
        `${index + 1}. ${holiday.reason}, ${holiday.date}`
      );
    });
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("Admin Department");
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(
      `Here is the list of holidays ${this.name}`
    );

    this.holidays.forEach((holiday, index) => {
      console.log(
        `${index + 1}. ${holiday.reason}, ${holiday.date}`
      );
    });
  }
}

const itHolidays: Holidays = [
  {
    date: new Date(2022, 11, 1),
    reason: "IT Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Chistmas",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2022, 10, 1),
    reason: "Admin Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Chistmas",
  },
];

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment =
  new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

itDepartment.printHolidays();
adminDepartment.printHolidays();
