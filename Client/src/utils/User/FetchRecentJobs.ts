
import api from "../../API/axios";

interface Jobs {
  title: string;
  customer: string;
  location: string;
  date: string;
  amount: number;
  status: "Completed" | "Pending" | "Cancelled";
}



export const FetchRecentJobs = async(skip: number, limit: number = 5):Promise<Jobs[]>=>{
      try {
        const {data} = await api.get('/User/RecentJobs',{ params: { skip, limit }})
        return data
        
      } catch (error) {
        console.error("Error fetching recent jobs:", error);
        return []
      }

};
