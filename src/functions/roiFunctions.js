import funMeter from "../components/funMeter";

const roiMeter = (cost) => {
  let dmgRange = funMeter.find((item) => cost <= item.result);
  return dmgRange.message;
};

export default roiMeter;
