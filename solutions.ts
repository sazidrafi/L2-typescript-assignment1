const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier) {
    return value * multiplier;
  } else if (multiplier === 0) {
    return 0;
  } else {
    return value * 2;
  }
};

const processInput = (inputValue: any) => {
  if (typeof inputValue == "string") {
    return inputValue.trim().toLowerCase();
  } else if (typeof inputValue == "number") {
    return inputValue * 10;
  } else if (typeof inputValue == "boolean") {
    if (inputValue === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = (
  locationInfo: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = locationInfo;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
  let temp: T[] = [];
  arrays.forEach((arr) => {
    temp = [...temp, ...arr];
  });
  return temp;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number) => {
  let newArray: Course[] = [];
  courses.forEach((arr: Course) => {
    if (arr.students >= minStudents && arr.isPublished === true) {
      newArray.push(arr);
    }
  });
  return newArray;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let newArray: T[K][] = [];
  items.forEach((arr: T) => {
    newArray.push(arr[key]);
  });
  return newArray;
};

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  const result = new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
  return result;
};
