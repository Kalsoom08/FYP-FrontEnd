import baseAPI from "../BaseAPI/baseAPI";

export const fetchTimetable = async (department, semester, section) => {
  const res = await baseAPI.get("/public/timetable", {
    params: { department, semester, section }
  });
  return res.data;
};
export const fetchTimetableOptions = async () => {
  const res = await baseAPI.get("/public/timetable/options");
  return res.data;
};