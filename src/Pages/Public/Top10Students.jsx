import { Top10StudentsCard } from "../../Components/Top10Students/Top10StudentsCard"
import { Top10StudentsForm } from "../../Components/Top10Students/Top10StudentsForm"

export const Top10Students = () => {
    return (
        <>
             <section className="max-w-4xl mx-auto px-4 py-10">
                  <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#293080] mb-6">
                    Hall Statement
                  </h1>
            
                  <div className="bg-gray-50 p-6 rounded-md shadow-md">
                    <Top10StudentsForm />
                  </div>
                  <Top10StudentsCard />
                </section>
        </>
    )
}