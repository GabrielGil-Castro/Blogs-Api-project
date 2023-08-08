const { postService } = require('../services');

const getAll = async (req, res) => {
    const posts = await postService.getAll();
    console.log('ID AQUI ====>', posts);
    return res.status(200).json(posts);
};

module.exports = {
    getAll,
};