const BASE_URL = "https://api.frankfurter.dev/v2";

export async function getCurrencies() {
  const response = await fetch(
    `${BASE_URL}/currencies`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch currencies");
  }

  return response.json();
}

export async function convertCurrency(
  amount,
  from,
  to
) {
  const response = await fetch(
    `${BASE_URL}/rate/${from}/${to}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch rate");
  }

  return amount * data.rate;
}