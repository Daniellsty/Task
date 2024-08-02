
import { fetchTokens } from "@/actions/getTokens";
import AssetesTable from "../components/TableToken";


export const revalidate = 5;

export default async function Home() {
  
  const res1 = await fetchTokens('BTC');
  const res2 = await fetchTokens('ETH');
  const res3 = await fetchTokens('XRP');
  const res4 = await fetchTokens('ADA');
  const res5 = await fetchTokens('BNB');
  const res6 = await fetchTokens('TRX');
  const res7 = await fetchTokens('LTC');
  const res8 = await fetchTokens('DOT');
  const res9 = await fetchTokens('AVAX');
  const res10 = await fetchTokens('TON');
  
  const datas =[
    res1.data,
    res2.data,
    res3.data,
    res4.data,
    res5.data,
    res6.data,
    res7.data,
    res8.data,
    res9.data,
    res10.data
  ];

  
  
  return (
    <div className="flex items-center justify-center min-h-[100vh] px-5">
      <AssetesTable 
      tableData={datas} />
      
    </div>
  );
};