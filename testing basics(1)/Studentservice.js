function calculateAverage(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    return 0;
  }

  const validMarks = marks.filter(
    (mark) => typeof mark === "number" && mark >= 0 && mark <= 100
  );

  if (validMarks.length === 0) {
    return 0;
  }

  const total = validMarks.reduce((sum, mark) => sum + mark, 0);

  return Number((total / validMarks.length).toFixed(2));
}

function getGrade(average) {
  if (average >= 90) {
    return "A";
  }

  if (average >= 75) {
    return "B";
  }

  if (average >= 60) {
    return "C";
  }

  if (average >= 40) {
    return "D";
  }

  return "F";
}

function analyzeStudent(student) {
  if (!student || typeof student !== "object") {
    throw new Error("Invalid student");
  }

  const average = calculateAverage(student.marks);

  return {
    name: student.name,
    average,
    grade: getGrade(average),
    passed: average >= 40,
  };
}

function findTopStudent(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return null;
  }

  return students.reduce((top, current) => {
    const topAverage = calculateAverage(top.marks);
    const currentAverage = calculateAverage(current.marks);

    return currentAverage > topAverage ? current : top;
  });
}

module.exports = {
  calculateAverage,
  getGrade,
  analyzeStudent,
  findTopStudent,
};