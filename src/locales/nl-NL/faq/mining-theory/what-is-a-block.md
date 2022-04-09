---
title: "Wat is een block?"
level: beginner
---

In zijn meest fundamentele vorm is een block een combinatie van de volgende onderdelen:
| Block                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transacties           | Een lijst van een aantal transacties van het netwerk. De lengte van deze lijst is beperkt; zo kan slechts een bepaald aantal transacties worden opgenomen (het aantal transacties dat op de lijst past hangt van de munt af).  Transactions also include a *Transaction Fee* which is given to the miner of the Block in exchange for including that transaction in the Block, transactions are included in blocks based on these Transaction Fees, higher fees get incorporated in Blocks faster as the miners are trying to make as much profit as possible. The transactions list includes a special transaction which gives funds to the miner of the block, these funds are "created" when the Block is broadcast to the network and is known as the *Block Reward*. |
| Hash van vorige block | De hash van de vorige block op de blockchain - hierdoor kan de chain niet worden veranderd. Iets veranderen in de vorige blocks zou die blocks ongeldig maken en de ketting breken.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Nonce                 | Standing for "Number used Once", this is a number which is generated by miners guessing randomly until they find a number that, when Hashed with the rest of the block data, results in a Hash of the required Difficulty (or higher) to make the Block *Valid*. A Block which does not yet have a Nonce is called a *Block Template*, this can be repeatedly Hashed with different Nonces to try to meet the Difficulty requirement of the coin and form a Block. If two Blocks are found by diffent pools at the same time they are both added to the chain and then the next block will only point its Previous Block Hash at one of these, the other is called an *Uncle*.                                                                                            |

