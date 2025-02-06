import { type NextFunction, type Request, type Response } from "express";
const Openfort = require('@openfort/openfort-node').default;
export class MintController {

    constructor() {
        this.run = this.run.bind(this);
    }

    async run(req: Request, res: Response, next: NextFunction) {

        const openfort = new Openfort(process.env.OPENFORT_SECRET_KEY);
        const auth = req.headers.authorization;
        if (!auth) {
            return res.status(401).json({ error: "No authorization header" });
        }

        const token = auth.split("Bearer ")[1];
        if (!token) {
            return res.status(401).json({ error: "No token" });
        }


        const player = await openfort.iam.verifyAuthToken(token)
        if (!player) {
            return res.status(401).json({ error: "Invalid token" });
        }

        const contract_id = process.env.OPENFORT_CONTRACT_ID
        const policy_id = process.env.OPENFORT_POLICY_ID
        const chainId = 80002;

        const interaction_mint = {
            contract: contract_id,
            functionName: "mint",
            functionArgs: [player.playerId, 0, 1, ""],
        };

        //['0xbf765C77e769B3B5CD19c1e2CF450c9e8a10b296', 0, 1, ""]

        try {
            console.log("transactionIntent")
            const transactionIntent = await openfort.transactionIntents.create({
                player: player.playerId,
                policy: policy_id,
                chainId,
                interactions: [interaction_mint],
            });

            console.log("transactionIntent", transactionIntent)
            return res.send({
                transactionIntentId: transactionIntent.id,
                userOperationHash: transactionIntent.userOperationHash,
            });
        } catch (e: any) {
            console.log(e);
            return res.send({
                data: null,
            });
        }

    }
}
