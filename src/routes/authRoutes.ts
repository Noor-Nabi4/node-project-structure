import { Router } from 'express';
const authRouter = Router();
authRouter.route('/').get();
export default authRouter;
