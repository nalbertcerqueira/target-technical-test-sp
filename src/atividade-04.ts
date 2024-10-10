const revenuePerState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

/**
 * Calcula o percentual de representação que cada campo teve dentro do valor total
 * mensal, a partir de um mapeamento de faturamentos.
 * @param revenues mapeamento de faturamentos
 * @returns
 */
function calculateRevenueShare(revenues: Record<string, number>) {
  let totalRevenue = 0;
  const revenueShare: Record<string, number> = {};

  for (const key in revenues) {
    totalRevenue += revenues[key];
  }

  for (const key in revenues) {
    const percentage = (revenues[key] / totalRevenue) * 100;
    revenueShare[key] = parseFloat(percentage.toFixed(2));
  }

  return revenueShare;
}

function main() {
  const revenueShare = calculateRevenueShare(revenuePerState);

  console.log("Representação do percentual de faturamento por estado:");
  console.log(JSON.stringify(revenueShare, null, 2));
}

main();
