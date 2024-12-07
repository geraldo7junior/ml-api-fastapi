
# Projeto de Previsão de Tipos de Vinho com API e Aplicativo Mobile

Este repositório contém dois componentes principais:

1. **API de Machine Learning**: Uma API desenvolvida em Python usando FastAPI que fornece previsões sobre o tipo de vinho com base em atributos químicos.
2. **Aplicativo Mobile**: Um aplicativo em React Native que interage com a API, permitindo que os usuários insiram os dados e obtenham a previsão diretamente no dispositivo móvel.

---

## Estrutura do Repositório

```
.
├── api-vinho/
│   ├── app/
│   │   ├── main.py
│   │   ├── schemas.py
│   │   └── models/
│   │       └── wine_model.pkl
│   ├── requirements.txt
│   ├── Dockerfile
│   └── render.yaml
├── app-vinho/
│   ├── App.js
│   ├── package.json
│   └── ...
└── README.md
```

- **`api-vinho/`**: Contém a API para previsão de tipos de vinho.
- **`app-vinho/`**: Contém o código do aplicativo React Native.

---

## 1. API de Machine Learning

A API utiliza um modelo de Regressão Logística treinado com o dataset **Wine** do Scikit-learn. O modelo prevê o tipo de vinho com base em 13 atributos químicos.

### Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-repositorio/vinho-ml-api.git
   cd api-vinho
   ```

2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

3. Execute a API localmente:
   ```bash
   uvicorn app.main:app --reload
   ```

4. Teste a API em `http://127.0.0.1:8000/docs`.

### Deploy no Render

1. Configure o serviço no [Render](https://render.com/), conectando o repositório e utilizando o arquivo `render.yaml`.
2. Após o deploy, a API estará disponível em um endpoint público, como:
   ```bash
   https://ml-api-fastapi-3jzs.onrender.com
   ```

### Testando a API

Você pode usar o seguinte comando `curl` para testar:
```bash
curl -X POST https://ml-api-fastapi-3jzs.onrender.com/predict/ -H "Content-Type: application/json" -d '{
  "alcohol": 13.0,
  "malic_acid": 2.3,
  "ash": 2.4,
  "alcalinity_of_ash": 15.6,
  "magnesium": 127.0,
  "total_phenols": 2.8,
  "flavanoids": 3.0,
  "nonflavanoid_phenols": 0.2,
  "proanthocyanins": 1.8,
  "color_intensity": 5.6,
  "hue": 1.04,
  "od280_od315_of_diluted_wines": 3.92,
  "proline": 1065.0
}'
```

---

## 2. Aplicativo Mobile

O aplicativo mobile permite que os usuários insiram os atributos químicos de um vinho e obtenham a previsão diretamente da API.

### Configuração

1. Navegue até a pasta do aplicativo:
   ```bash
   cd app-vinho
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o aplicativo (usando Expo):
   ```bash
   npx expo start
   ```

4. Use o QR Code no terminal para abrir o aplicativo em um dispositivo físico ou emulador.

### Estrutura do App

- **Entrada de Dados:** Formulário em português com 13 campos numéricos, representando os atributos químicos do vinho.
- **Interação com a API:** O app faz uma requisição `POST` para o endpoint `/predict/` da API e exibe o tipo de vinho previsto.

### Teste no App

Preencha os campos com valores numéricos e toque no botão **Enviar**. O aplicativo exibirá um alerta com a classe prevista, como:
```
Classe prevista: 1
```

---

## Próximos Passos

1. **Melhorias no Aplicativo:**
   - Adicionar validações nos campos.
   - Melhorar a interface do usuário.

2. **Expansão da API:**
   - Adicionar suporte para novos modelos de Machine Learning.
   - Melhorar os logs e manutenibilidade.

---

## Licença

Este projeto é livre para uso e modificação. Sinta-se à vontade para contribuir e expandir as funcionalidades!
