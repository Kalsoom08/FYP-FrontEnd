    // src/Pages/Public/Timetable.jsx
    import { useState } from "react";
    import { useQuery } from "@tanstack/react-query";
    import { TimetableCard } from "../../Components/Timetable/TimetableCard";
    import { TimetableForm } from "../../Components/Timetable/TimetableForm";
    import { fetchTimetable } from "../../APIs/Public/TimetableApi";

    export const Timetable = () => {
    const [queryData, setQueryData] = useState(null);

    const { data, isLoading } = useQuery({
        queryKey: ["timetable", queryData],
        queryFn: () => fetchTimetable(queryData.department, queryData.semester, queryData.section),
        enabled: !!queryData,
    });

    return (
        <section className="grid lg:grid-cols-2 lg:w-[80%] md:w-[80%] w-[95%] m-auto border border-[#293080] py-6 px-4 mt-8 rounded-md gap-6">
        <div>
            <h1 className="font-semibold lg:text-[2rem] text-[1.5rem] text-[#293080] px-6">
            View Your Class Timetable
            </h1>
            <p className="text-[0.8rem] text-gray-500 px-6">
            Stay organized and never miss your class with the latest IBMS Class schedule.
            </p>
            <TimetableForm onSubmit={setQueryData} />
        </div>
        <div>
            <TimetableCard data={data?.timetables?.[0]} isLoading={isLoading} />
        </div>
        </section>
    );
    };
