export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!from || !to || !start || !end) {
      return Response.json(
        {
          error: "Missing required parameters",
        },
        {
          status: 400,
        }
      );
    }

    // Always fetch EUR historical rates
    const url =
      `https://api.frankfurter.app/${start}..${end}`;

    console.log("Fetching:", url);

    const response = await fetch(url);

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to fetch history",
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    if (!data.rates) {
      return Response.json({
        rates: {},
      });
    }

    const convertedRates = {};

    Object.entries(data.rates).forEach(
      ([date, rates]) => {
        // Add EUR manually because API doesn't include it
        const allRates = {
          EUR: 1,
          ...rates,
        };

        const fromRate = allRates[from];
        const toRate = allRates[to];

        if (!fromRate || !toRate) return;

        convertedRates[date] = {
          [to]: Number(
            (toRate / fromRate).toFixed(8)
          ),
        };
      }
    );

    return Response.json({
      amount: 1,
      base: from,
      start_date: start,
      end_date: end,
      rates: convertedRates,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}