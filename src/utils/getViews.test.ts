import { getViews, GetViewsReturnType } from "./getViews";

test("omits empty lines", () => {
  const logMock = [""];
  expect(getViews(logMock)).toStrictEqual({
    views: [],
    uniqueViews: [],
  });
});

type CaseType = [string, string, GetViewsReturnType];
const path = "home";
const ip1 = "123.123.123.123";
const ip2 = "124.124.124.124";
const logLine = `${path} ${ip1}`;
const logLine2 = `${path} ${ip2}`;
const case1: CaseType = [
  logLine,
  logLine,
  {
    views: [["home", 2]],
    uniqueViews: [["home", 1]],
  },
];
const case2: CaseType = [
  logLine,
  logLine2,
  {
    views: [["home", 2]],
    uniqueViews: [["home", 2]],
  },
];
const cases: CaseType[] = [case1, case2];

test.each(cases)(
  "given following log lines: %line and %line, returns %expected",
  (logLine1, logLine2, expectedResult) => {
    expect(getViews([logLine1, logLine2])).toStrictEqual(expectedResult);
  }
);
