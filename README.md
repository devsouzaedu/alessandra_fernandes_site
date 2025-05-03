# Site Alessandra Fernandes Nutricionista

Este é o site oficial da nutricionista Alessandra Fernandes, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## 🔍 Sobre o Projeto

O site foi criado para apresentar os serviços oferecidos pela nutricionista Alessandra Fernandes, especialista em nutrição esportiva, emagrecimento e abordagem funcional integrativa.

## 🚀 Tecnologias Utilizadas

- **Next.js 14**: Framework React com renderização do lado do servidor
- **React**: Biblioteca para criação de interfaces de usuário
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide Icons**: Biblioteca de ícones

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/alessandra_nutricionista_site.git

# Acesse o diretório
cd alessandra_fernandes_site

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

## 📦 Estrutura do Projeto

```
/
├── public/          # Arquivos estáticos (imagens, etc.)
├── src/             # Código fonte
│   ├── app/         # Páginas da aplicação (App Router do Next.js)
│   ├── components/  # Componentes reutilizáveis
└── ...
```

## 🌐 Deploy

O site está configurado para deploy na Vercel. Para fazer o deploy:

1. Crie uma conta na [Vercel](https://vercel.com/)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente (se necessário)
4. Clique em "Deploy"

Ou use o CLI da Vercel:

```bash
# Instale o CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

## 🔗 Links Úteis

- [Instagram da Alessandra](https://www.instagram.com/nutrialefernandes)
- [Agendar Consulta](https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21)

## 📝 Licença

Este projeto é propriedade de Alessandra Fernandes - Todos os direitos reservados.

## Configuração do Ambiente

1.  **Clone o repositório.**
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Variáveis de Ambiente:**
    - Crie um arquivo `.env.local` na raiz do projeto.
    - Copie o conteúdo de `.env.example` (se existir) ou adicione as seguintes variáveis com suas credenciais do Supabase:
      ```
      NEXT_PUBLIC_SUPABASE_URL=URL_DO_SEU_SUPABASE
      NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_SUPABASE
      SUPABASE_SERVICE_ROLE_KEY=SUA_CHAVE_SERVICE_ROLE_SUPABASE
      ```

## Funcionalidades

### Blog

-   **Visualização Pública:** A rota `/blog` exibe os posts publicados.
-   **Gerenciamento (Admin):**
    -   `/admin/posts`: Lista todos os posts (publicados e rascunhos).
    -   `/admin/posts/new`: Permite criar novos posts.
    -   `/admin/posts/edit/[id]`: Permite editar posts existentes.
    -   As operações de criar, editar e deletar posts são realizadas através de Server Actions localizadas em `src/app/admin/posts/actions.ts`.

### Área Administrativa (`/admin`)

-   **Autenticação:** O acesso à área administrativa (`/admin` e suas sub-rotas, exceto `/admin/login`) é protegido por um sistema de login simples.
-   **Credenciais:**
    -   Usuário: `admin`
    -   Senha: `alessandranutri`
-   **Acesso:**
    1.  Navegue para `/admin/login`.
    2.  Insira as credenciais acima.
    3.  Após o login bem-sucedido, um cookie de autenticação (`admin-auth`) será definido e você será redirecionado para a área administrativa.
    4.  O middleware (`src/middleware.ts`) garante que apenas usuários com este cookie válido possam acessar as páginas dentro de `/admin`.
    5.  Use o botão "Sair" no cabeçalho para remover o cookie e fazer logout.
-   **Nota:** Este é um sistema de autenticação básico. Para maior segurança em produção, considere usar uma solução mais robusta como Supabase Auth.

## Executando o Projeto

-   **Desenvolvimento:**
    ```bash
    npm run dev
    ```
-   **Build:**
    ```bash
    npm run build
    ```
-   **Produção:**
    ```bash
    npm start
    ```

## Tecnologias Utilizadas

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Supabase (Banco de Dados e Autenticação)
-   ESLint
