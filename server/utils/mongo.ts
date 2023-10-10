export const modelSave = async (model: any) => {
  try {
    await model.save();
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      message: e.erros
        ? Object.keys(e.errors)
            .map((key: any) => e.errors[key].message)
            .join(";")
        : e.message,
    });
  }
};
