import { http } from './config'

class InventoryService{
    listar(){
        return http.get("inventory")
    }

    deletar(id){
        return http.delete("inventory/" + id)
    }

    salvar(item){
        return http.post("inventory", item)
    }

    listarItem(id){
        return http.get("inventory/" + id)
    }

    atualizaItem(id, item){
        return http.put("inventory/" + id, item)
    }

    howMany(valor){
        return http.get('howmany/', {
            params: {
                complete : valor
            }
        })
    }
}
export default new InventoryService
