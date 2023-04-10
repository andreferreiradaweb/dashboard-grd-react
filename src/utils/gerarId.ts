export function gerarId() {
  let id = ''
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
  }

  return id
}
