import { RollnumberCard } from "../../Components/RollNumber/RollnumberCard"
import { RollnumberForm } from "../../Components/RollNumber/RollnumberForm"

export const Rollnumber = () => {
    return (
        <>
             <section className="max-w-4xl mx-auto px-4 py-10">
                  <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#293080] mb-6">
                    Subjects
                  </h1>
            
                  <div className="bg-gray-50 p-6 rounded-md shadow-md">
                    <RollnumberForm />
                  </div>
                  <RollnumberCard />
                </section>
        </>
    )
}