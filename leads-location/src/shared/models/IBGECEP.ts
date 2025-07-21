

export default class IBGECEP {
  public cep: string;
  public logradouro: string;
  public complemento: string;
  public unidade: string;
  public bairro: string;
  public localidade: string;
  public uf: string;
  public estado: string;
  public regiao: string;
  public ibge: string;
  public gia: string;
  public ddd: string;
  public siafi: string;

  constructor(
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string,
    regiao: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.unidade = unidade;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
    this.estado = estado;
    this.regiao = regiao;
    this.ibge = ibge;
    this.gia = gia;
    this.ddd = ddd;
    this.siafi = siafi;
  }
}