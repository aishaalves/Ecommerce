# 🚀 Guia Rápido de Inicialização

## Passos Rápidos
 
### 1. Instalar Dependências

```bash
# Back-end
npm install

# Front-end
cd frontend
npm install
cd ..
```

### 2. Configurar PostgreSQL

```bash
# Criar banco de dados
createdb ecommerce_db
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecommerce_db
DB_USER=postgres
DB_PASSWORD=sua_senha_postgres

JWT_SECRET=seu_secret_key_aqui_qualquer_string
JWT_EXPIRES_IN=7d

OPENAI_API_KEY=sua_chave_openai_aqui
```

**Importante**: 
- Substitua `sua_senha_postgres` pela senha do seu PostgreSQL
- Obtenha uma API Key da OpenAI em: https://platform.openai.com/api-keys

### 4. Popular Banco de Dados

```bash
npm run seed
```

Isso criará:
- Usuário admin: `admin@ecommerce.com` / `admin123`
- Usuário teste: `joao@test.com` / `123456`
- 8 produtos de exemplo

### 5. Iniciar Aplicação

**Terminal 1 - Back-end:**
```bash
npm run dev
```

**Terminal 2 - Front-end:**
```bash
cd frontend
npm run dev
```

### 6. Acessar Aplicação

- **Front-end**: http://localhost:3001
- **Back-end API**: http://localhost:3000
- **Documentação Swagger**: http://localhost:3000/api-docs

## Testando a Aplicação

1. **Login**: Use `joao@test.com` / `123456`
2. **Navegar**: Explore os produtos
3. **Filtros**: Teste filtros por categoria, preço e busca
4. **Carrinho**: Adicione produtos ao carrinho
5. **Pedido**: Finalize um pedido
6. **Recomendações**: Veja produtos recomendados na home
7. **ChatBot**: Clique no botão de chat no canto inferior direito

## Estrutura de Pastas

```
Ecommerce/
├── src/              # Back-end TypeScript
├── frontend/         # Front-end React
├── .env              # Variáveis de ambiente (criar)
└── README.md         # Documentação completa
```

## Problemas Comuns

### Erro de conexão com PostgreSQL
- Verifique se o PostgreSQL está rodando
- Confirme as credenciais no `.env`

### Erro do ChatBot
- Verifique se a `OPENAI_API_KEY` está configurada
- O ChatBot funciona apenas para usuários autenticados

### Porta já em uso
- Altere a porta no `.env` (back-end) ou `vite.config.ts` (front-end)

## Próximos Passos

- Leia o `README.md` completo para mais detalhes
- Explore a documentação Swagger em `/api-docs`
- Personalize produtos e categorias conforme necessário


