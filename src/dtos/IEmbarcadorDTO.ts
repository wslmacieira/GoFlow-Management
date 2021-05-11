interface ICreateEmbarcadorDTO {
  name: string;
  doc: string;
  about: string;
  active: boolean;
  site: string;
}

interface IImportEmbarcadorDTO {
  name: string;
  doc: string;
  about: string;
  active: boolean;
  site: string;
}

export { ICreateEmbarcadorDTO, IImportEmbarcadorDTO };
