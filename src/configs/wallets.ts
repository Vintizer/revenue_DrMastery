import { Wallet } from "../interfaces";

export const walletsFront2: Wallet[] = [
  { depo: 10, wallet: 1, leverage: 20 },
  { depo: 15, wallet: 1, leverage: 20 },
  { depo: 20, wallet: 1, leverage: 20 },
  { depo: 50, wallet: 2, leverage: 20 },
  { depo: 100, wallet: 3, leverage: 20 },
  { depo: 200, wallet: 3, leverage: 20 },
  { depo: 300, wallet: 3, leverage: 20 },
  { depo: 500, wallet: 5, leverage: 20 },
  { depo: 1000, wallet: 10, leverage: 20 },
  { depo: 2000, wallet: 20, leverage: 20 },
  { depo: 3000, wallet: 30, leverage: 20 },
  { depo: 5000, wallet: 50, leverage: 20 },
  { depo: 10000, wallet: 100, leverage: 20 },
  // exception500 Binance === 7.5
  { depo: 500, wallet: 7.5, leverage: 50 },
  { depo: 1000, wallet: 10, leverage: 50 },
  { depo: 2000, wallet: 20, leverage: 50 },
  { depo: 3000, wallet: 30, leverage: 50 },
  { depo: 5000, wallet: 50, leverage: 50 },
  { depo: 10000, wallet: 100, leverage: 50 },
];
