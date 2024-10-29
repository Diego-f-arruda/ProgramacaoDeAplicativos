import { contextBridge, ipcRenderer } from "electron";
import Veiculo from "./entity/Veiculo";

contextBridge.exposeInMainWorld('bancoAPI', {
    createVeiculo: (veiculo: Veiculo) => ipcRenderer.invoke('create', veiculo)
} )