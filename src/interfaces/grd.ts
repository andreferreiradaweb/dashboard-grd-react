export interface IGRDs {
  id: number
  name: string
  description: string
  status: number
  files: number
  responsible: string
  project: {
    id: number
    name: string
  }
}
