import CEP from "../models/IBGECEP";
import IBGECity from "../models/IBGECity";


class IBGERespository {
    async getCep(cep: string): Promise<CEP> {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        return data;
    }

    async getCities(state: string): Promise<IBGECity[]> {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
        const data = await response.json()
        return data.map((city: { id: number, nome: string }) => new IBGECity(city.id, city.nome))
    }
}

export default new IBGERespository();