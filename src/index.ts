type Holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected name: string) {}
}

class ItDepartment extends Department {
    protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
    protected holidays: Holidays = [];
}
