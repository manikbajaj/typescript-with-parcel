enum Subjects {
  science = "science",
  business = "business",
}

type ScienceReport = {
  type: Subjects.science;
  physics: number;
  chemistry: number;
  maths: number;
};

type BusinessReport = {
  type: Subjects.business;
  accounts: number;
  economics: number;
};

type GenerateReport = {
  (
    type: Subjects.science,
    physics: number,
    chemistry: number,
    maths: number
  ): ScienceReport;
  (
    type: Subjects.business,
    accounts: number,
    economics: number
  ): BusinessReport;
};

function generateReport() {}
