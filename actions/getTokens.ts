export async function fetchToken(token:string){

    const res = await fetch(
      `https://api.kucoin.com/api/v1/market/stats?symbol=${token}-USDT`,
    
    );
   return await res.json();
    
  };