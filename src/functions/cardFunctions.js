const cardFunctions = (arrayObj, whatFunction) => {
  let numGames = arrayObj.length;
  let totalDamage = arrayObj.reduce(
    (damage, element) => damage + element.buyprice,
    0
  );
  let totalHeal = arrayObj.reduce(
    (heal, element) => heal + element.sellprice,
    0
  );
  let netDamage = totalDamage - totalHeal;
  let totalPlays = arrayObj.reduce(
    (play, element) => play + Number(element.playcount),
    0
  );
//   console.log("total plays ", totalPlays, "net cost ", netDamage);

  // For month calculation
  let initialPurchaseDate = arrayObj[0].buydate;
  let maxBuyDate = arrayObj.reduce(
    (maxDate, element) =>
      maxDate > element.buydate ? maxDate : element.buydate,
    initialPurchaseDate
  );
  let minBuyDate = arrayObj.reduce(
    (minDate, element) =>
      minDate < element.buydate ? minDate : element.buydate,
    initialPurchaseDate
  );
  // console.log("min date ", minBuyDate, " max date ", maxBuyDate);

  let getMaxMth = new Date(maxBuyDate).getMonth();
  let getMinMth = new Date(minBuyDate).getMonth();
  let getMaxYear = new Date(maxBuyDate).getFullYear();
  let getMinYear = new Date(minBuyDate).getFullYear();
  // console.log(getMaxMth, getMaxYear, getMinMth, getMinYear);

  let mthLength = getMaxMth - getMinMth + 12 * (getMaxYear - getMinYear);

  if (whatFunction === "totalGamesOwned") {
    return numGames;
  } else if (whatFunction === "dmgPerGame") {
    return numGames > 0 ? netDamage / numGames : Infinity;
  } else if (whatFunction === "dmgPerPlay") {
    return totalPlays > 0 ? netDamage / totalPlays : Infinity;
  } else if (whatFunction === "dmgPerMonth") {
    return mthLength > 0 ? netDamage / mthLength : Infinity;
  }
};

export default cardFunctions;
