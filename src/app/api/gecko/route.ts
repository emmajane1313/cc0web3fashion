import {  NextResponse } from "next/server";

export async function GET() {
  try {
    const [coinRes, chartRes] = await Promise.all([
      fetch(`https://api.coingecko.com/api/v3/coins/monavale`, {
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": process.env.COINGECKO!,
        },
        next: { revalidate: 60 },
      }),
      fetch(
        `https://api.coingecko.com/api/v3/coins/monavale/market_chart?vs_currency=usd&days=365&interval=daily`,
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": process.env.COINGECKO!,
          },
          next: { revalidate: 60 },
        }
      ),
    ]);

    if (!coinRes.ok || !chartRes.ok) {
      return NextResponse.json(
        { error: "Error desde CoinGecko" },
        { status: 500 }
      );
    }

    const coinData = await coinRes.json();
    const chartData = await chartRes.json();

    const price_history = chartData.prices.map(
      ([timestamp, price]: [number, number]) => ({
        date: new Date(timestamp).toISOString().split("T")[0],
        price: parseFloat(price.toFixed(2)),
      })
    );

    return NextResponse.json({
      ...coinData,
      price_history,
    });
  } catch (err) {
    console.error(`Error al obtener moneda:`, err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
