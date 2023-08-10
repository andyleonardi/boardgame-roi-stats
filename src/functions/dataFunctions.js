// Contains functions to process data

// Refactoring, to get the blank processedData array,
// which is an array with consecutive months and several blank
// property for calculation
const processData = (fullObj) => {
  // function takes in collection data, which is an array of object
  // array of object with the following property:
  // [{name, status, buydate, buyprice, selldate, sellprice, playcount}]
  // We want to convert this data and return the following:
  // [{year, month, variable 1, variable 2, etc}]

  let initialPurchaseDate = fullObj[0].buydate;
  let minBuyDate = fullObj.reduce(
    (minDate, element) =>
      minDate < element.buydate ? minDate : element.buydate,
    initialPurchaseDate
  );

  let getMinMth = new Date(minBuyDate).getMonth();
  let getMinYear = new Date(minBuyDate).getFullYear();
  let endMth = new Date().getMonth();
  let endYear = new Date().getFullYear();
  let arrLength = endMth - getMinMth + 12 * (endYear - getMinYear);

  let processedElement = {
    year: null,
    month: null,
    monthClean: "",
    numbuy: 0,
    numsell: 0,
    damage: 0,
    heal: 0,
    netDmg: 0,
  };
  let blankArr = Array(arrLength).fill(processedElement);
  //   console.log(processedData);

  let processedData = blankArr.map((element, index) => {
    let yearNum = getMinYear + Math.floor((index + getMinMth) / 12);
    let mthNum = getMinMth + index - Math.floor((index + getMinMth) / 12) * 12;
    return {
      ...element,
      year: yearNum,
      month: mthNum,
    };
  });
  //   console.log(processedData);
  return processedData;
};

const monthlyInAndOut = (fullObj) => {
  let fullObjSubset = fullObj.map((element) => {
    return {
      ...element,
      buymonth: new Date(element.buydate).getMonth(),
      buyyear: new Date(element.buydate).getFullYear(),
      sellmonth: new Date(element.selldate).getMonth(),
      sellyear: new Date(element.selldate).getFullYear(),
    };
  });
  //   console.log(fullObjSubset);

  // Get the processed data template
  let processedData = processData(fullObj);

  // For each month in the array, count how many buydate
  // falls into the month, and then record the number in numbuy
  // Then, we want to add all the damages and heals of the month,
  processedData.forEach((procEle) => {
    fullObjSubset.forEach((fullEle) => {
      if (
        (procEle.year === fullEle.buyyear) &
        (procEle.month === fullEle.buymonth)
      ) {
        procEle.numbuy = procEle.numbuy > 0 ? procEle.numbuy + 1 : 1;
        procEle.damage = procEle.damage + fullEle.buyprice;
      }
      // Similarly, count how many selldate falls into the month
      // and record the number in numsell property
      if (
        (procEle.year === fullEle.sellyear) &
        (procEle.month === fullEle.sellmonth)
      ) {
        procEle.numsell = procEle.numsell > 0 ? procEle.numsell + 1 : 1;
        procEle.heal = procEle.heal + fullEle.sellprice;
      }
    });
    // Then finally, calculate the net for the month,
    // i.e. damage minus heals of each month
    procEle.netDmg = procEle.damage - procEle.heal;
  });

  // Lastly, we want to calculate cumulative sum, so that for a given month,
  // the net damage is sum of damage of that month, plus all the preceding month
  let cumulativeNetDmg = 0;
  processedData.forEach((element) => {
    element.netDmg = element.netDmg + cumulativeNetDmg;
    cumulativeNetDmg = element.netDmg;
  });

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  processedData.forEach((element) => {
    element.monthClean =
      monthNames[element.month] + element.year.toString().slice(-2);
  });

  // console.log(processedData);
  return processedData;
};

export default monthlyInAndOut;
