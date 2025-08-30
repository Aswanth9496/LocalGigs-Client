import { useCallback, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FetchRecentJobs } from "../../../utils/User/FetchRecentJobs";

interface Jobs {
  title: string;
  customer: string;
  location: string;
  date: string;
  amount: number;
  status: "Completed" | "Pending" | "Cancelled";
}

const RecentRecentJobs = () => {
  
  const [recentJobs, setRecentJobs] = useState<Jobs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const loadJobs =useCallback(async () => {
      try {
        const jobs = await FetchRecentJobs(recentJobs.length,5); 
        setRecentJobs(prv=>[...prv,...jobs]);
      } catch (err:unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
         setError("Failed to load recent jobs");
        }
      } finally {
        setLoading(false);
      }
    }
    ,[recentJobs.length]) 
  
  useEffect(() => {
    loadJobs();
  },[]);

  if (loading) {
    return <p className="text-gray-500">Loading recent jobs...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900">Recent Jobs</h2>
      <p className="text-gray-500 text-sm mb-4">Your latest completed work</p>

      {/* Job List */}
     {recentJobs.length==0?(
      <div className="flex flex-col items-center justify-center text-center py-10">
        <FaCheckCircle className="text-gray-300 text-4xl mb-2" />
        <p className="text-gray-500">No recent jobs found</p>
      </div>
    ):(
       <div className="flex flex-col gap-3">
        {recentJobs.map((job, index) => (
          <div
            className="flex justify-between items-center border border-gray-300 rounded-xl px-4 py-3"
            key={index}
          >
            <div>
              <h3 className="text-gray-900 font-medium">{job.title}</h3>
              <p className="text-sm text-gray-600">
                {job.customer} • {job.location} • {job.date}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-gray-900 font-semibold">₹{job.amount}</span>
              <span className="inline-flex items-center gap-1 text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                <FaCheckCircle className="text-green-600" /> {job.status}
              </span>
            </div>
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default RecentRecentJobs;
