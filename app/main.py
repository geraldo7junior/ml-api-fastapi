from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

# Inicializar a API
app = FastAPI()

# Carregar o modelo
MODEL_PATH = "app/models/wine_model.pkl"
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

# Schema para entrada do cliente
class WineInput(BaseModel):
    alcohol: float
    malic_acid: float
    ash: float
    alcalinity_of_ash: float
    magnesium: float
    total_phenols: float
    flavanoids: float
    nonflavanoid_phenols: float
    proanthocyanins: float
    color_intensity: float
    hue: float
    od280_od315_of_diluted_wines: float
    proline: float

# Endpoint para prever
@app.post("/predict/")
async def predict(data: WineInput):
    input_features = np.array([[data.alcohol, data.malic_acid, data.ash, data.alcalinity_of_ash,
                                 data.magnesium, data.total_phenols, data.flavanoids,
                                 data.nonflavanoid_phenols, data.proanthocyanins,
                                 data.color_intensity, data.hue,
                                 data.od280_od315_of_diluted_wines, data.proline]])
    prediction = model.predict(input_features)
    return {"prediction": int(prediction[0])}
