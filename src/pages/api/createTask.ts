import type { NextApiRequest, NextApiResponse } from "next";
import { prisma, getServerAuthSession } from "server";

export default async function createExample(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerAuthSession({ req, res });
  const userId = session?.user?.id;

  if (!userId) {
    res.status(401).json({ error: "failed to find user or userId" });
  }

  const task = await prisma.task.create({
    data: {
      text: "",
      userId: userId!,
      favorite: false,
      isComplete: false,
    },
  });

  res.status(200).json(task);
}
