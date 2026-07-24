export async function GET(request) {
  try {
    const { searchParams } = new URL(
      request.url
    );

    const from =
      searchParams.get("from");

    const to =
      searchParams.get("to");

    const start =
      searchParams.get("start");

    const end =
      searchParams.get("end");

    if (
      !from ||
      !to ||
      !start ||
      !end
    ) {
      return Response.json(
        {
          error:
            "Missing required parameters",
        },
        {
          status: 400,
        }
      );
    }

    const url =
      `https://api.frankfurter.app/${start}..${end}` +
      `?from=${from}&to=${to}`;

    console.log(
      "History API URL:",
      url
    );

    const response =
      await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Frankfurter Error: ${response.status}`
      );
    }

    const data =
      await response.json();

    console.log(
      "History API Response:",
      data
    );

    return Response.json(data);
  } catch (error) {
    console.error(
      "History API Error:",
      error
    );

    return Response.json(
      {
        error:
          error.message ||
          "Failed to fetch history data",
      },
      {
        status: 500,
      }
    );
  }
}