import { CoinsList } from "../interfaces";

const binanceCoinsList = [
  {
    name: "aggressive",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(TRX),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(BNB),(ATOM),(ONT),(IOTA),(BAT),(VET),(NEO),(QTUM),(IOST),(THETA),(ALGO),(ZIL),(KNC),(ZRX),(COMP),(OMG),(SXP),(KAVA),(WAVES),(MKR),(SNX),(DOT),(DEFI),(BAL),(CRV),(SRM),(ICX),(STORJ),(FTM),(ENJ),(TOMO),(REN),(RSR),(MATIC),(OCEAN),(CVC),(ALPHA),(ZEN),(SKL),(GRT),(1INCH),(CHZ),(SAND),(ANKR),(RVN),(XEM),(COTI),(CHR),(MANA),(ALICE),(HBAR),(ONE),(CELR),(HOT),(OGN),(DGB),(1000SHIB),(BAKE),(BTCDOM),(IOTX),(FTT),(DYDX),(1000XEC),(GALA),(CELO),(AR),(KLAY),(CTSI),(LPT),(ENS),(PEOPLE),(ROSE),(FLOW),(IMX),(GMT)",
  },
  {
    name: "aggressivex50",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(BNB),(ONT),(IOTA),(BAT),(NEO),(QTUM),(IOST),(THETA),(KNC),(ZRX),(COMP),(SXP),(KAVA),(BAND),(WAVES),(MKR),(DOT),(DEFI),(BAL),(CRV),(SRM),(ICX),(STORJ),(ENJ),(TOMO),(REN),(MATIC),(OCEAN),(CVC),(ALPHA),(ZEN),(SKL),(GRT),(1INCH),(CHZ),(SAND),(ANKR),(RVN),(XEM),(COTI),(CHR),(MANA),(HBAR),(HOT),(MTL),(DGB),(1000SHIB),(BAKE),(GMT)",
  },
  {
    name: "standart",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(TRX),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(ATOM),(NEO),(THETA),(ALGO),(ZIL),(KNC),(ZRX),(COMP),(BAND),(WAVES),(MKR),(SNX),(DOT),(BAL),(CRV),(SRM),(BZRX),(FTM),(ENJ),(TOMO),(MATIC),(ALPHA),(SKL),(GRT),(1INCH),(CHZ),(XEM),(COTI),(ALICE),(HBAR),(HOT),(MTL),(ICP),(BAKE),(GTC),(C98)",
  },
  {
    name: "safe",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(TRX),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(BNB),(ATOM),(BAT),(VET),(NEO),(QTUM),(THETA),(ALGO),(ZIL),(ZRX),(COMP),(OMG),(SXP),(MKR),(SNX),(DOT),(DEFI),(BAL),(CRV),(SRM),(STORJ),(FTM),(ENJ),(TOMO),(REN),(MATIC),(ALPHA),(ZEN),(SKL),(GRT),(1INCH),(CHZ),(SAND),(ANKR),(XEM),(MANA),(ALICE),(HOT),(BAKE),(CTSI)",
  },
];
const bybitCoinsList = [
  {
    name: "aggressive",
    simpleList:
      "(EOS),(XRP),(XTZ),(LINK),(ADA),(DOT),(XEM),(DOGE),(MATIC),(FIL),(XLM),(VET),(THETA),(COMP),(MANA),(ATOM),(CHZ),(CRV),(ENJ),(GRT),(SHIB1000),(ICP),(FTM),(ALGO),(SRM),(BIT),(GALA),(HBAR),(ONE),(ALICE),(REN),(TLM),(FLOW),(IOTX),(CHR),(BAT),(STORJ),(SNX),(ANKR),(QTUM),(CRO),(SXP),(ZEC),(IOTA),(WAVES),(KNC),(OGN),(BSW),(CTSI),(HOT),(DGB),(BAKE),(CVX),(DODO),(TOMO),(AKRO)",
  },
  {
    name: "safe",
    simpleList:
      "(EOS),(XRP),(XTZ),(LINK),(ADA),(DOT),(XEM),(MATIC),(XLM),(VET),(THETA),(COMP),(MANA),(ATOM),(CHZ),(CRV),(ENJ),(ALGO),(REN),(BAT),(STORJ),(CRO),(ZEC),(HOT),(BAKE)",
  },
];
export const coinsLists: Record<string, CoinsList[]> = {
  Binance: binanceCoinsList,
  Bybit: bybitCoinsList,
};
