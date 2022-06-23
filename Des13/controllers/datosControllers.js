const datos = {}

export const datosController = (req, res) => {
    res.json({ datos, user: req.user })
}