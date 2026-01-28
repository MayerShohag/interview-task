import {
     Area,
     AreaChart,
     ResponsiveContainer,
     Tooltip,
     XAxis,
     YAxis,
} from "recharts";
const Graph = () => {
     const chartsData = [
          { day: "Mon", calls: 45 },
          { day: "Tue", calls: 62 },
          { day: "Wed", calls: 58 },
          { day: "Thu", calls: 72 },
          { day: "Fri", calls: 90 },
          { day: "Sat", calls: 98 },
          { day: "Sun", calls: 57 },
     ];
     return (
          <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={chartsData}>
                    <linearGradient id="linearSky" x1="0" y1="0" x2="0" y2="1">
                         <stop
                              offset="5%"
                              stopColor="#3B82F6"
                              stopOpacity={0.8}
                         />
                         <stop
                              offset="95%"
                              stopColor="#3B82F6"
                              stopOpacity={0}
                         />
                    </linearGradient>

                    <XAxis dataKey="day" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip />

                    <Area
                         type="monotone"
                         dataKey="calls"
                         fillOpacity={5}
                         fill="url(#linearSky)"
                    />
               </AreaChart>
          </ResponsiveContainer>
     );
};

export default Graph;
