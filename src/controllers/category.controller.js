const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const categoryCreated = await categoryService.createCategory(name);

    return res.status(201).json(categoryCreated);
};

const getAll = async (_req, res) => {
    const categories = await categoryService.getAll();

    return res.status(201).json(categories);
};

module.exports = {
    createCategory,
    getAll,
};