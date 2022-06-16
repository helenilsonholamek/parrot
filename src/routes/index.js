const express = require ('express')
const userController = require ('../controllers/UserController')
const postController = require ('../controllers/PostController')
const ComentsPostController = require('../controllers/ComentsPostController')
const authController = require('../controllers/authController')
const auth = require ('../middlewares/auth')
const userLogado = require ('../middlewares/userLogado')
const likesController = require('../controllers/likeController')
const routes = express.Router()

//ROTAS PARA O CRUD DE USUÁRIOS
routes.post('/usuario/criar', userController.cadastrarUser)
routes.get('/usuario/lista', userController.listaUser)
routes.put('/usuario/atualizar/:id', userController.updateUser)
routes.delete('/usuario/deletar/:id', userController.deleteUser)

//ROTAS PARA O CRUD DE POST
routes.post('/post/criar', postController.cadastrarPost)
routes.get('/post/lista', postController.listaPost)
routes.put('/post/atualizar/:id', postController.updatePost)
routes.delete('/post/deletar/:id', postController.deletePost)

//ROTAS PARA O CRUD DE FAZER COMENTARIOS EM POST
routes.post('/post/coments/criar', ComentsPostController.cadastrarComents)
routes.get('/post/coments/lista', ComentsPostController.listarComents)
routes.put('/post/coments/atualizar/:id', ComentsPostController.updateComentsPost)
routes.delete('/post/coments/deletar/:id', ComentsPostController.deleteComentsPost)

//ROTAS DE LIKES
routes.post('/post/likes/enviar/:idPost', likesController.cadastrarLike)
routes.get('/post/likes/qtnlikes/:idPost', likesController.qtnLikes)
routes.delete('/post/likes/remover/:idLike', likesController.removerLike)

//ROTA DE LOGIN DO USUÁRIO
routes.post('/login', authController.login)
routes.post('/login/perfil', auth, userLogado.user)


module.exports = routes