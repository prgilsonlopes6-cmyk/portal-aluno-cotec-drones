import "./globals.css";
export const metadata = {
  title: "Portal do Aluno | COTEC — Pilotagem de Drones",
  description: "Central de aprendizagem, legislação, cadastros e segurança para alunos do curso de pilotagem de drones."
};
export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}