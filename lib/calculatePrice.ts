import BigNumber from "bignumber.js";
import { ParsedUrlQuery } from "querystring";
import { collections } from "./collections";

export default function calculatePrice(query: ParsedUrlQuery): BigNumber {
  let amount = new BigNumber(0);
  for (let [id, quantity] of Object.entries(query)) {
    const product = collections.find(p => p.id === id)
    if (!product) continue;

    const price = product.priceSol
    const productQuantity = new BigNumber(quantity as string)
    amount = amount.plus(productQuantity.multipliedBy(price))
  }

  return amount
}
