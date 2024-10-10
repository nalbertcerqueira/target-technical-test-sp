import fs from "fs/promises";
import path from "path";

interface DailyRevenue {
  dia: number;
  valor: number;
}

/**
 * Obtém o menor faturamento diário a partir de uma lista
 * de faturamentos.
 * @param revenues faturamentos
 */
function getMinRevenue(revenues: DailyRevenue[]): DailyRevenue {
  let minRevenue = revenues[0].valor;
  let day = revenues[0].dia;

  for (const revenue of revenues) {
    const { valor, dia } = revenue;
    if (valor < minRevenue && valor >= 0) {
      minRevenue = valor;
      day = dia;
    }
  }

  return { dia: day, valor: minRevenue };
}

/**
 * Obtém o maior faturamento diário a partir de uma lista
 * de faturamentos.
 * @param revenues faturamentos
 */
function getMaxRevenue(revenues: DailyRevenue[]): DailyRevenue {
  let maxRevenue = revenues[0].valor;
  let day = revenues[0].dia;

  for (const revenue of revenues) {
    const { valor, dia } = revenue;
    if (valor > maxRevenue) {
      maxRevenue = valor;
      day = dia;
    }
  }

  return { dia: day, valor: maxRevenue };
}

/**
 * Obtém o número de dias em que o valor de faturamento diário foi
 * superior à média mensal a partir de uma lista de faturamentos.
 * @param revenues faturamentos
 */
function countDaysAboveAvg(revenues: DailyRevenue[]): number {
  let sum = 0;
  let count = 0;

  for (const revenue of revenues) {
    sum += revenue.valor;
    if (revenue.valor > 0) {
      count += 1;
    }
  }

  const dailyAvg = count === 0 ? 0 : parseFloat((sum / count).toFixed(4));
  let dayCount = 0;

  for (const revenue of revenues) {
    if (revenue.valor > dailyAvg) {
      dayCount += 1;
    }
  }

  return dayCount;
}

async function main() {
  const dataPath = path.resolve(__dirname, "./dados.json");
  const data = JSON.parse(await fs.readFile(dataPath, { encoding: "utf-8" }));

  const minRevenue = getMinRevenue(data);
  const maxRevenue = getMaxRevenue(data);
  const daysAboveAvg = countDaysAboveAvg(data);

  console.log(
    `O menor faturamento foi de ${minRevenue.valor}, no dia ${minRevenue.dia}.`
  );

  console.log(
    `O maior faturamento foi de ${maxRevenue.valor}, no dia ${maxRevenue.dia}.`
  );

  console.log(
    `Ao total, ${daysAboveAvg} dias tiveram um faturamento superior a media.`
  );
}

main();
