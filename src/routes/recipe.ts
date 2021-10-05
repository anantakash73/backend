import { Request, Response } from "express"
import { RecipeModel } from "../models/recipe"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
): Promise<void> => {
  // TODO fetch and return a recipe
  const { recipeId } = req.params

  const foundRecipe = await RecipeModel.findById(recipeId)
  res.send(foundRecipe)

}
