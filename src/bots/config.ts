export const baseBot1 = {
  token: "BNB",
  baseToken: "BTC",
  curStopBot: "0.005",
  isCurStopBot: true,
  distance: 20,
  martin: 4,
  orders: 15,
  amount: 20,
};
export const baseBot2 = {
  token: "ETH",
  baseToken: "USDT",
  curStopBot: "2500",
  isCurStopBot: true,
  distance: 30,
  martin: 3,
  orders: 23,
  amount: 0.4,
};
export function getBot(id: number) {
  if (id === 1) {
    return baseBot1;
  }
  return baseBot2;
}
