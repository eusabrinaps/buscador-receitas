# 🍳 Buscador de Receitas
 
Aplicação web para buscar receitas a partir dos ingredientes que você tem em casa, usando a [Spoonacular Food API](https://spoonacular.com/food-api).
 
## Funcionalidades
 
- Busca de receitas por ingredientes (ex.: `chicken, rice`)
- Cards com imagem, título e quantidade de ingredientes que você tem e que faltam
- Página de detalhes da receita com tempo de preparo, porções, ingredientes e modo de preparo
- Estados de interface: carregando, erro e nenhum resultado
- Tema claro/escuro automático, de acordo com o sistema do usuário
- Layout responsivo em grade
## Tecnologias
 
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Spoonacular Food API](https://spoonacular.com/food-api)
## Como rodar
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) (versão LTS)
- Uma conta no Spoonacular com a **API Key** (disponível no painel `spoonacular.com/food-api/console`, aba Profile)
### Passo a passo
 
```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd buscador-receitas
 
# 2. Instale as dependências
npm install
 
# 3. Crie o arquivo .env na raiz do projeto
echo "VITE_SPOONACULAR_KEY=sua_chave_aqui" > .env
 
# 4. Inicie o servidor de desenvolvimento
npm run dev
```
 
Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).
 
## Rotas
 
| Rota | Página |
|---|---|
| `/` | Busca por ingredientes |
| `/recipe/:id` | Detalhes da receita |
 
## Endpoints da API utilizados
 
| Endpoint | Uso |
|---|---|
| `GET /recipes/findByIngredients` | Busca receitas a partir dos ingredientes informados |
| `GET /recipes/{id}/information` | Detalhes completos de uma receita |
 
A autenticação é feita pelo parâmetro `apiKey` na URL.
 
## Observações
 
- O Spoonacular funciona melhor com ingredientes **em inglês**.
- O plano gratuito tem **cota diária de requisições**. Em desenvolvimento, o `StrictMode` do React executa efeitos duas vezes, o que pode consumir a cota mais rápido.
- Os tipos em `src/types/recipe.ts` descrevem apenas os campos consumidos pela aplicação, não o JSON inteiro. Eles não validam os dados em tempo de execução.
## Próximos passos
 
- [ ] Home com receitas em destaque (`/recipes/random`)
- [ ] Exibir o `summary` da receita com sanitização de HTML (DOMPurify)
- [ ] Tratamento de erros por status (401, 402, 429)
- [ ] Cache das respostas para economizar a cota
- [ ] Extrair a lógica de busca para um hook (`useRecipes`)
- [ ] Busca avançada com filtros e paginação (`complexSearch`)
- [ ] Backend próprio para esconder a chave da API e salvar favoritos
