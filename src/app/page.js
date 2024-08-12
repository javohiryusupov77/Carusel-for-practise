import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "./components/LineChart";
import Products from "./components/products";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  return (
    <main className="min-h-screen p-6 sm:p-12 lg:p-24">
        <LineChart />
     
        <Products />
    </main>
  );
}
