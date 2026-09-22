import {
  calculateAverage,
  getGrade,
  analyzeStudent,
  findTopStudent,
} from "./Studentservice";

describe("calculateAverage", () => {
  test("should calculate average of valid marks", () => {
    expect(calculateAverage([80, 90, 100])).toBe(90);
  });

  test("should return 0 for an empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });

  test("should ignore invalid marks", () => {
    expect(calculateAverage([80, "90", null, undefined, -10, 120, 100])).toBe(90);
  });

  test("should return 0 when all marks are invalid", () => {
    expect(calculateAverage(["a", null, undefined, -5, 150])).toBe(0);
  });

  test("should handle decimal averages", () => {
    expect(calculateAverage([85, 90, 100])).toBe(91.67);
  });
});

describe("getGrade", () => {
  test("should return A for average >= 90", () => {
    expect(getGrade(90)).toBe("A");
    expect(getGrade(100)).toBe("A");
  });

  test("should return B for average between 75 and 89", () => {
    expect(getGrade(75)).toBe("B");
    expect(getGrade(89)).toBe("B");
  });

  test("should return C for average between 60 and 74", () => {
    expect(getGrade(60)).toBe("C");
    expect(getGrade(74)).toBe("C");
  });

  test("should return D for average between 40 and 59", () => {
    expect(getGrade(40)).toBe("D");
    expect(getGrade(59)).toBe("D");
  });

  test("should return F for average below 40", () => {
    expect(getGrade(39)).toBe("F");
    expect(getGrade(0)).toBe("F");
  });
});

describe("analyzeStudent", () => {
  test("should return complete student analysis", () => {
    expect(analyzeStudent({ name: "Achinta", marks: [85, 90, 100] })).toEqual({
      name: "Achinta",
      average: 91.67,
      grade: "A",
      passed: true,
    });
  });

  test("should mark student as passed when average is 40 or above", () => {
    expect(analyzeStudent({ name: "Kiran", marks: [40, 40] }).passed).toBe(true);
  });

  test("should mark student as failed when average is below 40", () => {
    expect(analyzeStudent({ name: "Sri", marks: [30, 20] }).passed).toBe(false);
  });

  test("should throw error for invalid student", () => {
    expect(() => analyzeStudent(null)).toThrow("Invalid student");
    expect(() => analyzeStudent("not-an-object")).toThrow("Invalid student");
  });
});

describe("findTopStudent", () => {
  test("should return student with highest average", () => {
    const students = [
      { name: "Achinta", marks: [70, 80] },
      { name: "Kiran", marks: [95, 100] },
      { name: "Sri", marks: [60, 65] },
    ];

    expect(findTopStudent(students)).toEqual({
      name: "Kiran",
      marks: [95, 100],
    });
  });

  test("should return null for empty student list", () => {
    expect(findTopStudent([])).toBeNull();
  });

  test("should handle students with different number of marks", () => {
    const students = [
      { name: "Achinta", marks: [100] },
      { name: "Kiran", marks: [80, 90, 100] },
    ];

    expect(findTopStudent(students)).toEqual({
      name: "Achinta",
      marks: [100],
    });
  });
});