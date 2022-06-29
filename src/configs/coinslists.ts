import { CoinsList } from "../interfaces";

const binanceCoinsList = [
  {
    name: "GOLD",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(TRX),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(BNB),(ATOM),(ONT),(IOTA),(BAT),(VET),(NEO),(QTUM),(IOST),(THETA),(ALGO),(ZIL),(KNC),(ZRX),(COMP),(OMG),(DOGE),(SXP),(KAVA),(BAND),(RLC),(WAVES),(MKR),(SNX),(DOT),(DEFI),(BAL),(CRV),(SRM),(ICX),(STORJ),(BLZ),(FTM),(ENJ),(FLM),(TOMO),(REN),(RSR),(LRC),(MATIC),(OCEAN),(CVC),(BEL),(CTK),(ALPHA),(ZEN),(SKL),(GRT),(1INCH),(CHZ),(SAND),(ANKR),(BTS),(LIT),(UNFI),(REEF),(RVN),(SFP),(XEM),(COTI),(CHR),(MANA),(ALICE),(HBAR),(ONE),(LINA),(STMX),(DENT),(CELR),(HOT),(MTL),(OGN),(NKN),(DGB),(1000SHIB),(BAKE),(GTC),(BTCDOM),(IOTX),(RAY),(C98),(ATA),(FTT),(DYDX),(1000XEC),(GALA),(CELO),(AR),(KLAY),(ARPA),(CTSI),(LPT),(ENS),(PEOPLE),(ANT),(ROSE),(DUSK),(FLOW),(IMX),(API3),(GMT),(APE),(BNX),(WOO),(JASMY),(DAR),(GAL),(OP)",
  },
  {
    name: "GOLD MID",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(TRX),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(ATOM),(NEO),(THETA),(ALGO),(ZIL),(KNC),(ZRX),(COMP),(BAND),(WAVES),(MKR),(SNX),(DOT),(BAL),(CRV),(SRM),(BZRX),(FTM),(ENJ),(TOMO),(MATIC),(ALPHA),(SKL),(GRT),(1INCH),(CHZ),(XEM),(COTI),(ALICE),(HBAR),(HOT),(MTL),(ICP),(BAKE),(GTC),(C98)",
  },
  {
    name: "GOLD DEF",
    simpleList:
      "(ETH),(BCH),(XRP),(EOS),(LTC),(TRX),(ETC),(LINK),(XLM),(ADA),(XMR),(DASH),(ZEC),(XTZ),(BNB),(ATOM),(BAT),(VET),(NEO),(QTUM),(THETA),(ALGO),(ZIL),(ZRX),(COMP),(OMG),(SXP),(MKR),(SNX),(DOT),(DEFI),(BAL),(CRV),(SRM),(STORJ),(FTM),(ENJ),(TOMO),(REN),(MATIC),(ALPHA),(ZEN),(SKL),(GRT),(1INCH),(CHZ),(SAND),(ANKR),(XEM),(MANA),(ALICE),(HOT),(MTL),(BAKE),(CTSI)",
  },
];
const bybitCoinsList = [
  {
    name: "GOLD",
    simpleList:
      "(EOS),(XRP),(XTZ),(LINK),(ADA),(DOT),(XEM),(DOGE),(MATIC),(FIL),(XLM),(VET),(THETA),(COMP),(MANA),(ATOM),(CHZ),(CRV),(ENJ),(GRT),(SHIB1000),(ICP),(FTM),(ALGO),(DYDX),(SRM),(BIT),(GALA),(HBAR),(ONE),(C98),(ALICE),(REN),(TLM),(FLOW),(LRC),(ENS),(IOTX),(CHR),(BAT),(STORJ),(SNX),(ANKR),(QTUM),(CRO),(SXP),(ZEC),(SFP),(IOTA),(WAVES),(KNC),(OGN),(BSW),(CTSI),(HOT),(DGB),(GLMR),(BAKE),(MTL),(CVX),(DODO),(TOMO),(GST),(DAR),(GAL),(FITFI),(AKRO),(OP)",
  },
  {
    name: "GOLD DEF",
    simpleList:
      "(EOS),(XRP),(XTZ),(LINK),(ADA),(DOT),(XEM),(MATIC),(FIL),(XLM),(VET),(THETA),(COMP),(MANA),(ATOM),(CHZ),(CRV),(ENJ),(GRT),(SHIB1000),(ICP),(FTM),(ALGO),(DYDX),(SRM),(FTT),(HBAR),(ONE),(C98),(ALICE),(REN),(BAT),(STORJ),(ANKR),(CRO),(ZEC),(WAVES),(OGN),(HOT),(BAKE),(TOMO)",
  },
];
export const coinsLists: Record<string, CoinsList[]> = {
  Binance: binanceCoinsList,
  Bybit: bybitCoinsList,
};
