import baseAPI from '../../APIs/BaseAPI/baseAPI';
export const fetchNotes = async ({ queryKey }) => {
  const [_key, { subject, semester, department }] = queryKey;

  const params = {};
  if (subject) params.subject = subject;
  if (semester) params.semester = semester;
  if (department) params.department = department;

  const res = await baseAPI.get('/public/notes', { params });
  return res.data;
};
