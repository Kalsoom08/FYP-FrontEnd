import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../../APIs/Public/NotesApi';
import { FaDownload } from 'react-icons/fa';

function NotesSearch({ department, semester, subject }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['notes', { department, semester, subject }],
    queryFn: fetchNotes, 
    enabled: !!department && !!semester && !!subject,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading notes: {error.message}</p>;

  return (
    <>
      {(data || []).map((note) => (
        
        <div
          key={note._id}
          className="min-w-[220px] bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300"
        >
          <h4 className="text-[#293080] text-md font-semibold mb-1">{note.semester} Semester</h4>
          <p className="text-gray-600 text-sm mb-3">{note.subject}</p>
          <a
            href={note.downloadLink}  target='_blank'
            className="text-[#293080] text-sm font-semibold flex items-center gap-1"
            download
          >
            <FaDownload className="text-sm" /> Download PDF
          </a>
        </div>
      ))}
    </>
  );
}

export default NotesSearch;
