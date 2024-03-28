import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Este bloque de código configura las opciones de persistencia para redux-persist.
const persistConfig = {
  key: "red-genesis", // La clave "red-genesis" se utiliza para identificar el estado persistido en el almacenamiento.
  storage, // El objeto de almacenamiento importado anteriormente se utiliza para especificar dónde se almacenará el estado.
  blacklist: [""], // Este objeto se utiliza para excluir la persistencia de algunos estados. En este caso, no se excluye ningún estado
};

// Esta línea crea un reductor raíz combinando varios reductores en uno solo.
const rootReducer = combineReducers({});


// Esta línea envuelve el reductor raíz con persistReducer para que el estado pueda persistirse utilizando la configuración establecida anteriormente.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Esta línea crea y exporta la tienda Redux utilizando configureStore.
export const store = configureStore({
  reducer: persistedReducer, // El reductor persistido se pasa como el reductor raíz de la tienda.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Se configura un middleware personalizado que desactiva la comprobación de serializabilidad.
});

// Esta línea crea y exporta el persistor utilizando persistStore y la tienda Redux creada anteriormente.
export const persistor = persistStore(store);

// Esta línea exporta un tipo TypeScript para el estado raíz de la tienda, que se obtiene del tipo de retorno de la función store.getState().
export type RootState = ReturnType<typeof store.getState>;

// Esta línea exporta un tipo TypeScript para el despachador de acciones de la tienda, que se obtiene del tipo de la función store.dispatch().
export type AppDispatch = typeof store.dispatch;
