export interface INews {
  id?: number, // Optionel
  categorie: string,
  titre: string,
  texte: string,
  datePublication: Date,
  dateModification: Date | null,
  image: string
}
