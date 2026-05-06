function maxProfit(n, buildings) {
  let maxEarning = 0;
  let results = [];

  for (let b of buildings) {
    const { name, buildTime, earnings } = b;

    let time = 0;
    let totalProfit = 0;
    let count = 0;

    while (time + buildTime <= n) {
      time += buildTime;

      totalProfit += (n - time) * earnings;
      count++;
    }

    if (totalProfit > maxEarning) {
      maxEarning = totalProfit;
      results = [{ Theater: 0, Pub: 0, CommercialPark: 0 }];
      results[0][name] = count;
    } else if (totalProfit === maxEarning) {
      let obj = { Theater: 0, Pub: 0, CommercialPark: 0 };
      obj[name] = count;
      results.push(obj);
    }
  }

  return { earnings: maxEarning, solutions: results };
}

const buildings = [
  { name: "Theater", buildTime: 5, earnings: 1500 },
  { name: "Pub", buildTime: 4, earnings: 1000 },
  { name: "CommercialPark", buildTime: 3, earnings: 500 },
];

console.log(maxProfit(13, buildings));
