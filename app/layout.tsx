// import "./globals.css";
// import Header from "./components/Header";


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col">

//         <Header />

//         <main className="flex-1 pt-16">
//           {children}
//         </main>

        

//       </body>
//     </html>
//   );
// }




import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}