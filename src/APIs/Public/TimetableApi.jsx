import axios from "axios";

export const fetchTimetable = async (department, semester, section) => {
  const res = await axios.get("/api/public/timetable", {
    params: { department, semester, section },
  });
  return res.data;
};
