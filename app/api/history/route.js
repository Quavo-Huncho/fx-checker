export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const from =
      searchParams.get("from");

    const to =
      searchParams.get("to");

    const start =
      searchParams.get("start");

    const end =
      searchParams.get("end");

    const url =
      `https://api.frankfurter.app/${start}..${end}` +
      `?from=${from}&to=${to}`;

    console.log(
      "Server Fetch URL:",
      url
    );

    const response =
      await fetch(url);

    const data =
      await response.json();

    console.log(
      "Server Response:",
      data
    );

    return Response.json(data);
  } catch (error) {
    console.error(
      "API Route Error:",
      error
    );

    return Response.json(
      {
        error:
          error.message ||
          "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}